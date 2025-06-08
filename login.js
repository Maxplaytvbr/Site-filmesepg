const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');
const rememberBox = document.getElementById('remember');

// Usuários permitidos
const allowedUsers = ["Maxplay", "maxplay", "Apoli", "apoli"];

// Preencher automaticamente se tiver no localStorage
window.onload = () => {
    const saved = localStorage.getItem("maxplay-login");
    if (saved) {
        const { user, pass } = JSON.parse(saved);
        document.getElementById('username').value = user;
        document.getElementById('password').value = pass;
        rememberBox.checked = true;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === password && allowedUsers.includes(username)) {
        if (rememberBox.checked) {
            localStorage.setItem("maxplay-login", JSON.stringify({ user: username, pass: password }));
        } else {
            localStorage.removeItem("maxplay-login");
        }
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        errorMsg.textContent = "Usuário ou senha inválidos.";
    }
});

// Alternar visibilidade da senha
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    togglePassword.textContent = isHidden ? '🙈' : '👁️';
});
