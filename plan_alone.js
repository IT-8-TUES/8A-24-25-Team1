
function holidayTime() {
    let startDate = new Date(document.querySelector('#start-date').value);
    let endDate = new Date(document.querySelector('#end-date').value);
    console.log(startDate);
    console.log(endDate);

    difference = endDate - startDate;
    console.log(difference);

}



document.getElementById('region').addEventListener('change', region);
function region() {
    let selectedRegion = '';

    switch(selectedRegion) {
        case 'Northwest':
            break;
        case 'Northeast':
            break;
        case 'Southwest':
            break;
        case 'Southwest':
            break;
    }
};