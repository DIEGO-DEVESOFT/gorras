document.addEventListener('DOMContentLoaded', () => {
    // Función de animación para las tarjetas
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    });

    document.querySelectorAll('[data-aos="fade-up"]').forEach(el => {
        observer.observe(el);
    });

});


//icono para subir la pagina rapido 

// Función para volver al principio de la página
document.getElementById('scrollToTop').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace siga el enlace
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Script para el navbar principal
const texts = [
    '"Gorra California"',
    '"Envíos a todo el País"',
    '"Bogotá Entrega Inmediata"',
    '"Clientes Satisfechos"',
    '"Producto de Calidad"',
    '"Atención al Cliente 24/7"'
];

let currentIndex = 0;
const textElement = document.getElementById('changingText');

function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
}

setInterval(changeText, 2000); // Cambia cada 2 segundos


let isZoomed = false;
let startX, startY, offsetX = 0, offsetY = 0;

// Abre el modal y adapta la imagen para la pantalla
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("expandedImg");
    modal.style.display = "block";
    modalImg.src = img.src;

    // Activa el zoom para dispositivos táctiles
    modalImg.addEventListener("click", toggleZoom);
    modalImg.addEventListener("touchstart", startDrag);
    modalImg.addEventListener("touchmove", drag);
}

// Cierra el modal y restablece el estado de zoom
function closeModal() {
    var modalImg = document.getElementById("expandedImg");
    document.getElementById("imageModal").style.display = "none";
    modalImg.removeEventListener("click", toggleZoom);
    modalImg.style.transform = "scale(1)";
    isZoomed = false;
    offsetX = 0;
    offsetY = 0;
}

// Alterna entre el zoom y la vista normal al tocar
function toggleZoom() {
    var modalImg = document.getElementById("expandedImg");
    if (isZoomed) {
        modalImg.style.transform = "scale(1)";
        isZoomed = false;
    } else {
        modalImg.style.transform = "scale(1.5)"; // Ajusta la escala de zoom según el tamaño de la pantalla
        isZoomed = true;
    }
}

// Inicia el arrastre en dispositivos móviles
function startDrag(e) {
    e.preventDefault();
    startX = e.touches[0].pageX - offsetX;
    startY = e.touches[0].pageY - offsetY;
}

// Realiza el arrastre de la imagen ampliada
function drag(e) {
    if (isZoomed) {
        e.preventDefault();
        offsetX = e.touches[0].pageX - startX;
        offsetY = e.touches[0].pageY - startY;
        var modalImg = document.getElementById("expandedImg");
        modalImg.style.transform = `scale(1.5) translate(${offsetX / 4}px, ${offsetY / 4}px)`; // Ajusta el desplazamiento al tamaño del contenedor
    }
}
