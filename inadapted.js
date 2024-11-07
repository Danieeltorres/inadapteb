// Mostrar el formulario de "Registro Completo" cuando se hace clic en "Registrarse"
document.getElementById('signup-button').addEventListener('click', function() {
    document.querySelector('.signup').style.display = 'none';  
    document.querySelector('.full-signup').style.display = 'block';  
});

// Cuando el formulario de "Registro Completo" se envíe
document.getElementById('complete-signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que se recargue la página al enviar el formulario

    const username = document.getElementById('full-username').value;
    const password = document.getElementById('full-password').value;
    const email = document.getElementById('email').value;

    // Guardamos los datos del usuario en localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);

    // Muestra el mensaje de éxito
    document.getElementById('complete-signup-message').textContent = '¡Registro completado con éxito!';

    // Después de completar el registro, ocultamos la sección de "Registro Completo"
    document.querySelector('.full-signup').style.display = 'none';
    
    // Mostramos la sección de "Iniciar Sesión"
    document.querySelector('.login').style.display = 'block';
});

// Manejar inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        window.location.href = 'profile.html'; // Redirige al perfil
    } else {
        document.getElementById('login-message').textContent = 'Usuario o contraseña incorrectos';
    }
});
