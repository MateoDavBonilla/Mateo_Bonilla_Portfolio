document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".footprint-container"); // Selecciona todos los contenedores

    containers.forEach(container => {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const numFootprints = 10; // Número de huellas por contenedor

        for (let i = 0; i < numFootprints; i++) {
            let footprint = document.createElement("div");
            footprint.classList.add("footprint");

            // Posición aleatoria dentro del contenedor
            let x = Math.random() * (containerWidth - 40);
            let y = Math.random() * (containerHeight - 50);

            // Rotación y tamaño aleatorio
            let rotation = Math.random() * 360;
            let scale = 0.6 + Math.random() * 0.5;

            // Aplicar estilos aleatorios
            footprint.style.left = `${x}px`;
            footprint.style.top = `${y}px`;
            footprint.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            footprint.style.animationDelay = `${Math.random() * 3}s`;

            container.appendChild(footprint);
        }
    });
});
