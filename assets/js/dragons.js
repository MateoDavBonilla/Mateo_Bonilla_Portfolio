document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("dragon-container");
    const numDragons = 6; // Número de cabezas de dragón generadas

    for (let i = 0; i < numDragons; i++) {
        let dragonHead = document.createElement("div");
        dragonHead.classList.add("dragon-head");

        // Posición aleatoria dentro del contenedor
        let x = Math.random() * (300 - 60); // Evita que la cabeza salga del área
        let y = Math.random() * (300 - 80);

        // Rotación y tamaño aleatorio
        let rotation = Math.random() * 360;
        let scale = 0.8 + Math.random() * 0.5;

        // Aplicar estilos aleatorios
        dragonHead.style.left = `${x}px`;
        dragonHead.style.top = `${y}px`;
        dragonHead.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        dragonHead.style.animationDelay = `${Math.random() * 3}s`; // Variación en la aparición

        container.appendChild(dragonHead);
    }
});
