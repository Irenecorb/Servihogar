// Agregar el evento submit al formulario
document.getElementById('form').addEventListener('submit', function (event) {
    // Evitar el envío predeterminado del formulario
    event.preventDefault();

    // Obtener los valores ingresados en los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Credenciales válidas (hardcodeadas)
    const validEmail = 'usuarioServi@gmail.com';
    const validPassword = 'hogar';

    //validan las credenciales
    if (email === validEmail && password === validPassword) {
        // Guardar el estado del usuario en localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email); // Opcional, para identificar al usuario

        // Si las credenciales coinciden, redirigir a home.html
        window.location.href = 'servicios.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    } 
});

// Verificar si el usuario ya está logueado
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // Redirigir automáticamente si ya está logueado
        window.location.href = 'servicios.html';
    }
});
<<<<<<< HEAD
=======

>>>>>>> 0a8d06a7ff542d7a4e87987b7a3a0b99c97adece
