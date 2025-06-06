const validUsers = {
  "maxplay": "maxplay!",
  "apoli": "apoli!"
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
      localStorage.setItem("expira", (Date.now() + 6 * 60 * 60 * 1000).toString()); // 6 horas
    }
    window.location.href = "index.html";
  } else {
    msg.classList.remove("hidden");
  }
});

if (localStorage.getItem("logado") === "true") {
  const expira = parseInt(localStorage.getItem("expira") || "0");
  if (Date.now() < expira) {
    window.location.href = "index.html";
  } else {
    localStorage.clear();
  }
}
