function regionSelect() {
    var region = document.getElementById("region").value;
    var output = document.getElementById("textContent");
    var tripList = document.getElementById("tripList");

    var startDateRaw = document.getElementById("start-date").value;
    var endDateRaw = document.getElementById("end-date").value;

    function formatInputDate(dateString) {
        if (!dateString) return null;
        let [year, month, day] = dateString.split("-");
        return `${day}.${month}.${year}`;
    }

    let startDate = formatInputDate(startDateRaw);
    let endDate = formatInputDate(endDateRaw);

    if (!startDate) {
        output.textContent = "⚠️ Моля, въведете начална дата.";
        tripList.innerHTML = "";
        return;
    }

    if (endDate && startDateRaw > endDateRaw) {
        output.textContent = "❌ Грешка: Крайната дата не може да бъде преди началната!";
        tripList.innerHTML = "";
        return;
    }

    if (startDateRaw === endDateRaw) {
        output.textContent = "⚠️ Грешка: Началната и крайната дата не могат да бъдат еднакви!";
        tripList.innerHTML = "";
        return;
    }

    let trips = {
        "Northwest": [
            { name: "Екскурзия 1", page: "excursion1.html", period: 4, dates: ["2025-05-03 - 2025-05-07", "2025-05-15 - 2025-05-19", "2025-06-10 - 2025-06-14"] }
        ],
        "Northeast": [
            { name: "Екскурзия 2", page: "excursion2.html", period: 3, dates: ["2025-05-08 - 2025-05-11", "2025-05-20 - 2025-05-23", "2025-06-15 - 2025-06-18"] },
            { name: "Екскурзия 3", page: "excursion3.html", period: 7, dates: ["2025-05-12 - 2025-05-19", "2025-05-25 - 2025-06-01", "2025-06-20 - 2025-06-27"] }
        ],
        "Southwest": [
            { name: "Екскурзия 4", page: "excursion4.html", period: 5, dates: ["2025-05-07 - 2025-05-12", "2025-05-19 - 2025-05-24", "2025-06-13 - 2025-06-18"] },
            { name: "Екскурзия 5", page: "excursion5.html", period: 6, dates: ["2025-05-14 - 2025-05-20", "2025-05-27 - 2025-06-02", "2025-06-19 - 2025-06-25"] }
        ],
        "Southeast": [
            { name: "Екскурзия 6", page: "excursion6.html", period: 3, dates: ["2025-05-10 - 2025-05-13", "2025-05-22 - 2025-05-25", "2025-06-16 - 2025-06-19"] }
        ]
    };

    if (!trips[region]) {
        output.textContent = "⚠️ Моля, изберете регион.";
        tripList.innerHTML = "";
        return;
    }

    let filteredTrips = trips[region].filter(trip => {
        return trip.dates.some(dateRange => {
            let [tripStart, tripEnd] = dateRange.split(" - ");
            return (startDateRaw <= tripStart && endDateRaw >= tripEnd) || startDateRaw === tripStart;
        });
    });

    let listHTML = "";
    if (filteredTrips.length > 0) {
        filteredTrips.forEach(trip => {
            listHTML += `
                <div>
                    <strong>${trip.name} - ${trip.period} дни:</strong><br>
                    ${trip.dates.map(date => {
                        let [tripStart, tripEnd] = date.split(" - ");
                        let formattedDate = `от ${formatInputDate(tripStart)} г. до ${formatInputDate(tripEnd)} г.`;
                        return `<div style="margin-left: 15px;">🗓️ ${formattedDate}</div>`;
                    }).join("")}
                    <button onclick="window.location.href='${trip.page}'">📖 Прочети повече</button>
                </div><br>`;
        });
    } else {
        listHTML = "<div>❌ Няма екскурзии на тези дати.</div><br>";
        trips[region].forEach(trip => {
            listHTML += `
                <div>
                    <strong>${trip.name} - ${trip.period} дни:</strong><br>
                    ${trip.dates.map(date => {
                        let [tripStart, tripEnd] = date.split(" - ");
                        let formattedDate = `от ${formatInputDate(tripStart)} г. до ${formatInputDate(tripEnd)} г.`;
                        return `<div style="margin-left: 15px;">🗓️ ${formattedDate}</div>`;
                    }).join("")}
                    <button onclick="window.location.href='${trip.page}'">📖 Прочети повече</button>
                </div><br>`;
        });
    }

    output.textContent = `✅ Препоръчани екскурзии за ${region}:`;
    tripList.innerHTML = listHTML;
}
