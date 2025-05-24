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
            "../Eleonora/Images/Северозападна България\Видин\баба-вида.jpg",
            "../Eleonora/Images/Северозападна България\Видин\Калето.jpg",
            "../Eleonora/Images/Северозападна България\Видин\Видинската синагога.jpeg",
            "../Eleonora/Images/Северозападна България\Видин\Свет-Димитър-Катедрален-храм.jpg",
            "../Eleonora/Images/Северозападна България\Видин\Дунавски-парк.png",
            "../Eleonora/Images/Северозападна България\Белоградчик\Белоградчишките-скали.jpg",
            "../Eleonora/Images/Северозападна България\Белоградчик\Магурата.jpg",
            "../Eleonora/Images/Северозападна България\Белоградчик\Белоградчишката-крепост.jpg.jpg",
            "../Eleonora/Images/Северозападна България\Берковица\Къща-музей на Иван Вазов – Берковица.jpg",
            "../Eleonora/Images/Северозападна България\Берковица\Часовниковата кула на Берковица.jpg",
            "../Eleonora/Images/Северозападна България\Берковица\Клисурски-манастир.jpg",
            "../Eleonora/Images/Северозападна България\Берковица\Връх Ком.jpeg",
            "../Eleonora/Images/Северозападна България\Чипровци\Чипровският манастир „Св. Иван Рилски“.jpg",
            "../Eleonora/Images/Северозападна България\Чипровци\Исторически музей – Чипровци.jpg",
            "../Eleonora/Images/Северозападна България\Чипровци\Природен парк „Стара планина“.jpg",
            "../Eleonora/Images/Северозападна България\Чипровци\Чипровски водопад.jpg",
        ],
        "Northeast": [
            "../Eleonora/Images/Североизточна България/Шумен/Създатели на българската държава.jpg",
            "../Eleonora/Images/Североизточна България/Шумен/Шуменска крепост.jpeg",
            "../Eleonora/Images/Североизточна България/Шумен/Томбул-джамия.jpeg",
            "../Eleonora/Images/Североизточна България/Шумен/Шуменско платоjpg.jpg",
            "../Eleonora/Images/Североизточна България/Варна/Римски терми.jpg",
            "../Eleonora/Images/Североизточна България/Варна/Археологически музей – Варна.jpg",
            "../Eleonora/Images/Североизточна България/Варна/Аладжа манастир.jpg",
            "../Eleonora/Images/Североизточна България/Варна/Морска градина.jpg",
            "../Eleonora/Images/Североизточна България/Варна/Варна-море.jpeg",
            "../Eleonora/Images/Североизточна България/Велико Търново/Царевец.jpg",
            "../Eleonora/Images/Североизточна България/Велико Търново/Trapesitsa.jpg",
            "../Eleonora/Images/Североизточна България/Велико Търново/samodivska-charsiq.jpg",
            "../Eleonora/Images/Североизточна България/Велико Търново/museum.jpg",
            "../Eleonora/Images/Североизточна България/Велико Търново/arbanasi.jpg",
            "../Eleonora/Images/Североизточна България/Силистра/Римска гробница.jpg",
            "../Eleonora/Images/Североизточна България/Силистра/Fortress.jpg",
            "../Eleonora/Images/Североизточна България/Силистра/Сребърна.jpg",
            "../Eleonora/Images/Североизточна България/Силистра/Danube garden.jpeg",
            "../Eleonora/Images/Североизточна България/Добрич/old Dobrich.jpg",
            "../Eleonora/Images/Североизточна България/Добрич/museum.jpg",

        ],

    "Southeast": [
    "../Teodor/img/morskataGradina.jpg",
    "../Teodor/img/OSwetaAnastasa.jpg",
    "../Teodor/img/LetenTeatyrBurgas.jpg",
    "../Teodor/img/BorgaskiSolnici.jpg",
    "../Teodor/img/PodaPriroda.webp",
    "../Teodor/img/AntihenForumStaraZagora.jpg",
    "../Teodor/img/StaraZagoraIztoriheskiMozei.jpg",
    "../Teodor/img/StaraZagoraZoopark.jpg",
    "../Teodor/img/StaraZagoraZoopark.jpg",
    "../Teodor/img/MonomentHaskovo.jpg",
    "../Teodor/img/Kenana.jpg",
    "../Teodor/img/IstoriheskiMuzeiHaskovo.jpg",
    "../Teodor/img/klokonica.jpg",
    "../Teodor/img/bogorodica.jpg",
    "../Teodor/img/SiniteKamani.jpg",
    "../Teodor/img/DobriChintulov.jpg",
    "../Teodor/img/MuzeiSlivenTekstil.jpeg",
    "../Teodor/img/StarNesebar.jpg",
    "../Teodor/img/SwetiStefanNesebar.jpg",
    "../Teodor/img/DrevnaArhitectura.jpg"
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
