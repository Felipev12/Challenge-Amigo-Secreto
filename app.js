// Array para almacenar los amigos
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Ingrese nombre válido");
        return;
    }

    // Validar máximo de 10 amigos
    if (amigos.length >= 10) {
        alert("Solo se pueden añadir hasta 10 amigos");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);
    input.value = ""; // limpiar input
    input.focus(); // volver a enfocar para seguir escribiendo
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero debes añadir al menos un amigo.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${elegido}</strong></li>`;
}

// Permitir que la tecla Enter también agregue amigos
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("amigo");
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});
