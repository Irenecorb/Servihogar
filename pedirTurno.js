
// Función para obtener parámetros de la URL
function obtenerParametroURL(parametro) {
    const params = new URLSearchParams(window.location.search);
    return params.get(parametro);
}

// Cargar el servicio seleccionado en el formulario
document.addEventListener('DOMContentLoaded', function () {
    const servicio = obtenerParametroURL('servicio');
    if (servicio) {
        const servicioInput = document.getElementById('servicio'); // Asumiendo que el formulario tiene un input con id="servicio"
        if (servicioInput) {
            servicioInput.value = servicio; // Cargar el servicio en el input
        }
    }
});

function configurarFormularioTurnos() {
    const form = document.getElementById('form');

    if (!form) {
        console.error('Formulario no encontrado');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Captura los valores del formulario
        const servicio = document.getElementById('servicio').value;
        const direccion = document.getElementById('direccion').value;
        const fecha = document.getElementById('fecha').value;
        const medioPago = document.querySelector('input[name="pago"]:checked')?.value;

        // Validación de campos (opcional)
        if (!servicio || !direccion || !fecha || !medioPago) {
            alert('Por favor, complete todos los campos antes de enviar.');
            return;
        }

        // Crea un objeto de turno
        const turno = {
            servicio,
            direccion,
            fecha,
            medioPago
        };

        // Obtiene los turnos actuales del Local Storage o inicializa un array vacío
        const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

        // Agrega el nuevo turno al array
        turnos.push(turno);

        // Guarda el array actualizado en Local Storage
        localStorage.setItem('turnos', JSON.stringify(turnos));

        // Limpia el formulario
        form.reset();

        // Muestra un mensaje de confirmación
        alert('Tu turno ha sido registrado correctamente.');

        // Opcional: Redirige a la página de "Mis Turnos"
        window.location.href = 'misTurnos.html';
    });
}

// Invoca la función en el script principal o dentro de `DOMContentLoaded`
document.addEventListener('DOMContentLoaded', configurarFormularioTurnos);


