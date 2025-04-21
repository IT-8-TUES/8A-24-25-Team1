let difference;

function holidayTime() {
    let startDate = new Date(document.querySelector('#start-date').value);
    let endDate = new Date(document.querySelector('#end-date').value);

    difference = (endDate - startDate) / (1000 * 60 * 60 * 24);

    return difference;
}

document.getElementById('region').addEventListener('change', region);

function region() {
    let selectedRegion = '';
    let regionName = '';
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
        case 'Southwest':
            regionName = 'Югоизточна България';
            break;
    }

    console.log(regionName);

    document.getElementById('excursion-name').innerText = `${difference}-дневна екскурзия в ${regionName}`;
};