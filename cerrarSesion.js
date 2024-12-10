function logout() {
    // Eliminar los datos del localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail'); // Si se usó para almacenar el correo

    // Redirigir al usuario al login
    window.location.href = 'index.html';
}

// Evento para el botón de cerrar sesión
document.getElementById('logout').addEventListener('click', logout);

// Función para cargar servicios dinámicamente
function cargarServicios() {
    const servicios = [
        { icono: 'fas fa-bolt', titulo: 'Electricista' },
        { icono: 'fas fa-seedling', titulo: 'Jardinería' },
        { icono: 'fas fa-bug', titulo: 'Fumigación' },
        { icono: 'fas fa-fire', titulo: 'Gasista' },
        { icono: 'fas fa-wrench', titulo: 'Plomería' },
        { icono: 'fas fa-paint-roller', titulo: 'Pinturería' },
    ];

    const serviciosContainer = document.querySelector('#servicios .row');

    servicios.forEach(servicio => {
        const card = document.createElement('div');
        card.className = 'col-md-4 my-3';
        card.innerHTML = `
            <div class="card servicio-card" data-servicio="${servicio.titulo}">
                <div class="card-body text-center">
                    <i class="${servicio.icono} fa-3x mb-3"></i>
                    <h5 class="card-title">${servicio.titulo}</h5>
                </div>
            </div>
        `;
        serviciosContainer.appendChild(card);
    });

    // Agregar eventos de clic a cada tarjeta
    document.querySelectorAll('.servicio-card').forEach(card => {
        card.addEventListener('click', function () {
            const servicioSeleccionado = this.getAttribute('data-servicio');
            // Redirigir al formulario con el servicio seleccionado como parámetro en la URL
            window.location.href = `pedirTurno.html?servicio=${encodeURIComponent(servicioSeleccionado)}`;
        });
    });
}

// Llama a la función para cargar los servicios al cargar la página
document.addEventListener('DOMContentLoaded', cargarServicios);