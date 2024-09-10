// JavaScript for Lightbox functionality and Video Gallery Filters

function openLightbox() {
    document.getElementById('lightboxModal').style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
}

function closeLightbox() {
    document.getElementById('lightboxModal').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(e) {
    if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'Escape') {
        closeLightbox();
    }
}

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Show the first slide by default
showSlides(slideIndex);

// Filter Video Gallery
function filterGallery(category) {
    let items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
