const container = document.getElementById('container');
const scroll = document.getElementById('scroll');

let isMouseDown = false;
let startX, scrollLeft;

// Detectar cuando el mouse está presionado
container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = scroll.scrollLeft;
    container.style.cursor = 'grabbing'; // Cambiar el cursor
});

// Detectar cuando el mouse se mueve
container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // Solo se mueve cuando el mouse está presionado
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Ajustar la velocidad del desplazamiento
    scroll.style.transform = `translateX(${scrollLeft - walk}px)`;
});

// Detectar cuando el mouse se suelta
container.addEventListener('mouseup', () => {
    isMouseDown = false;
    container.style.cursor = 'grab'; // Restaurar el cursor
});

// Detectar cuando el mouse sale del área del contenedor
container.addEventListener('mouseleave', () => {
    isMouseDown = false;
    container.style.cursor = 'grab'; // Restaurar el cursor
});
