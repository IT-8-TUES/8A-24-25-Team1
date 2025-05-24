const galleryImage = document.getElementById("galleryImage");
const imageLocation = document.getElementById("imageLocation");
let currentIndex = 0;

const imageSets = {
    "excursion": [
        { src: "Images/Image1.jpg", location: "Място 1" },
        { src: "Images/Image2.jpg", location: "Място 2" },
        { src: "Images/Image3.jpg", location: "Място 3" },
        { src: "Images/Image4.jpg", location: "Място 4" }
    ],

    "excursion4": [
        { src: "Images/svvrach.jpg", location: "Св. Врач" },
        { src: "Images/rupite.jpg", location: "Рупите" },
        { src: "Images/vangahome.jpg", location: "Дом на Ванга" },
        { src: "Images/svpetrarka.jpg", location: "Св. Петка" },
        { src: "Images/sintika.jpg", location: "Синтика" },
        { src: "Images/kleptuza.jpg", location: "Клептуза" }
    ],

    "excursion5": [
        { src: "Images/rilskimanastir.jpg", location: "Рилски манастир" },
        { src: "Images/rilskiezera.jpg", location: "Рилски езера" },
        { src: "Images/malovica.jpg", location: "Мальовица" },
        { src: "Images/vihren.jpg", location: "Вихрен" },
        { src: "Images/popovoezero.jpg", location: "Попово езеро" },
        { src: "Images/baikushevamura.jpg", location: "Байкушева мура" }
    ],

    "Southwest": [
        { src: "Images/Vitosha.jpg", location: "Витоша" },
        { src: "Images/Chernivruh.jpg", location: "Черни връх" },
        { src: "Images/zlatnimostove.jpg", location: "Златни мостове" },
        { src: "Images/Boyanawaterfall.jpg", location: "Боянски водопад" },
        { src: "Images/boyanachurch.jpg", location: "Боянска църква" },
        { src: "Images/Bulgarian_National_Museum_of_History.jpg", location: "Национален музей на България" },
        { src: "Images/pernikmines.jpg", location: "Перник - Мини" },
        { src: "Images/pernikkrepost.jpg", location: "Пернишка крепост" },
        { src: "Images/radomirmuseum.jpg", location: "Исторически музей - Радомир" },
        { src: "Images/svdimitarradomir.jpg", location: "Св. Димитър - Радомир" },
        { src: "Images/goloburdo.jpg", location: "Голобърдо" },
        { src: "Images/svvrach.jpg", location: "Св. Врач" },
        { src: "Images/bazilikjoan.jpg", location: "Базилика на Йоан" },
        { src: "Images/rupite.jpg", location: "Рупите" },
        { src: "Images/vangahome.jpg", location: "Дом на Ванга" },
        { src: "Images/svpetrarka.jpg", location: "Св. Петка" },
        { src: "Images/sintika.jpg", location: "Синтика" },
        { src: "Images/kleptuza.jpg", location: "Клептуза" },
        { src: "Images/museumvelingrad.jpg", location: "Музей - Велинград" }
    ],

        "Northwest": [
        { src: "../Eleonora/Images/Северозападна България/Видин/баба-вида.jpg", location: "Баба Вида - Видин" },
        { src: "../Eleonora/Images/Северозападна България/Видин/Калето.jpg", location: "Калето - Видин" },
        { src: "../Eleonora/Images/Северозападна България/Видин/Видинската синагога.jpeg", location: "Видинска синагога" },
        { src: "../Eleonora/Images/Северозападна България/Видин/Свет-Димитър-Катедрален-храм.jpg", location: "Св. Димитър - Видин" },
        { src: "../Eleonora/Images/Северозападна България/Видин/Дунавски-парк.png", location: "Дунавски парк - Видин" },
        { src: "../Eleonora/Images/Северозападна България/Белоградчик/Белоградчишките-скали.jpg", location: "Белоградчишките скали" },
        { src: "../Eleonora/Images/Северозападна България/Белоградчик/Магурата.jpg", location: "Пещера Магурата" },
        { src: "../Eleonora/Images/Северозападна България/Белоградчик/Белоградчишката-крепост.jpg", location: "Белоградчишка крепост" },
        { src: "../Eleonora/Images/Северозападна България/Берковица/Къща-музей на Иван Вазов – Берковица.jpg", location: "Къща музей Иван Вазов - Берковица" },
        { src: "../Eleonora/Images/Северозападна България/Берковица/Часовниковата кула на Берковица.jpg", location: "Часовникова кула - Берковица" },
        { src: "../Eleonora/Images/Северозападна България/Берковица/Клисурски-манастир.jpg", location: "Клисурски манастир" },
        { src: "../Eleonora/Images/Северозападна България/Берковица/Връх Ком.jpeg", location: "Връх Ком" },
        { src: "../Eleonora/Images/Северозападна България/Чипровци/Чипровският манастир „Св. Иван Рилски“.jpg", location: "Чипровски манастир" },
        { src: "../Eleonora/Images/Северозападна България/Чипровци/Исторически музей – Чипровци.jpg", location: "Исторически музей - Чипровци" },
        { src: "../Eleonora/Images/Северозападна България/Чипровци/Природен парк „Стара планина“.jpg", location: "Природен парк Стара планина" },
        { src: "../Eleonora/Images/Северозападна България/Чипровци/Чипровски водопад.jpg", location: "Чипровски водопад" }
    ],

    "Northeast": [
        { src: "../Eleonora/Images/Североизточна България/Шумен/Създатели на българската държава.jpg", location: "Шумен - Създатели на България" },
        { src: "../Eleonora/Images/Североизточна България/Шумен/Шуменска крепост.jpeg", location: "Шуменска крепост" },
        { src: "../Eleonora/Images/Североизточна България/Шумен/Томбул-джамия.jpeg", location: "Томбул джамия" },
        { src: "../Eleonora/Images/Североизточна България/Варна/Римски терми.jpg", location: "Римски терми - Варна" },
        { src: "../Eleonora/Images/Североизточна България/Варна/Археологически музей – Варна.jpg", location: "Археологически музей - Варна" },
        { src: "../Eleonora/Images/Североизточна България/Варна/Аладжа манастир.jpg", location: "Аладжа манастир" },
        { src: "../Eleonora/Images/Североизточна България/Варна/Морска градина.jpg", location: "Морска градина - Варна" }
    ],
    
    "Southeast": [
        { src: "../Teodor/img/morskataGradina.jpg", location: "Морска градина - Бургас" },
        { src: "../Teodor/img/OSwetaAnastasa.jpg", location: "Остров Св. Анастасия" },
        { src: "../Teodor/img/LetenTeatyrBurgas.jpg", location: "Летен театър - Бургас" },
        { src: "../Teodor/img/BorgaskiSolnici.jpg", location: "Бургаски солници" },
        { src: "../Teodor/img/PodaPriroda.webp", location: "Природозащитен център Пода" },
        { src: "../Teodor/img/AntihenForumStaraZagora.jpg", location: "Античен форум - Стара Загора" },
        { src: "../Teodor/img/StaraZagoraIztoriheskiMozei.jpg", location: "Исторически музей - Стара Загора" },
        { src: "../Teodor/img/StaraZagoraZoopark.jpg", location: "Зоопарк - Стара Загора" },
        { src: "../Teodor/img/MonomentHaskovo.jpg", location: "Монумент - Хасково" },
        { src: "../Teodor/img/Kenana.jpg", location: "Кенана - Хасково" },
        { src: "../Teodor/img/IstoriheskiMuzeiHaskovo.jpg", location: "Исторически музей - Хасково" },
        { src: "../Teodor/img/SiniteKamani.jpg", location: "Сините Камъни" },
        { src: "../Teodor/img/StarNesebar.jpg", location: "Стар Несебър" },
        { src: "../Teodor/img/SwetiStefanNesebar.jpg", location: "Св. Стефан - Несебър" }
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
    galleryImage.src = images[currentIndex].src;
    imageLocation.textContent = `${images[currentIndex].location}`; 
    galleryImage.style.opacity = "1";
}
