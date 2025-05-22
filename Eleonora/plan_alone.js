// Функция за изчисляване на дните почивка
function holidayTime() {
    let days = 0;
    const startDate = new Date(document.querySelector('#start-date-input').value);
    const endDate = new Date(document.querySelector('#end-date-input').value);

    if(isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert('Въведете валидни начална и крайна дата.');
        return 0;
    }
    
    if (startDate > endDate) {
        alert("Началната дата трябва да е преди крайната.");
        return 0;
    }  
    
    days = (endDate - startDate) / (1000 * 60 * 60 * 24);
    
    if(days > 10 || days < 1) {
        alert('Почивката трябва да е най-малко 1 ден и най-много 10 дена.');
        days = 0;
        return 0;
    }

    return days;
}

// Функция за определяне на региона и извеждане на името на екскурзията

let regionName = '';
function region() {
    
    const days = holidayTime();
    const selectedRegion = document.getElementById('region').value;

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
            alert('Изберете регион.');
            break;
    }

    if(days > 0 && regionName !== '') {
        document.getElementById('excursion-name').innerText = `${days}-дневна екскурзия в ${regionName}`;
        showingDays(days);
        towns();
    }

}
// Функция за показване на елемнтите - дни

function showingDays(days) {
    let i = 1;

    for(i = 1; i <= days; i++) {
        document.getElementById(`day${i}`).style.display = "block";
    }
}

// Функция за определяне на градовете спрямо региона

function towns() {
    console.log(regionName)
    let townList = [];
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
    displayTowns(townList);
}

//Функция за показване на градовете като опции

function displayTowns(townList) {
    let i;
    
    for(i = 0; i < townList.length; i++) {
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
                    sights[1] = 'Белоградчишката крепост (Калето)';
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

document.addEventListener("DOMContentLoaded", function() {
    for(dayNum = 1; dayNum <= 10; dayNum++) {
        valueSelector(dayNum);
    }
});

// Функция за деактивиране на селектора, когато няма избран град
function valueSelector(dayNum) {
    const sightsSelect = document.getElementById(`day${dayNum}-sights`);
    const townSelectorValue = document.getElementById(`day${dayNum}-town`).value;
    if(townSelectorValue === "no-value") {
        sightsSelect.disabled = true; 
    }
        
    else {
        sightsSelect.disabled = false;
    }
        

}

let count = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// Функция за добавяне на градове
function addSight(dayNum) {
    let i;
    const townSelectorValue = document.getElementById(`day${dayNum}-town`).value;
    if(townSelectorValue !== "no-value") {

    if(count[dayNum-1] < 3) {
        count[dayNum-1]++;
        const container = document.getElementById(`day${dayNum}`);

        const newSightSelector = document.createElement("select");
        newSightSelector.id = `day${dayNum}-sights${count[dayNum-1]}`;

        const labelSight = document.createElement("label");
        labelSight.textContent = "Забележителност: ";
        labelSight.id = `day${dayNum}-label${count[dayNum-1]}`;

        const newLine = document.createElement("br");
        newLine.id = `day${dayNum}-br${count[dayNum-1]}`;
        const addButton = document.getElementById(`add-button${dayNum}`);
        const removeButton = document.getElementById(`remove-button${dayNum}`);

        const sightOptionNoValue = document.createElement("option");
        sightOptionNoValue.value = `option-no-value`;
        sightOptionNoValue.setAttribute("disabled", "");
        sightOptionNoValue.setAttribute("selected", "");
        sightOptionNoValue.setAttribute("hidden", "");
        const TextOptionNoValue = document.createTextNode(`Изберете забележителност`);
        sightOptionNoValue.appendChild(TextOptionNoValue);
        newSightSelector.appendChild(sightOptionNoValue);

        for(i = 0;i < 3;i++) {
            const sightOption = document.createElement("option");

            sightOption.value = `sight${i+1}`;
            
            const TextOption = document.createTextNode(`${sights[i]}`);
            sightOption.appendChild(TextOption);

            newSightSelector.appendChild(sightOption);
        }
        container.appendChild(newLine);
        container.appendChild(labelSight);
        container.appendChild(newSightSelector);
        container.appendChild(addButton);
        container.appendChild(removeButton);
    }
    else alert('Можете да си добавите най-много 2 забележителности на ден');
    
}
}

// Функция за премахване на градове
function removeSight(dayNum) {
    let i;
    const townSelectorValue = document.getElementById(`day${dayNum}-town`).value;
    if(townSelectorValue !== "no-value") {

    if(count[dayNum-1] > 1 ) {
        const container = document.getElementById(`day${dayNum}`);

        const newSightSelector = document.getElementById(`day${dayNum}-sights${count[dayNum-1]}`);

        const labelSight = document.getElementById(`day${dayNum}-label${count[dayNum-1]}`);

        const newLine = document.getElementById(`day${dayNum}-br${count[dayNum-1]}`);

        const addButton = document.getElementById(`add-button${dayNum}`);
        const removeButton = document.getElementById(`remove-button${dayNum}`);
        
        container.removeChild(newLine);
        container.removeChild(labelSight);
        container.removeChild(newSightSelector);
        container.appendChild(addButton);
        container.appendChild(removeButton);
        count[dayNum - 1]--;
    }
    else alert('Трябва да имате поне една забележителност на ден');

    }
}