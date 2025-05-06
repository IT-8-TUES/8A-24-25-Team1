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
        selectorTowns();
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

let town1 = '', town2 = '', town3 = '', town4 = '', town5 = '';

// Функция за определяне на градовете спрямо региона

function towns(regionName) {
    switch(regionName) {
        case 'Северозападна България':
            town1 = 'Видин';
            town2 = 'Белоградчик';
            town3 = 'Берковица';
            town4 = 'Чипровци';
            town5 = 'Козлодуй';
            break;
        case 'Североизточна България':
            town1 = 'Шумен';
            town2 = 'Варна';
            town3 = 'Велико Търново';
            town4 = 'Силистра';
            town5 = 'Добрич';
            break;
        case 'Югозападна България':
            town1 = 'Мелник';
            town2 = 'Банско';
            town3 = 'Сандански';
            town4 = 'Кюстендил';
            town5 = 'София';
            break;
        case 'Югоизточна България':
            town1 = 'Бургас';
            town2 = 'Стара Загора';
            town3 = 'Хасково';
            town4 = 'Сливен';
            town5 = 'Несебър';
            break;
    }
}

function selectorTowns() {
    
}
/* Функция за именуване на дните

function namingDays() {
    document.getElementById('day1-name').innerText = `Ден 1 - ${town1}`;
    if(difference > 5) {
        document.getElementById('day2-name').innerText = `Ден 2 - ${town1}`;
        document.getElementById('day3-name').innerText = `Ден 3 - ${town2}`;
        if(difference > 6) {
            document.getElementById('day4-name').innerText = `Ден 4 - ${town2}`;
            document.getElementById('day5-name').innerText = `Ден 5 - ${town3}`;
            if(difference > 7) {
                document.getElementById('day6-name').innerText = `Ден 6 - ${town3}`;
                document.getElementById('day7-name').innerText = `Ден 7 - ${town4}`;
                if(difference > 8) {
                    document.getElementById('day8-name').innerText = `Ден 8 - ${town4}`;
                    document.getElementById('day9-name').innerText = `Ден 9 - ${town5}`;
                    if(difference > 9) {
                        document.getElementById('day10-name').innerText = `Ден 10 - ${town5}`;
                    }
                }
                else {
                    document.getElementById('day8-name').innerText = `Ден 8 - ${town5}`;
                }
            }
            else {
                document.getElementById('day6-name').innerText = `Ден 5 - ${town4}`;
                document.getElementById('day7-name').innerText = `Ден 6- ${town5}`;
            }
        }
        else {
            document.getElementById('day4-name').innerText = `Ден 4 - ${town3}`;
            document.getElementById('day5-name').innerText = `Ден 5 - ${town4}`;
            document.getElementById('day6-name').innerText = `Ден 6 - ${town5}`;
        }
        
    }
    else {
        document.getElementById('day2-name').innerText = `Ден 2 - ${town2}`;
        document.getElementById('day3-name').innerText = `Ден 3 - ${town3}`;
        document.getElementById('day4-name').innerText = `Ден 4 - ${town4}`;
        document.getElementById('day5-name').innerText = `Ден 5 - ${town5}`;
    }
        }
*/
   

    
    

