// Abre el modal
function openModal(imagemodalId) {
    const modal = document.getElementById(imagemodalId); // Usamos el ID que se pasa como argumento
    const images = document.querySelectorAll('.modal-content'); // Selecciona todas las imágenes dentro del modal

    // Opcional: resaltar la imagen inicial (puedes ajustar estilos aquí)
    images.forEach((img) => {
        img.style.border = 'none'; // Elimina cualquier borde previo
    });

    modal.style.display = 'block'; // Muestra el modal
}

// Cierra el modal
function closeModal(imagemodalId) {
    const modal = document.getElementById(imagemodalId); // Usamos el ID del modal que se pasa como argumento
    modal.style.display = 'none'; // Cierra el modal
}

// Cierra el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    // Verifica si el clic fue fuera del modal
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id); // Cierra el modal si el clic es fuera del contenido
        }
    });
};
