function regionSelect() {
    var region = document.getElementById("region").value;
    var output = document.getElementById("textContent");
    var tripList = document.getElementById("tripList");

    var startDate = document.getElementById("start-date-input").value;
    var endDate = document.getElementById("end-date-input").value;

    function formatDate(dateString) {
        let date = new Date(dateString);
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        return `${day}.${month}.${year} г.`;
    }

    output.textContent = "";

    if (!region) {
        output.textContent = "Моля, въведете регион.";
        tripList.innerHTML = "";
        return;
    }

    if (!startDate) {
        output.textContent = "Моля, въведете начална дата.";
        tripList.innerHTML = "";
        return;
    }

    if (endDate && startDate > endDate) {
        output.textContent = "Грешка: Крайната дата трябва да бъде след началната!";
        tripList.innerHTML = "";
        return;
    }

    if (endDate && startDate === endDate) {
        output.textContent = "Грешка: Началната и крайната дата не могат да бъдат еднакви!";
        tripList.innerHTML = "";
        return;
    }

    let trips = {
        "Северозападна България": [
            { name: "Екскурзия 1", page: "excursion1.html", period: 3, dates: ["2025-05-12 - 2025-05-15", "2025-05-27 - 2025-05-30", "2025-06-05 - 2025-06-08"] }
        ],
        "Североизточна България": [
            { name: "Екскурзия 2", page: "excursion2.html", period: 4, dates: ["2025-05-14 - 2025-05-18", "2025-05-29 - 2025-06-02", "2025-06-07 - 2025-06-11"] },
            { name: "Екскурзия 3", page: "excursion3.html", period: 7, dates: ["2025-05-16 - 2025-05-23", "2025-05-30 - 2025-06-06", "2025-06-09 - 2025-06-16"] }
        ],
        "Югозападна България": [
            { name: "Сандански - Велинград", page: "excursion4.html", period: 5, dates: ["2025-05-17 - 2025-05-22", "2025-05-31 - 2025-06-05", "2025-06-10 - 2025-06-15"] },
            { name: "Рила - Пирин", page: "excursion5.html", period: 6, dates: ["2025-05-19 - 2025-05-25", "2025-06-02 - 2025-06-08", "2025-06-12 - 2025-06-18"] }
        ],
        "Югоизточна България": [
            { name: "Екскурзия 6", page: "excursion6.html", period: 3, dates: ["2025-05-20 - 2025-05-23", "2025-06-03 - 2025-06-06", "2025-06-14 - 2025-06-17"] }
        ]
    };

    let filteredTrips = trips[region]?.filter(trip =>
        trip.dates.some(dateRange => {
            let [tripStart, tripEnd] = dateRange.split(" - ");
            return (!endDate || (startDate <= tripEnd && endDate >= tripStart));
        })
    ) || [];

    if (filteredTrips.length > 0) {
        output.textContent = `Препоръчани екскурзии за ${region}:`;
    } else {
        output.textContent = "Няма екскурзии на тези дати. Ето всички екскурзии за този регион:";
    }

    tripList.innerHTML = (filteredTrips.length > 0 ? filteredTrips : trips[region]).map(trip => `
        <div>
            <strong>${trip.name} - ${trip.period} дни:</strong><br>
            ${trip.dates.map(date => {
                let [tripStart, tripEnd] = date.split(" - ");
                return `<div> от ${formatDate(tripStart)} до ${formatDate(tripEnd)}</div>`;
            }).join("")}
            <button onclick="window.location.href='${trip.page}'">Прочети повече</button>
        </div><br>`
    ).join("");
}
