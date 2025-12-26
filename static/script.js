// Clic en título para mensaje secreto
document.getElementById('titulo').addEventListener('click', function() {
    document.getElementById('mensaje-secreto').classList.toggle('oculto');
});

// Nieve cayendo
const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let snowflakes = [];
const numFlakes = 200;

function createSnowflake() {
    return {
        x: Math.random() * canvas.width,
        y: -10,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        wind: Math.random() * 1 - 0.5
    };
}

for (let i = 0; i < numFlakes; i++) {
    snowflakes.push(createSnowflake());
}

function drawSnow(flake) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fill();
}

function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        drawSnow(flake);
        flake.y += flake.speed;
        flake.x += flake.wind;
        if (flake.y > canvas.height) {
            flake.y = -10;
            flake.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateSnow);
}
animateSnow();



