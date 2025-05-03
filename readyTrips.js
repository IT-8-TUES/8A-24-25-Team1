function regionSelect() {
    var region = document.getElementById("region").value;
    var output = document.getElementById("textContent");
    var tripList = document.getElementById("tripList");

    let trips = [];

    switch (region) {
        case 'Northwest':
            output.textContent = 'Северозападна България';
            trips = [
                'Белоградчишки скали',
                'Магурата',
                'Пещера Венеца'
            ];
            break;
        case 'Northeast':
            output.textContent = 'Североизточна България';
            trips = [
                'Камчия',
                'Плиска и Велики Преслав',
                'Мадарският конник'
            ];
            break;
        case 'Southwest':
            output.textContent = 'Югозападна България';
            trips = [
                'Рилски манастир',
                'Банско',
                'Седемте рилски езера'
            ];
            break;
        case 'Southeast':
            output.textContent = 'Югоизточна България';
            trips = [
                'Несебър',
                'Созопол',
                'Странджа и Резерват Силкосия'
            ];
            break;
        default:
            output.textContent = '';
            tripList.innerHTML = '';
            return;
    }

    let listHTML = '<ul>';
    for (let trip of trips) {
        listHTML += `<li>${trip}</li>`;
    }
    listHTML += '</ul>';
    tripList.innerHTML = listHTML;
}
