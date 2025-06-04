import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime, timedelta
import re

# Lista de canais esportivos do mi.tv (slug na URL)
canais_esportivos = [
    "sportv", "sportv-2", "sportv-3",
    "premiere", "premiere-2", "premiere-3", "premiere-4",
    "espn", "espn-2", "espn-3", "espn-4",
    "tnt-sports", "band-sports", "combate"
]

# Data de hoje no formato necessário para URL
hoje = datetime.now().strftime('%Y-%m-%d')

jogos = []

# Função para extrair time1 x time2 do título
def extrair_times(titulo):
    padroes = [
        r"(.+?)\s+x\s+(.+)",  # Ex: Corinthians x Flamengo
        r"(.+?)\s+vs\s+(.+)", # Ex: Corinthians vs Flamengo
    ]
    for padrao in padroes:
        match = re.match(padrao, titulo, re.IGNORECASE)
        if match:
            return match.group(1).strip(), match.group(2).strip()
    return None, None

print("🔎 Buscando jogos...")

for canal in canais_esportivos:
    url = f"https://mi.tv/br/canais/{canal}?date={hoje}"
    try:
        r = requests.get(url, timeout=10)
        soup = BeautifulSoup(r.text, "html.parser")

        programas = soup.select(".channel-schedule .program")
        for prog in programas:
            titulo = prog.select_one(".program__title")?.get_text(strip=True)
            hora = prog.select_one(".program__time")?.get_text(strip=True)

            if not titulo or not hora:
                continue

            # Pular se não for jogo de futebol
            time1, time2 = extrair_times(titulo)
            if not time1 or not time2:
                continue

            # Montar horário ISO (data atual + hora encontrada)
            hora_inicio = datetime.strptime(f"{hoje} {hora}", "%Y-%m-%d %H:%M")
            hora_fim = hora_inicio + timedelta(hours=2)  # assume 2h de jogo

            jogos.append({
                "time1": time1,
                "time2": time2,
                "horario_inicio": hora_inicio.isoformat(),
                "horario_fim": hora_fim.isoformat(),
                "canal": canal.replace("-", " ").title()
            })

    except Exception as e:
        print(f"Erro ao processar {canal}: {e}")

# Salvar no jogos.json
with open("jogos.json", "w", encoding="utf-8") as f:
    json.dump(jogos, f, indent=2, ensure_ascii=False)

print(f"✅ {len(jogos)} jogo(s) salvo(s) em jogos.json")
