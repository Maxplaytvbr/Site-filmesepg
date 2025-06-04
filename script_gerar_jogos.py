import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

url = 'https://mi.tv/br/programacao'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Aqui você deve ajustar os seletores certos do mi.tv
# Exemplo fictício de como ficaria:
jogos = [
    {
        "time1": "Flamengo",
        "time2": "Botafogo",
        "escudo1": "https://upload.wikimedia.org/wikipedia/commons/1/16/Flamengo_braz_logo.svg",
        "escudo2": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Botafogo_de_Futebol_e_Regatas_logo.svg",
        "hora": "16:00",
        "data": datetime.now().strftime("%Y-%m-%d"),
        "dia_semana": datetime.now().strftime("%a"),
        "campeonato": "Brasileirão Série A",
        "canal": "Globo, Premiere",
        "status": "futuro",
        "placar1": 0,
        "placar2": 0
    }
]

with open('jogos.json', 'w', encoding='utf-8') as f:
    json.dump(jogos, f, ensure_ascii=False, indent=4)
