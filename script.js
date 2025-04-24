const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 80; // Fixed height for the wave effect
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let time = 0;
const waves = [
    { amplitude: 15, frequency: 0.02, phase: 0, color: 'rgba(143,196,255,0.3)' },
    { amplitude: 10, frequency: 0.03, phase: Math.PI / 2, color: 'rgba(65,211,255,0.5)' }
];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(20, 20, 30, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + wave.amplitude * Math.sin(wave.frequency * x + time + wave.phase);
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
    });

    time += 0.05;
    requestAnimationFrame(animate);
}

animate();
