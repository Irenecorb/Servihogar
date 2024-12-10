// Obtén los turnos desde el Local Storage
const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

// Obtén el contenedor donde se mostrarán los turnos
const tableBody = document.getElementById('turnosTableBody');

// Función para actualizar la tabla y el Local Storage
function actualizarTabla() {
    tableBody.innerHTML = ''; // Limpia el contenido actual de la tabla

    turnos.forEach((turno, index) => {
        const row = document.createElement('tr');

        // Crea las celdas para cada propiedad del turno
        row.innerHTML = `
        <td>${turno.servicio}</td>
        <td>${turno.direccion}</td>
        <td>${turno.fecha}</td>
        <td>${turno.medioPago}</td>
        <td>
            <button class="btn-eliminar" data-index="${index}">
                <i class="bi bi-trash"></i>
            </button>
        </td>
        `;

        // Agrega la fila al cuerpo de la tabla
        tableBody.appendChild(row);
    });

    // Agrega event listeners a los botones "Eliminar"
    document.querySelectorAll('.btn-eliminar').forEach((boton) => {
        boton.addEventListener('click', eliminarTurno);
    });
}

// Función para eliminar un turno
function eliminarTurno(event) {
    const index = event.target.closest('button').getAttribute('data-index'); // Obtén el índice del turno
    turnos.splice(index, 1); // Elimina el turno del array
    localStorage.setItem('turnos', JSON.stringify(turnos)); // Actualiza el Local Storage
    actualizarTabla(); // Actualiza la tabla
}

// Inicializa la tabla al cargar la página
actualizarTabla();
