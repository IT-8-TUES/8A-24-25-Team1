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
        output.style.color = "red";
        tripList.innerHTML = "";
        return;
    }

    if (!startDate) {
        output.textContent = "Моля, въведете начална дата.";
        output.style.color = "red";
        tripList.innerHTML = "";
        return;
    }

    if (endDate && startDate > endDate) {
        output.textContent = "Грешка: Крайната дата трябва да бъде след началната!";
        output.style.color = "red";
        tripList.innerHTML = "";
        return;
    }

    if (endDate && startDate === endDate) {
        output.textContent = "Грешка: Началната и крайната дата не могат да бъдат еднакви!";
        output.style.color = "red";
        tripList.innerHTML = "";
        return;
    }

    let trips = {
        "Северозападна България": [
            { name: "Няма налична екскурзия", page: "", period: 0, dates: [""] }
        ],
        "Североизточна България": [
            { name: "Няма налична екскурзия", page: "", period: 0, dates: [""]}
        ],
        "Югозападна България": [
            { name: "Сандански - Велинград", page: "excursion4.html", period: 5, dates: ["2025-05-17 - 2025-05-22", "2025-05-31 - 2025-06-05", "2025-06-10 - 2025-06-15"] },
            { name: "Рила - Пирин", page: "excursion5.html", period: 6, dates: ["2025-05-19 - 2025-05-25", "2025-06-02 - 2025-06-08", "2025-06-12 - 2025-06-18"] }
        ],
        "Югоизточна България": [
            { name: "Няма налична екскурзия", page: "", period: 0, dates: [""] }
        ]
    };

    if (region === "Северозападна България" || region === "Североизточна България" || region === "Югоизточна България") {
        output.textContent = "Няма налични екскурзии за този регион.";
        output.style.color = "red";
        tripList.innerHTML = "";
        return;
    }

    let filteredTrips = trips[region]?.filter(trip =>
        trip.dates.some(dateRange => {
            let [tripStart, tripEnd] = dateRange.split(" - ");
            return (!endDate || (startDate <= tripEnd && endDate >= tripStart));
        })
    ) || [];

    if (filteredTrips.length > 0) {
        output.textContent = `Препоръчани екскурзии за ${region}:`;
        output.style.color = "black";
    } else {
        output.textContent = "Няма екскурзии на тези дати. Ето всички екскурзии за този регион:";
        output.style.color = "red";
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
