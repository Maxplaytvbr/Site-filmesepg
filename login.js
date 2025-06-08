document.getElementById("toggle-password").addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim().toLowerCase();
    const remember = document.getElementById("remember").checked;
    const errorMsg = document.getElementById("error-msg");

    const validValues = ["maxplay", "apoly", "apoli"];

    if (validValues.includes(username) && validValues.includes(password)) {
        errorMsg.textContent = "";
        alert("Login bem-sucedido!");
        // Redirecionar ou executar ações adicionais
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos.";
    }

    if (remember) {
        localStorage.setItem("savedUsername", document.getElementById("username").value.trim());
    } else {
        localStorage.removeItem("savedUsername");
    }
});

// Carregar usuário salvo
window.addEventListener("load", function () {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("remember").checked = true;
    }
});
