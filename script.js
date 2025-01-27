// Cuenta regresiva
const eventoFecha = new Date("2025-02-10T00:00:00").getTime();
const contador = document.getElementById("contador");

function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = eventoFecha - ahora;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    contador.innerHTML = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        contador.innerHTML = "¡El evento ya comenzó!";
    }
}

const intervalo = setInterval(actualizarContador, 1000);

// Confirmación de asistencia
const formulario = document.getElementById("confirmarAsistencia");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    if (nombre) {
        // Guardar en localStorage (puede exportarse a Excel)
        let confirmaciones = JSON.parse(localStorage.getItem("confirmaciones")) || [];
        confirmaciones.push(nombre);
        localStorage.setItem("confirmaciones", JSON.stringify(confirmaciones));

        mensaje.innerHTML = `Gracias, ${nombre}, por confirmar tu asistencia.`;
        formulario.reset();
    }
});
