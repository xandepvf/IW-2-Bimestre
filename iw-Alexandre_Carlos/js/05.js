let currentIndex = 0;
let interval;

const images = document.querySelectorAll('.carousel-image');
const thumbnails = document.getElementById('thumbnails').getElementsByTagName('img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('visible', i === index);
    });
    currentIndex = index;
}

function startCarousel() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);
}

function stopCarousel() {
    clearInterval(interval);
}

Array.from(thumbnails).forEach((thumbnail, index) => {
    thumbnail.addEventListener('mouseenter', () => {
        stopCarousel();
        showImage(index);
    });

    thumbnail.addEventListener('mouseleave', () => {
        startCarousel();
    });
});

// Inicializar o carrossel
showImage(currentIndex);
startCarousel();
