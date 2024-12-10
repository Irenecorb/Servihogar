document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reclamosForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Captura los valores de los campos del formulario
        const servicio = document.getElementById("servicio").value;
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const problema = document.getElementById("problema").value;

        // Aquí puedes hacer lo que necesites con los datos, como enviarlos a un servidor
        console.log("Servicio:", servicio);
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Problema:", problema);

        alert("Reclamo enviado con éxito. ¡Gracias por contactarnos!");
        
        // Reiniciar el formulario
        form.reset();
    });
});