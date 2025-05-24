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
        "Images/svvrach.jpg",
        "Images/rupite.jpg",
        "Images/vangahome.jpg",
        "Images/svpetrarka.jpg",
        "Images/sintika.jpg",
        "Images/kleptuza.jpg"
    ],
    "excursion5": [
        "Images/rilskimanastir.jpg",
        "Images/rilskiezera.jpg",
        "Images/malovica.jpg",
        "Images/vihren.jpg",
        "Images/popovoezero.jpg",
        "Images/baikushevamura.jpg"
    ],
    "excursion6": [
        "Images/Excursion6-1.jpg",
        "Images/Excursion6-2.jpg",
        "Images/Excursion6-3.jpg"
    ],  
    "Southwest": [
        "Images/Vitosha.jpg",
        "Images/Chernivruh.jpg",
        "Images/zlatnimostove.jpg",
        "Images/Boyanawaterfall.jpg",
        "Images/boyanachurch.jpg",
        "Images/Bulgarian_National_Museum_of_History.jpg",
        "Images/pernikmines.jpg",
        "Images/pernikkrepost.jpg", 
        "Images/radomirmuseum.jpg",
        "Images/svdimitarradomir.jpg",
        "Images/goloburdo.jpg",
        "Images/svvrach.jpg",
        "Images/bazilikjoan.jpg",
        "Images/rupite.jpg",
        "Images/vangahome.jpg",
        "Images/svpetrarka.jpg",
        "Images/sintika.jpg",
        "Images/kleptuza.jpg",
        "Images/museumvelingrad.jpg",
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
    galleryImage.src = images[currentIndex];
    galleryImage.style.opacity = "1";
}

