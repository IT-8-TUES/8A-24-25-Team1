const galleryImage = document.getElementById("galleryImage");
let currentIndex = 0;

const imageSets = {
    "excursion": ["Images/Image1.jpg", "Images/Image2.jpg", "Images/Image3.jpg", "Images/Image4.jpg"],
    "excursion1": ["Images/haskovo.jpg", "Images/varna.jpg", "Images/Melnik.jpg"],
    "excursion2": ["Images/Excursion2-1.jpg", "Images/Excursion2-2.jpg", "Images/Excursion2-3.jpg"],
    "excursion3": ["Images/Excursion3-1.jpg", "Images/Excursion3-2.jpg", "Images/Excursion3-3.jpg"],
    "excursion4": ["Images/Excursion4-1.jpg", "Images/Excursion4-2.jpg", "Images/Excursion4-3.jpg"],
    "excursion5": ["Images/Excursion5-1.jpg", "Images/Excursion5-2.jpg", "Images/Excursion5-3.jpg"],
    "excursion6": ["Images/Excursion6-1.jpg", "Images/Excursion6-2.jpg", "Images/Excursion6-3.jpg"]
};

const pageName = window.location.pathname.split("/").pop().split(".")[0]; 

const images = imageSets[pageName];

document.addEventListener("DOMContentLoaded", () => {
    updateImage();
});

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;

    galleryImage.style.opacity = "0";
    setTimeout(updateImage, 300);
}

function updateImage() {
    galleryImage.src = images[currentIndex];
    galleryImage.style.opacity = "1";
}

