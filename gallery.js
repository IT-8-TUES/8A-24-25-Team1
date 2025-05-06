const images = ["Images/Image1.jpg", "Images/Image2.jpg", "Images/Image3.jpg", "Images/Image4.jpg"];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");

document.addEventListener("DOMContentLoaded", () => {
    galleryImage.src = images[currentIndex];
});

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;


    galleryImage.style.opacity = "0";
    setTimeout(() => {
        galleryImage.src = images[currentIndex];
        galleryImage.style.opacity = "1";
    }, 300);
}
