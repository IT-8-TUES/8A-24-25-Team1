let difference = 0;
// Функция за изчисляване на дните почивка
function holidayTime() {
    let startDate = new Date(document.querySelector('#start-date-input').value);
    let endDate = new Date(document.querySelector('#end-date-input').value);

    
    difference = (endDate - startDate) / (1000 * 60 * 60 * 24);

    if(difference > 10 || difference < 1) {
        alert('Почивката трябва да е най-малко 1 ден и най-много 10 дена');
        difference = 0;
    }

    return difference;
}
// Функция за определяне на региона и извеждане на името на екскурзията
let regionName = '';
function region() {
    
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
    
    for(i = 0; i < 5; i++) {
        document.querySelectorAll(`.town-option${i+1}`).forEach(
            function(item) {
                item.innerText = townList[i];
            })
    }
}


let sights = [];

//Функция за избиране на забележителности

function defineSights(selectorTownValue) {
    if(regionName === 'Северозападна България') {
            switch(selectorTownValue) {
                case 'town1':
                    sights[0] = 'Крепостта Баба Вида';
                    sights[1] = 'Катедрален храм "Св. Димитър"';
                    sights[2] = 'Дунавският парк';
                    break;
                case 'town2': 
                    sights[0] = 'Белоградчишките скали';
                    sights[1] = 'Белоградчишката крепост (Калето';
                    sights[2] = 'Пещера Магура';
                    break;
                case 'town3': 
                    sights[0] = 'Часовникова кула';
                    sights[1] = 'Връх Ком';
                    sights[2] = 'Клисурски манастир';
                    break;
                case 'town4': 
                    sights[0] = 'Чипровският манастир "Св. Иван Рилски"';
                    sights[1] = 'Исторически музей – Чипровци';
                    sights[2] = 'Чипровски водопад';
                    break;
                case 'town5': 
                    sights[0] = 'Национален музей-параход "Радецки"';
                    sights[1] = 'Исторически музей Козлодуй';
                    sights[2] = 'Паметник на Христо Ботев и четата му';
                    break;
            }
        }
    else if(regionName === 'Североизточна България') {
        switch(selectorTownValue) {
            case 'town1':
                sights[0] = 'Шуменска крепост';
                sights[1] = 'Паметник "Създатели на българската държава"';
                sights[2] = 'Мадарски конник';
                break;
            case 'town2': 
                sights[0] = 'Морската градина';
                sights[1] = 'Археологически музей Варна';
                sights[2] = 'Аладжа манастир';
                break;
            case 'town3': 
                sights[0] = 'Крепост Царевец';
                sights[1] = 'Самоводска чаршия';
                sights[2] = 'Архитектурен резерват Арбанаси';
                break;
            case 'town4': 
                sights[0] = 'Биосферен резерват "Сребърна"';
                sights[1] = 'Крепост Дуросторум–Дръстър';
                sights[2] = 'Римската гробница';
                break;
            case 'town5': 
                sights[0] = 'Етнографски комплекс "Стария Добрич"';
                sights[1] = 'Градски парк "Св. Георги"';
                sights[2] = 'Музей "Йовковият Добрич"' ;
                break;
        }
    }
    else if(regionName === 'Югозападна България') {
        switch(selectorTownValue) {
            case 'town1':
                sights[0] = 'Мелнишките пирамиди';
                sights[1] = 'Кордопуловата къща';
                sights[2] = 'Роженски манастир';
                break;
            case 'town2': 
                sights[0] = 'Възрожденски къщи';
                sights[1] = 'Църквата "Света Троица"';
                sights[2] = 'Пирин';
                break;
            case 'town3': 
                sights[0] = 'Археологически музей с римски мозайки';
                sights[1] = 'Римски терми';
                sights[2] = 'Скакавишкия водопад';
                break;
            case 'town4': 
                sights[0] = 'Крепост Хисарлъка';
                sights[1] = ' Крепост Дуросторум–Дръстър';
                sights[2] = 'Римската гробница';
                break;
            case 'town5': 
                sights[0] = 'Храм-паметник "Свети Александър Невски"';
                sights[1] = 'Боянска църква';
                sights[2] = 'Витоша планина – Черни връх' ;
                break;
        }
    }
    else if(regionName === 'Югоизточна България') {
        switch(selectorTownValue) {
            case 'town1':
                sights[0] = 'Морска градина';
                sights[1] = 'Остров Света Анастасия';
                sights[2] = 'Природозащитен център "Пода"';
                break;
            case 'town2': 
                sights[0] = 'Мемориален комплекс "Бранителите на Стара Загора"';
                sights[1] = 'Античният форум "Августа Траяна"';
                sights[2] = 'Парк "Аязмото"';
                break;
            case 'town3': 
                sights[0] = 'Монумент "Света Богородица с Младенеца"';
                sights[1] = 'Лесопарк "Кенана"';
                sights[2] = 'Перперикон';
                break;
            case 'town4': 
                sights[0] = 'Крепост Туида';
                sights[1] = 'Природен парк "Сините камъни"';
                sights[2] = 'Пантеон на героите и Хаджи Димитър';
                break;
            case 'town5': 
                sights[0] = 'Старият Несебър';
                sights[1] = 'Вятърната мелница';
                sights[2] = 'Църквата "Свети Стефан"' ;
                break;
        }
    }
}

let dayNum = 0;
// Функция за показване на забележителностите
function displaySights(dayNum) {
    let selectorTownValue = document.querySelector(`#day${dayNum}-town`).value;
    defineSights(selectorTownValue);

    for(let i = 1; i <= 3; i++) {
        document.querySelector(`#day${dayNum}-sight${i}`).innerText = `${sights[i-1]}`; 
    }
    
}
