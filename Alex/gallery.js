const galleryImage = document.getElementById("galleryImage");
let currentIndex = 0;

const imageSets = {
    "excursion": [
        "Images/Image1.jpg",
        "Images/Image2.jpg",
        "Images/Image3.jpg",
        "Images/Image4.jpg"
    ],
    "excursion1": [
        "Images/haskovo.jpg",
        "Images/varna.jpg",
        "Images/Melnik.jpg"
    ],
    "excursion2": [
        "Images/Excursion2-1.jpg",
        "Images/Excursion2-2.jpg",
        "Images/Excursion2-3.jpg"
    ],
    "excursion3": [
        "Images/Excursion3-1.jpg",
        "Images/Excursion3-2.jpg",
        "Images/Excursion3-3.jpg"
    ],
    "excursion4": [
        "Images/haskovo.jpg",
        "Images/varna.jpg",
        "Images/Melnik.jpg"
    ],
    "excursion5": [
        "Images/Excursion5-1.jpg",
        "Images/Excursion5-2.jpg",
        "Images/Excursion5-3.jpg"
    ],
    "excursion6": [
        "Images/Excursion6-1.jpg",
        "Images/Excursion6-2.jpg",
        "Images/Excursion6-3.jpg"
    ],
    "Southeast": [
        "Images/Vitosha.jpg",
        "Images/Vitosha2.jpg",
        "Images/Chernivruh.jpg",
        "Images/Chernivruh2.jpg",
        "Images/zlatnimostove.jpg",
        "Images/zlatnimostove2.jpg",
        "Images/Boyanawaterfall.jpg",
        "Images/boyanachurch.jpg",
        "Images/Bulgarian_National_Museum_of_History.jpg",
        "Images/Bulgarian_National_Museum_of_History2.jpg",
        "Images/Bulgarian_National_Museum_of_History3.jpg",
        "Images/pernikmines.jpg",
        "Images/pernikmines2.jpg",
        "Images/pernikkrepost.jpg", 
        "Images/radomirmuseum.jpg",
        "Images/radomirmuseum2.jpg",
        "Images/svdimitarradomir.jpg",
        "Images/goloburdo.jpg",
        "Images/svvrach.jpg",
        "Images/svvrach2.jpg",
        "Images/bazilikjoan.jpg",
        "Images/rupite.jpg",
        "Images/rupite2.jpg",
        "Images/vangahome.jpg",
        "Images/svpetrarka.jpg",
        "Images/sintika.jpg",
        "Images/kleptuza.jpg",
        "Images/museumvelingrad.jpg",
        "Images/museumvelingrad2.jpg"
    ]
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

