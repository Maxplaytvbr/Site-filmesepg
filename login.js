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
    const storage = lembrar ? localStorage : sessionStorage;
    const tempo = lembrar ? Date.now() + 6 * 60 * 60 * 1000 : null;

    storage.setItem("logado", "true");
    if (tempo) localStorage.setItem("expira", tempo.toString());

    window.location.href = "cliente.html";
  } else {
    msg.classList.remove("hidden");
  }
});

if (localStorage.getItem("logado") === "true") {
  const expira = parseInt(localStorage.getItem("expira"));
  if (Date.now() < expira) {
    window.location.href = "cliente.html";
  } else {
    localStorage.clear();
  }
} else if (sessionStorage.getItem("logado") === "true") {
  window.location.href = "cliente.html";
}
