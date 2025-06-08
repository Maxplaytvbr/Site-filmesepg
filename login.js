document.getElementById("toggle-password").addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;
    const errorMsg = document.getElementById("error-msg");

    // Simulação de validação (substituir pela lógica real)
    if (username === "admin" && password === "1234") {
        errorMsg.textContent = "";
        alert("Login bem-sucedido!");
        // Redirecionar ou continuar lógica aqui
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos.";
    }

    if (remember) {
        localStorage.setItem("savedUsername", username);
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
