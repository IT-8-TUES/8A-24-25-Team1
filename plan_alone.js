let difference = 0;
// Функция за изчисляване на дните почивка
function holidayTime() {
    let startDate = new Date(document.querySelector('#start-date-input').value);
    let endDate = new Date(document.querySelector('#end-date-input').value);

    
    difference = (endDate - startDate) / (1000 * 60 * 60 * 24);

    if(difference > 10 || difference < 1) {
        alert('Почивката тябва да е най-малко 1 ден и най-много 10 дена');
        difference = 0;
    }

    return difference;
}
// Функция за определяне на региона и извеждане на името на екскурзията
function region() {
    let regionName = '';
    let selectedRegion = document.getElementById('region').value;

    switch(selectedRegion) {
        case 'Northwest':
            regionName = 'Северозападна България';
            break;
        case 'Northeast':
            regionName = 'Североизточна България';
            break;
        case 'Southwest':
            regionName = 'Югозападна България';
            break;
        case 'Southeast':
            regionName = 'Югоизточна България';
            break;
        case '':
            regionName = null;
            alert('Изберете регион');
            break;
    }

    if(difference > 0 && regionName !== null) {
        document.getElementById('excursion-name').innerText = `${difference}-дневна екскурзия в ${regionName}`;
        showingDays();
        towns(regionName);
        displayTowns();
     //   namingDays();
    }

}
// Функция за показване на елемнтите - дни

function showingDays() {
    let i = 1;

    for(i = 1; i <= difference; i++) {
        document.getElementById(`day${i}`).style.display = "block";
    }

    
}

let townList = [];

// Функция за определяне на градовете спрямо региона

function towns(regionName) {
    switch(regionName) {
        case 'Северозападна България':
            townList = ['Видин', 'Белоградчик', 'Берковица', 'Чипровци', 'Козлодуй'];
            break;
        case 'Североизточна България':
            townList = ['Шумен', 'Варна', 'Велико Търново', 'Силистра', 'Добрич'];
            break;
        case 'Югозападна България':
            townList = ['Мелник', 'Банско', 'Сандански', 'Кюстендил', 'София'];
            break;
        case 'Югоизточна България':
            townList = ['Бургас', 'Стара Загора', 'Хасково', 'Сливен', 'Несебър'];
            break;
    }
}

//Функция за показване на градовете като опции

function displayTowns() {
    let i;
    
    for(i = 0; i < 3; i++) {
        document.querySelectorAll(`.town-option${i+1}`).forEach(
            function(item) {
                item.innerText = townList[i];
                item.value = townList[i];
            })
    }
}


let sights = {
    sight1: '',
    sight2: '',
    sight3: '',
};

//Функция за избиране на забележителности

function defineSights() {
    let i;
    for(i = 0; i <= difference; i++) {
        selectorTownValue = document.querySelector(`.town-option${i+1}`).value;

        if(townList = ['Видин', 'Белоградчик', 'Берковица', 'Чипровци', 'Козлодуй']) {
            switch(selectorTownValue) {
                case 'town1':
                    sights.sight1 = 'Крепостта Баба Вида',
                    sights.sight2 = 'Катедрален храм "Св. Димитър"',
                    sights.sight3 = 'Дунавският парк';
                    break;
                case 'town2': 
                    sights.sight1 = 'Белоградчишките скали',
                    sights.sight2 = 'Белоградчишката крепост (Калето',
                    sights.sight3 = 'Пещера Магура';
                    break;
                case 'town3': 
                    sights.sight1 = 'Часовникова кула',
                    sights.sight2 = 'Връх Ком',
                    sights.sight3 = 'Клисурски манастир';
                    break;
                case 'town4': 
                    sights.sight1 = 'Чипровският манастир "Св. Иван Рилски"',
                    sights.sight2 = 'Исторически музей – Чипровци',
                    sights.sight3 = 'Чипровски водопад';
                    break;
                case 'town5': 
                    sights.sight1 = 'Национален музей-параход "Радецки"',
                    sights.sight2 = 'Исторически музей Козлодуй',
                    sights.sight3 = 'Паметник на Христо Ботев и четата му';
                    break;
            }
        }
        else if(townList = ['Шумен', 'Варна', 'Велико Търново', 'Силистра', 'Добрич']) {
            switch(selectorTownValue) {
                case 'town1':
                    sights.sight1 = 'Шуменска крепост',
                    sights.sight2 = 'Паметник "Създатели на българската държава"',
                    sights.sight3 = 'Мадарски конник';
                    break;
                case 'town2': 
                    sights.sight1 = 'Морската градина',
                    sights.sight2 = 'Археологически музей Варна',
                    sights.sight3 = 'Аладжа манастир';
                    break;
                case 'town3': 
                    sights.sight1 = 'Крепост Царевец',
                    sights.sight2 = 'Самоводска чаршия',
                    sights.sight3 = 'Архитектурен резерват Арбанаси';
                    break;
                case 'town4': 
                    sights.sight1 = 'Биосферен резерват "Сребърна"',
                    sights.sight2 = ' Крепост Дуросторум–Дръстър',
                    sights.sight3 = 'Римската гробница';
                    break;
                case 'town5': 
                    sights.sight1 = 'Етнографски комплекс "Стария Добрич"',
                    sights.sight2 = 'Градски парк "Св. Георги"',
                    sights.sight3 = 'Музей "Йовковият Добрич"' ;
                    break;
            }
        }
        else if(townList = ['Мелник', 'Банско', 'Сандански', 'Кюстендил', 'София']) {
            switch(selectorTownValue) {
                case 'town1':
                    sights.sight1 = 'Мелнишките пирамиди',
                    sights.sight2 = 'Кордопуловата къща',
                    sights.sight3 = 'Роженски манастир';
                    break;
                case 'town2': 
                    sights.sight1 = 'Възрожденски къщи',
                    sights.sight2 = 'Църквата "Света Троица"',
                    sights.sight3 = 'Пирин';
                    break;
                case 'town3': 
                    sights.sight1 = 'Археологически музей с римски мозайки',
                    sights.sight2 = 'Римски терми',
                    sights.sight3 = 'Скакавишкия водопад';
                    break;
                case 'town4': 
                    sights.sight1 = 'Крепост Хисарлъка',
                    sights.sight2 = ' Крепост Дуросторум–Дръстър',
                    sights.sight3 = 'Римската гробница';
                    break;
                case 'town5': 
                    sights.sight1 = 'Храм-паметник "Свети Александър Невски"',
                    sights.sight2 = 'Боянска църква',
                    sights.sight3 = 'Витоша планина – Черни връх' ;
                    break;
            }
        }
        else if(townList = ['Бургас', 'Стара Загора', 'Хасково', 'Сливен', 'Несебър']) {
            switch(selectorTownValue) {
                case 'town1':
                    sights.sight1 = 'Морска градина',
                    sights.sight2 = 'Остров Света Анастасия',
                    sights.sight3 = 'Природозащитен център "Пода"';
                    break;
                case 'town2': 
                    sights.sight1 = 'Мемориален комплекс "Бранителите на Стара Загора"',
                    sights.sight2 = 'Античният форум "Августа Траяна"',
                    sights.sight3 = 'Парк "Аязмото"';
                    break;
                case 'town3': 
                    sights.sight1 = 'Монумент "Света Богородица с Младенеца"',
                    sights.sight2 = 'Лесопарк "Кенана"',
                    sights.sight3 = 'Перперикон';
                    break;
                case 'town4': 
                    sights.sight1 = 'Крепост Туида',
                    sights.sight2 = 'Природен парк "Сините камъни"',
                    sights.sight3 = 'Пантеон на героите и Хаджи Димитър';
                    break;
                case 'town5': 
                    sights.sight1 = 'Старият Несебър',
                    sights.sight2 = 'Вятърната мелница',
                    sights.sight3 = 'Църквата "Свети Стефан"' ;
                    break;
            }
        }

    }

}
    
