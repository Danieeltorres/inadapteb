document.addEventListener("DOMContentLoaded", function() {
    // Obtener datos del perfil desde localStorage
    const username = localStorage.getItem('username') || 'No especificado';
    const email = localStorage.getItem('email') || 'No especificado';
    const interests = localStorage.getItem('interests') || 'No especificado';
    const skills = localStorage.getItem('skills') || 'No especificado';

    // Mostrar datos en la página
    document.getElementById('username-display').textContent = username;
    document.getElementById('profile-email').textContent = email;
    document.getElementById('profile-interests').textContent = interests;
    document.getElementById('profile-skills').textContent = skills;

    // Mostrar el botón de editar perfil
    document.getElementById('edit-profile-btn').addEventListener('click', function() {
        document.querySelector('.profile-card').style.display = 'none';
        document.querySelector('.edit-profile-section').style.display = 'block';

        // Pre-cargar los valores actuales del perfil en el formulario de edición
        document.getElementById('edit-username').value = username;
        document.getElementById('edit-email').value = email;
        document.getElementById('edit-interests').value = interests;
        document.getElementById('edit-skills').value = skills;
    });

    // Guardar cambios del perfil
    document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario de edición
        const newUsername = document.getElementById('edit-username').value;
        const newEmail = document.getElementById('edit-email').value;
        const newInterests = document.getElementById('edit-interests').value;
        const newSkills = document.getElementById('edit-skills').value;

        // Guardar los datos actualizados en localStorage
        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', newEmail);
        localStorage.setItem('interests', newInterests);
        localStorage.setItem('skills', newSkills);

        // Mostrar los nuevos datos en la página del perfil
        window.location.reload();
    });
});
