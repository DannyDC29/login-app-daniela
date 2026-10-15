document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Error: Todos los campos son obligatorios.";
    } else {
        errorMessage.style.color = "green";
        errorMessage.textContent = "¡Inicio de sesión exitoso!";
    }
});
