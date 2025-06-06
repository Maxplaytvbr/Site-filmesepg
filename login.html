const validUsers = {
  "maxplay": "maxplay",
  "apoli": "apoli"
};

const form = document.getElementById("loginForm");
const msg = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("usuario").value.trim();
  const pass = document.getElementById("senha").value.trim();
  const lembrar = document.getElementById("lembrar").checked;

  if (validUsers[user] === pass) {
    if (lembrar) {
      localStorage.setItem("logado", "true");
      localStorage.setItem("expira", (Date.now() + 6 * 60 * 60 * 1000).toString()); // 6h
    }
    // redireciona SEM salvar nada se não lembrar
    window.location.href = "cliente.html";
  } else {
    msg.classList.remove("hidden");
  }
});

// se estiver salvo no localStorage, valida
if (localStorage.getItem("logado") === "true") {
  const expira = parseInt(localStorage.getItem("expira") || "0");
  if (Date.now() < expira) {
    window.location.href = "cliente.html";
  } else {
    localStorage.clear();
  }
}
