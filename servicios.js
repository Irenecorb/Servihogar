/*document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar envío real del formulario
    const servicio = document.getElementById('servicio').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
    const pago = document.querySelector('input[name="pago"]:checked').value;
    alert(`¡Turno confirmado!\nServicio: ${servicio}\nDirección: ${direccion}\nFecha: ${fecha}\nPago: ${pago}`);
    // Aquí podrías agregar lógica adicional para guardar los datos en una base de datos o enviarlos a un servidor.
});*/
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Captura los valores del formulario
    const servicio = document.getElementById('servicio').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
    const medioPago = document.querySelector('input[name="pago"]:checked').value;
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
