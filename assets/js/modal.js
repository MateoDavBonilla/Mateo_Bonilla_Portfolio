

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
window.onclick = function (event) {
    // Verifica si el clic fue fuera del modal
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id); // Cierra el modal si el clic es fuera del contenido
        }
    });
};

//boton form
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// Función para habilitar el botón de envío si todos los campos están llenos
function validateForm() {
    const formElements = form.elements;
    let isValid = true;

    // Recorre todos los campos del formulario
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type !== "submit" && element.value.trim() === "") {
            isValid = false;
            break;
        }
    }

    // Habilita o deshabilita el botón según la validez del formulario
    submitBtn.disabled = !isValid;
}

// Agregar un evento de input a los campos para validar en tiempo real
form.addEventListener('input', validateForm);

