const images = [
    "https://picsum.photos/id/1015/1000/700",
    "https://picsum.photos/id/1016/1000/700",
    "https://picsum.photos/id/1025/1000/700",
    "https://picsum.photos/id/1035/1000/700",
    "https://picsum.photos/id/1043/1000/700",
    "https://picsum.photos/id/1069/1000/700"
];


let currentIndex = 0;


const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");



function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src = images[currentIndex];

    lightbox.style.display = "flex";
}



function closeLightbox() {

    lightbox.style.display = "none";
}



function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex];
}



function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex];
}

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

});
