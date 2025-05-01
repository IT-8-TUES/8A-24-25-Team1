let difference = 0;

function holidayTime() {
    let startDate = new Date(document.querySelector('#start-date').value);
    let endDate = new Date(document.querySelector('#end-date').value);

    
    difference = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if(difference > 10 || difference < 1) {
        alert('Почивката тябва да е най-малко 1 ден и най-много 10 дена');
        difference = 0;
    }
    return difference;
}

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

    console.log(regionName);
    if(difference > 0 && regionName !== null) {
        document.getElementById('excursion-name').innerText = `${difference}-дневна екскурзия в ${regionName}`;
    }
}