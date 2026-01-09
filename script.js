const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 500);
    }
}

// Lógica de colisão
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Ajustamos os números para a escala do telemóvel
    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop <= 40) {
        alert("Ups! O Dino bateu no cacto.");
        // Reinicia a posição do cacto para poder jogar de novo
        location.reload(); 
    }
}, 10);

// Comandos para pular: Teclado OU Toque no ecrã
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", function(e) {
    jump();
    e.preventDefault(); // Evita que o telemóvel tente fazer zoom ao tocar rápido
}, {passive: false});
