// Функция за определяне на региона и извеждане на името на екскурзията
let regionName = '';
function region() {
    
    let selectedRegion = document.getElementById('region').value;
    switch(selectedRegion) {
        case 'Region1':
            regionName = 'Северозападна България';
            break;
        case 'Region2':
            regionName = 'Североизточна България';
            break;
        case 'Region3':
            regionName = 'Югозападна България';
            break;
        case 'Region4':
            regionName = 'Югоизточна България';
            break;
        case '':
            regionName = null;
            alert('Изберете регион');
            break;
    }
    console.log(regionName);
    getTowns(regionName);
}

let town = [];

function getTowns(regionName){
  switch(regionName){
    case 'Северозападна България':
      town = ['Видин','Белоградчик','Берковица','Чипровци','Козлодуй'];
      break;
    case 'Североизточна България':
      town = ['Шумен','Варна','Велико Търново','Силистра','Добрич'];
      break;
    case 'Югозападна България':
      town = ['Мелник','Банско','Сандански','Кюстендил','София'];
      break;
    case 'Югоизточна България':
      town = ['Бургас','Стара Загора','Ямбол','Сливен','Несебър'];
      break;
  }
  console.log(town);
  displayingOptions(town);
}

function displayingOptions(town){
  let i;
  for(i=0; i<=5;i++){
    document.querySelectorAll(`.city${i+1}`).forEach(function change(item){
                item.innerText = `${town[i]}`;
                item.value=  `${town[i]}`
                console.log(town[i]);
            })
    }
    
  }


let hotel1 = {
  name: '',
  location: '',
  img: ''
};

let hotel2 = {
  name: '',
  location: '',
  img: ''
};

let rest1 = {
  name: '',
  location: '',
  img: ''
};

let rest2 = {
  name: '',
  location: '',
  img: ''
};

function printHotels() {
  let selectedCity = document.querySelector('.selectCity').value;
  
  switch(selectedCity) {
    case 'Видин':
      hotel1.name = "Хотел Ровно";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.971653137328!2d22.87011477547006!3d43.980635771088465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753799d1949b817%3A0xdcaa3a9086aef4db!2z0KXQvtGC0LXQuyAi0KDQvtCy0L3QviI!5e0!3m2!1sbg!2sbg!4v1747232269789!5m2!1sbg!2sbg";
      hotel2.name = "Семеен хотел Анна-Кристина";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.660163398614!2d22.88073500000001!3d43.987077000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753795aaaaaaaab%3A0x121513e96e7e58fb!2z0KHQtdC80LXQtdC9INGF0L7RgtC10Lsg4oCe0JDQvdC90LAg0JrRgNC40YHRgtC40L3QsOKAnCDQktC40LTQuNC9!5e0!3m2!1sbg!2sbg!4v1747226383569!5m2!1sbg!2sbg";

      rest1.name = "Ресторант Бонония";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.7150145177166!2d22.8793315!3d43.9859428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753798530ae4697%3A0x504888736e737c29!2z0KDQtdGB0YLQvtGA0LDQvdGCINCR0L7QvdC-0L3QuNGP!5e0!3m2!1sbg!2sbg!4v1747331721981!5m2!1sbg!2sbg";
      rest2.name = "Ресторант Телеграф Капия ";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.611767547504!2d22.882562899999986!3d43.9880777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47537970bef312f7%3A0xe77976ef2fcc73ef!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQotC10LvQtdCz0YDQsNGEINC60LDQv9C40Y8i!5e0!3m2!1sbg!2sbg!4v1747332289535!5m2!1sbg!2sbg";
      break;

    case 'Белоградчик':
      hotel1.name = "Хотел Скалите";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1129173918357!2d22.6870251!3d43.625008699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d6e47a566b3%3A0x5625dc59f05b194f!2z0KXQvtGC0LXQuyAi0KHQutCw0LvQuNGC0LUi!5e0!3m2!1sbg!2sbg!4v1747226431078!5m2!1sbg!2sbg";
      hotel2.name = 'Hotel "Fort o Bel';
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1459618365725!2d22.676815200000014!3d43.6243209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548dd36894cc95%3A0x4b43847276870cf0!2sHotel%20%22Fort%20o%20Bel%22!5e0!3m2!1sbg!2sbg!4v1747226519217!5m2!1sbg!2sbg";

      rest1.name = "Ресторант Скалите";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1129173918357!2d22.6870251!3d43.625008699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d6e47a566b3%3A0x5625dc59f05b194f!2z0KXQvtGC0LXQuyAi0KHQutCw0LvQuNGC0LUi!5e0!3m2!1sbg!2sbg!4v1747332431231!5m2!1sbg!2sbg";
      rest2.name = "Механа Маркашница";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0981246071738!2d22.685294617443862!3d43.6253166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d6e3b7aedfd%3A0x953ce089a66e466f!2z0JzQtdGF0LDQvdCwINCc0LDRgNC60LDRiNC90LjRhtCw!5e0!3m2!1sbg!2sbg!4v1747332508315!5m2!1sbg!2sbg";
      break;

    case 'Берковица':
      hotel1.name = 'Хотел "Ком"';
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.3271977877953!2d28.074127400000002!3d43.37018210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4fceee83e01a5%3A0x6a4449fb14774f33!2z0KXQvtGC0LXQuyDQmtC-0Lw!5e0!3m2!1sbg!2sbg!4v1747226558646!5m2!1sbg!2sbg";
      hotel2.name = 'Грийн хил бутиков хотел';
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11627.211085477626!2d23.11928320371639!3d43.234594634371916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab2a51644496e5%3A0xd92d8e8d706e8ad6!2z0JPRgNC40LnQvSDRhdC40Lsg0LHRg9GC0LjQutC-0LIg0YXQvtGC0LXQuw!5e0!3m2!1sbg!2sbg!4v1747232475602!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Воденицата";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8767617518124!2d23.3034357!3d42.6215696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8395452c29fb%3A0x59929e00aa2fa77f!2z0JLQvtC00LXQvdC40YbQsNGC0LA!5e0!3m2!1sbg!2sbg!4v1747332577801!5m2!1sbg!2sbg";
      rest2.name = "Бистро V2";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.475508030574!2d23.12685300434096!3d43.23577282554873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab2bbb017d0efb%3A0x229d9b19c57fe666!2z0JHQuNGB0YLRgNC-IFYy!5e0!3m2!1sbg!2sbg!4v1747332686499!5m2!1sbg!2sbg";
      break;

    case 'Чипровци':
      hotel1.name = "Хотел Кипровец";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.6666774788177!2d22.877637231250983!3d43.38399317111612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4754db144e31adc9%3A0x6a135a4e2a840da1!2z0KXQvtGC0LXQuyDQmtC40L_RgNC-0LLQtdGG!5e0!3m2!1sbg!2sbg!4v1747232552093!5m2!1sbg!2sbg";
      hotel2.name = "Принцес Анастасия /Къща за гости/";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10225.529129999692!2d22.877060327298494!3d43.38253202766959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4754db613caf9711%3A0xc4d19c3c77b79693!2z0J_RgNC40L3RhtC10YEg0JDQvdCw0YHRgtCw0YHQuNGPIC_QmtGK0YnQsCDQt9CwINCz0L7RgdGC0Lgv!5e0!3m2!1sbg!2sbg!4v1747232649306!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант При Иван";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.087737418507!2d22.6915329!3d43.6255328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d702bd8b7df%3A0x2119fb65abf760fb!2z0J_RgNC4INCY0LLQsNC9!5e0!3m2!1sbg!2sbg!4v1747332767578!5m2!1sbg!2sbg";
      rest2.name = "Пицария Ресторант Чичовци";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751499.0232922054!2d22.434944509482865!3d42.628646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8392a0fc43b1%3A0x46e6dabdb51e5c72!2z0J_QuNGG0LDRgNC40Y8g0KDQtdGB0YLQvtGA0LDQvdGCIOKAnNCn0LjRh9C-0LLRhtC44oCd!5e0!3m2!1sbg!2sbg!4v1747332867200!5m2!1sbg!2sbg";
      break;

    case 'Козлодуй':
      hotel1.name = "Комплекс Радецки";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.793158064367!2d23.676154!3d43.7979049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40acae8d5028146f%3A0x5bf01cf6a60301a5!2z0JrQvtC80L_Qu9C10LrRgSAi0KDQsNC00LXRhtC60Lgi!5e0!3m2!1sbg!2sbg!4v1747232709896!5m2!1sbg!2sbg";
      hotel2.name = "By The River Hotel";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6016788439683!2d23.964416399999998!3d43.7396009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aca27f024a6117%3A0x93488ea7969a807a!2sBy%20The%20River%20Hotel!5e0!3m2!1sbg!2sbg!4v1747232777770!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Комплекс Радецки";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.793158064367!2d23.676154!3d43.7979049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40acae8d5028146f%3A0x5bf01cf6a60301a5!2z0JrQvtC80L_Qu9C10LrRgSAi0KDQsNC00LXRhtC60Lgi!5e0!3m2!1sbg!2sbg!4v1747333078294!5m2!1sbg!2sbg";
      rest2.name = "Ресторант Дунав";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472398.5973869145!2d24.429326399999997!3d43.88114045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60c5f8a7d5f3%3A0x3266edbb01b65eda!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQlNGD0L3QsNCyIg!5e0!3m2!1sbg!2sbg!4v1747333384352!5m2!1sbg!2sbg";
      break;

    case 'Шумен':
      hotel1.name = "Хотел Роял";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.56478151465393!2d26.935584154510128!3d43.27161104758793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58b018a9fb531%3A0xe7191c84ed503622!2z0KXQvtGC0LXQuyDQoNC-0Y_QuyDQqNGD0LzQtdC9!5e0!3m2!1sbg!2sbg!4v1747232858779!5m2!1sbg!2sbg";
      hotel2.name = "Арт хотел Нирвана";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4375161431312!2d26.9304876!3d43.263209100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58afa00dc0b1b%3A0xca1f2a1cd0dfc200!2z0JDRgNGCINGF0L7RgtC10Lsg0J3QuNGA0LLQsNC90LA!5e0!3m2!1sbg!2sbg!4v1747232924963!5m2!1sbg!2sbg";
      
      rest1.name = "Гурме ресторант Нирвана";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4385374521285!2d26.930488!3d43.263187699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58af0a40d8849%3A0x7e915f4ff7922a2!2z0JPRg9GA0LzQtSDRgNC10YHRgtC-0YDQsNC90YIg0J3QuNGA0LLQsNC90LA!5e0!3m2!1sbg!2sbg!4v1747333473912!5m2!1sbg!2sbg";
      rest2.name = "Примо бар и грил";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11619.668118945432!2d26.91449493095318!3d43.274114008167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58a5c7e9a4609%3A0xbd89297850579913!2z0J_RgNC40LzQviDQsdCw0YAg0Lgg0LPRgNC40Ls!5e0!3m2!1sbg!2sbg!4v1747333605668!5m2!1sbg!2sbg";
      break;

    case 'Варна':
      hotel1.name = "Комплекс Хоризонт";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13361.38702409267!2d27.923020048230658!3d43.21072650806384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4541b54b8f69b%3A0x7e25ab2c355ecf09!2z0JrQvtC80L_Qu9C10LrRgSDQpdC-0YDQuNC30L7QvdGC!5e0!3m2!1sbg!2sbg!4v1747233011860!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Виктория";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.9730257386377!2d27.902302799999998!3d43.21005510000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45477d74c179d%3A0x4f0c3fedef7240c5!2z0KXQvtGC0LXQuyDQktC40LrRgtC-0YDQuNGP!5e0!3m2!1sbg!2sbg!4v1747233075414!5m2!1sbg!2sbg";
      
      rest1.name = "Стария чинар Черно море";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.200523933344!2d27.919578899999994!3d43.2052833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455867a773827%3A0x6c9efb40ef06a720!2z0KHRgtCw0YDQuNGPINGH0LjQvdCw0YAg0KfQtdGA0L3QviDQvNC-0YDQtQ!5e0!3m2!1sbg!2sbg!4v1747333650084!5m2!1sbg!2sbg";
      rest2.name = "Капитан Кук";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23270.247223752416!2d27.889920550794784!3d43.19310786787255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a453e379d4af5b%3A0xaa50f8660dc2715a!2z0JrQsNC_0LjRgtCw0L0g0JrRg9C6!5e0!3m2!1sbg!2sbg!4v1747334024775!5m2!1sbg!2sbg";
      break;

    case 'Велико Търново':
      hotel1.name = "Гостилница При Вальо";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.6033840550367!2d25.612379699999988!3d43.0708085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9267160bc0985%3A0x18bd0cc516cf4198!2z0JPQvtGB0YLQuNC70L3QuNGG0LAg0J_RgNC4INCS0LDQu9GM0L4!5e0!3m2!1sbg!2sbg!4v1747325113794!5m2!1sbg!2sbg";
      hotel2.name = "Бутиков хотел Царевец";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.1297907904363!2d25.645118399999994!3d43.0807666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a92622463eff87%3A0x73b92d4ba7a1bb60!2sTsarevets%20Boutique%20Hotel%20%26%20SPA!5e0!3m2!1sbg!2sbg!4v1747325167677!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Щастливеца - стара част";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.9490306465273!2d25.636049599999996!3d43.08456689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9261b875279bf%3A0x98a11502275a03e4!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQqdCw0YHRgtC70LjQstC10YbQsCIgLSDRgdGC0LDRgNCwINGH0LDRgdGC!5e0!3m2!1sbg!2sbg!4v1747334117099!5m2!1sbg!2sbg";
      rest2.name = "Ego 1 pizza & grill";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.9978665918134!2d25.631505617443835!3d43.083540199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9261afa4dd997%3A0x9cb705a59a7cb31d!2zRWdvIDEgcGl6emEgJiBncmlsbCAtIHJlc3RhdXJhbnQg0JLQtdC70LjQutC-INCi0YrRgNC90L7QstC-!5e0!3m2!1sbg!2sbg!4v1747334196312!5m2!1sbg!2sbg";
      break;

    case 'Силистра':
      hotel1.name = "Хотел Дръстър";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.127995911283!2d27.261055999999996!3d44.121981999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b021d612c09ec3%3A0x16b1f350848b67f2!2sHotel%20Drustar!5e0!3m2!1sbg!2sbg!4v1747325537161!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Силистра";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11457.781816843275!2d27.2567890697754!3d44.11543330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01f82297c0061%3A0x5e63c15398a44e59!2z0KXQvtGC0LXQuyAi0KHQuNC70LjRgdGC0YDQsCI!5e0!3m2!1sbg!2sbg!4v1747325585160!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Дунав";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.4221188800184!2d27.2496618!3d44.1159147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b020295c30b6a3%3A0xe3490c238275b863!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQlNCj0J3QkNCSIg!5e0!3m2!1sbg!2sbg!4v1747334255418!5m2!1sbg!2sbg";
      rest2.name = "Силистра ресторант България";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728.594295479872!2d27.256640528940437!3d44.118495182607305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01f8c0ef5773b%3A0x7409697a112a0ec9!2z0KHQuNC70LjRgdGC0YDQsCDRgNC10YHRgtC-0YDQsNC90YIg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sbg!4v1747334340429!5m2!1sbg!2sbg";
      break;

    case 'Добрич':
      hotel1.name = "Парк Хотел Изида";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23126.08512209455!2d27.801408605800628!3d43.56987046299854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a516985efe024b%3A0xfebd01199c187680!2z0J_QsNGA0Log0KXQvtGC0LXQuyDQmNC30LjQtNCw!5e0!3m2!1sbg!2sbg!4v1747325830784!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Добруджа";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.7607008800064!2d27.82872680000001!3d43.5698692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a516832798578b%3A0xee436782f56c381c!2z0KXQvtGC0LXQuyDigJ7QlNC-0LHRgNGD0LTQttCw4oCc!5e0!3m2!1sbg!2sbg!4v1747325893082!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Старият Добрич ";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.6849485603475!2d27.829997899999995!3d43.57144749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5169cd698fddd%3A0x8ce6b3bbd719507a!2z0JPQvtGB0YLQuNC70L3QuNGG0LAg0KHRgtCw0YDQuNGPINCU0L7QsdGA0LjRhw!5e0!3m2!1sbg!2sbg!4v1747334389060!5m2!1sbg!2sbg";
      rest2.name = "Ресторант България";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.8310690709504!2d23.724342!3d41.572900600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abc078f78c1c53%3A0x256f81e8ce1cccb5!2z0KDQtdGB0YLQvtGA0LDQvdGCINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sbg!2sbg!4v1747334434052!5m2!1sbg!2sbg";
      break;

    case 'Мелник':
      hotel1.name = "Хотел Мелник";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.1588753337296!2d23.3924408!3d41.5224991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd303f7daa65%3A0xa7c95679fd09389b!2z0KXQntCi0JXQmyDQnNCV0JvQndCY0Jo!5e0!3m2!1sbg!2sbg!4v1747325928304!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Болярка";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.1127771748943!2d23.39371051744384!3d41.52349770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd2539a7470d%3A0x6643738e29505bb2!2z0YXQvtGC0LXQuyDQkdC-0LvRj9GA0LrQsA!5e0!3m2!1sbg!2sbg!4v1747326053206!5m2!1sbg!2sbg";
      
      rest1.name = "Механа Мелник";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.130577653002!2d23.3935421!3d41.5231121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd301b700001%3A0x21440c9e2b070e8f!2z0JzQtdGF0LDQvdCwINCc0LXQu9C90LjQug!5e0!3m2!1sbg!2sbg!4v1747334477563!5m2!1sbg!2sbg";
      rest2.name = "Механа Менчева Къща";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95587.7243884019!2d23.326368458203113!3d41.52341950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd253b1d9263%3A0x97772cb27ce6518e!2z0JzQtdGF0LDQvdCwINCc0LXQvdGH0LXQstCwINCa0YrRidCw!5e0!3m2!1sbg!2sbg!4v1747334562763!5m2!1sbg!2sbg";
      break;

    case 'Банско':
      hotel1.name = "Кемпински Хотел Гранд Арена";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.094291486908!2d23.4783393!3d41.82626769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abae9d53dc21f5%3A0x84776f1d29129361!2z0JrQtdC80L_QuNC90YHQutC4INGF0L7RgtC10Lsg0JPRgNCw0L3QtCDQkNGA0LXQvdCw!5e0!3m2!1sbg!2sbg!4v1747326209191!5m2!1sbg!2sbg";
      hotel2.name = "Apart Hotel Lucky Bansko SPA & Relax";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.33251528819!2d23.485299999999995!3d41.842669199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea5ec8d0299%3A0x7fba254290c9b376!2sApart%20Hotel%20Lucky%20Bansko%20SPA%20%26%20Relax!5e0!3m2!1sbg!2sbg!4v1747326262737!5m2!1sbg!2sbg";
      
      rest1.name = "Дедо Пене B&B";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.6709892205336!2d23.4874179!3d41.8353823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea2e48610e9%3A0x67af79453cc115e6!2z0JTQtdC00L4g0J_QtdC90LUgQiZC!5e0!3m2!1sbg!2sbg!4v1747334638150!5m2!1sbg!2sbg";
      rest2.name = "Италиански ресторант Леонардо";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.3414992710022!2d23.484354!3d41.842475799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea5de91b671%3A0x2445546cb83c9957!2z0JjRgtCw0LvQuNCw0L3RgdC60Lgg0YDQtdGB0YLQvtGA0LDQvdGCINCb0LXQvtC90LDRgNC00L4!5e0!3m2!1sbg!2sbg!4v1747334705412!5m2!1sbg!2sbg";
      break;

    case 'Сандански':
      hotel1.name = "Парк Хотел Пирин";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.4135225968876!2d23.2891022!3d41.581936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa33e2f2435bab%3A0x73da2cc51f908af1!2z0J_QsNGA0Log0KXQvtGC0LXQuyDQn9C40YDQuNC9!5e0!3m2!1sbg!2sbg!4v1747326316708!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Дева";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23885.132877573447!2d23.244214102141775!3d41.555356506700086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa317ea13694d5%3A0xee159f74d6315ac2!2z0KXQvtGC0LXQuyDQlNC10LLQsA!5e0!3m2!1sbg!2sbg!4v1747326465125!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Сандански";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23880.405070088513!2d23.24465095996857!3d41.568148736361145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa317998981131%3A0x15b51eb8d3edee6e!2z0KDQtdGB0YLQvtGA0LDQvdGCIOKAntCh0LDQvdC00LDQvdGB0LrQuOKAnA!5e0!3m2!1sbg!2sbg!4v1747334759063!5m2!1sbg!2sbg";
      rest2.name = "Restaurant Oasis";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5970.1016135777245!2d23.275939215120868!3d41.56814499148314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa3164afb8a9fd%3A0xc899a79a91652d92!2sRestaurant%20Oasis!5e0!3m2!1sbg!2sbg!4v1747334868729!5m2!1sbg!2sbg";
      break;

    case 'Кюстендил':
      hotel1.name = "Хотел Стримон Гардън СПА";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.7506791598867!2d22.6896464!3d42.283845199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea4a8ce803f%3A0xfa3a8b7d73440521!2sStrimon%20Garden%20SPA%20Hotel!5e0!3m2!1sbg!2sbg!4v1747327254446!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Велбъжд";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.6113496316466!2d22.684051!3d42.28681900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9c58ade60015%3A0xad90e356fae26240!2z0KXQvtGC0LXQuyDigJ7QktC10LvQsdGK0LbQtOKAnA!5e0!3m2!1sbg!2sbg!4v1747327363109!5m2!1sbg!2sbg";
      
      rest1.name = "Механа Михалкова Къща";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29441.453582681395!2d22.674795620736514!3d42.282784626871106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9c63cde611e7%3A0x41d9b0c2fb37cd4f!2z0JzQtdGF0LDQvdCwICLQnNC40YXQsNC70LrQvtCy0LAg0JrRitGJ0LAi!5e0!3m2!1sbg!2sbg!4v1747334961823!5m2!1sbg!2sbg";
      rest2.name = "Ресторант Френдс";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11806.87881139432!2d22.674093781122668!3d42.284506362066125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9cf5e3236eeb%3A0x9a4ffe6baa68477a!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQpNGA0LXQvdC00YEi!5e0!3m2!1sbg!2sbg!4v1747335045899!5m2!1sbg!2sbg";
      break;

    case 'София':
      hotel1.name = "Хотел Сенс";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.451667770654!2d23.3312623!3d42.694156199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa990b45e1e799%3A0xfaadfb5f5f892aec!2z0KHQtdC90YE!5e0!3m2!1sbg!2sbg!4v1747328926433!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Ники";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.6150817750977!2d23.3166077!3d42.69069530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8513724e852d%3A0x24f87fb2ca1440bc!2z0KXQvtGC0LXQuyDigJ7QndC40LrQuOKAnA!5e0!3m2!1sbg!2sbg!4v1747328979923!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант & пицария Каре";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.9224255519043!2d23.34484865988162!3d42.66299926365884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8433e2f5d267%3A0x818a88f4e15720f9!2z0KDQtdGB0YLQvtGA0LDQvdGCICYg0L_QuNGG0LDRgNC40Y8g0JrQsNGA0LU!5e0!3m2!1sbg!2sbg!4v1747335141354!5m2!1sbg!2sbg";
      rest2.name = "Хаджидрагановите къщи";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.8660691332034!2d23.320038575387738!3d42.70655657116282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856097373943%3A0x79c95ed83c9b8d54!2z0KXQsNC00LbQuNC00YDQsNCz0LDQvdC-0LLQuNGC0LUg0LrRitGJ0Lg!5e0!3m2!1sbg!2sbg!4v1747335189232!5m2!1sbg!2sbg";
      break;

    case 'Бургас':
      hotel1.name = "Хотел България Бургас";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.9431282107234!2d27.473331599999998!3d42.4927617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694c6d8b495d5%3A0x657d8b323b159fb6!2z0KXQvtGC0LXQuyDigJ7QkdGK0LvQs9Cw0YDQuNGP4oCc!5e0!3m2!1sbg!2sbg!4v1747329023190!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Аква";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.0814903545015!2d27.4673877!3d42.5110762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6948fe81540cb%3A0xb1eb5afea971908c!2z0KXQvtGC0LXQuyDQkNC60LLQsCAtINCR0YPRgNCz0LDRgQ!5e0!3m2!1sbg!2sbg!4v1747329064679!5m2!1sbg!2sbg";
      
      rest1.name = "Happy Bar & Grill Center (Burgas)";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5883.741422593585!2d27.475565934887705!3d42.49430119999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694c7216d8e9f%3A0x595ce4d47fd03a54!2sHappy%20Bar%20%26%20Grill%20Center%20(Burgas)!5e0!3m2!1sbg!2sbg!4v1747335273022!5m2!1sbg!2sbg";
      rest2.name = "Ресторант и бар Нептун";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.9723954247743!2d27.481508800000004!3d42.4921395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694c36f60a503%3A0xc053d081f280719e!2z0KDQtdGB0YLQvtGA0LDQvdGCINC4INCx0LDRgCAi0J3QtdC_0YLRg9C9Ig!5e0!3m2!1sbg!2sbg!4v1747335344300!5m2!1sbg!2sbg";
      break;

    case 'Стара Загора':
      hotel1.name = "Парк Хотел Стара Загора";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.19245499672!2d25.6352776!3d42.444921099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869b2f9701fcd%3A0x57f6877b6bff1e33!2z0J_QsNGA0Lot0KXQvtGC0LXQuyDQodGC0LDRgNCwINCX0LDQs9C-0YDQsA!5e0!3m2!1sbg!2sbg!4v1747329285276!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Елеганс";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1321841730482!2d25.6366752!3d42.4249212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a86975b0928e8d%3A0x23f307dda41c3270!2z0KXQvtGC0LXQuyDQldC70LXQs9Cw0L3RgQ!5e0!3m2!1sbg!2sbg!4v1747329351702!5m2!1sbg!2sbg";
      
      rest1.name = "Щастливеца";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.532586113491!2d25.631894799999998!3d42.4376831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869a553fed957%3A0xb5280acbd58cabb3!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQqdCw0YHRgtC70LjQstC10YbQsCIg0KHRgtCw0YDQsCDQl9Cw0LPQvtGA0LA!5e0!3m2!1sbg!2sbg!4v1747335398326!5m2!1sbg!2sbg";
      rest2.name = "ANTONY";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11780.172600639593!2d25.627924738535402!3d42.426816404697476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8697462b9d109%3A0xb2f9acf1aa2f8bb4!2sANTONY!5e0!3m2!1sbg!2sbg!4v1747335486907!5m2!1sbg!2sbg";
      break;

    case 'Ямбол':
      hotel1.name = "Хотел Диана Палас";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.417344162659!2d26.504539800000003!3d42.4826793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a63439b8f7e03d%3A0x55aeaeb829e6560b!2z0KXQvtGC0LXQuyDigJ7QlNC40LDQvdCwINC_0LDQu9Cw0YHigJ0!5e0!3m2!1sbg!2sbg!4v1747329398073!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Тунджа";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.31755491695!2d26.5036423!3d42.484801100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6343bdb7e33eb%3A0x4a95c357084801ca!2z0KXQvtGC0LXQuyDigJ7QotGD0L3QtNC20LDigJw!5e0!3m2!1sbg!2sbg!4v1747329441994!5m2!1sbg!2sbg";
      
      rest1.name = "Ресторант Тракия";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513560.1106587655!2d23.212201231249995!3d42.1893878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aca55516bb192f%3A0x4028d48d384d15fe!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQotGA0LDQutC40Y8i!5e0!3m2!1sbg!2sbg!4v1747335573010!5m2!1sbg!2sbg";
      rest2.name = "Pizzeria Medichi";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.447409949396!2d26.507291396789544!3d42.48204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a63436b6c0f7f1%3A0x30bd9e05f66cc835!2sPizzeria%20Medichi!5e0!3m2!1sbg!2sbg!4v1747335667749!5m2!1sbg!2sbg";
      break;

    case 'Сливен':
      hotel1.name = "Хотел Парк Централ";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.105623074517!2d26.315771299999998!3d42.680304899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a627432310c051%3A0x2dadbcc77d778c4!2z0KXQvtGC0LXQuyDQn9Cw0YDQuiDQptC10L3RgtGA0LDQuw!5e0!3m2!1sbg!2sbg!4v1747329486010!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Империя";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.404724975406!2d27.914920900000002!3d43.200999800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4534cce9a0a5b%3A0x82e157426766b99e!2sHOTEL%20IMPERIA!5e0!3m2!1sbg!2sbg!4v1747329525168!5m2!1sbg!2sbg";
      
      rest1.name = "Вила Вилекула";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5866.365950359426!2d26.306725144386288!3d42.67866627996004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6273f14ada253%3A0xc1460336e3473394!2z0JLQuNC70LAg0JLQuNC70LXQutGD0LvQsA!5e0!3m2!1sbg!2sbg!4v1747335760337!5m2!1sbg!2sbg";
      rest2.name = "Пицария „Палермо“";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11732.904846885409!2d26.30539145852109!3d42.67775033880653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a62742403e964d%3A0xc6bc65dfe24f1976!2z0J_QuNGG0LDRgNC40Y8g4oCe0J_QsNC70LXRgNC80L7igJw!5e0!3m2!1sbg!2sbg!4v1747335861414!5m2!1sbg!2sbg";
      break;

    case 'Несебър':
      hotel1.name = "Сол Несебър Палас";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.363114889147!2d27.698288!3d42.653659999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f35fb402b95%3A0x38fbb80448b20af8!2z0KHQvtC7INCd0LXRgdC10LHRitGAINCc0LDRgNC1!5e0!3m2!1sbg!2sbg!4v1747329560162!5m2!1sbg!2sbg";
      hotel2.name = "Хотел Свети Стефан";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10217.33246483494!2d27.728276464842047!3d42.65799718687956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f5fef7fa7e7%3A0x518d4ba80158b145!2z0YXQvtGC0LXQuyDigJ7QodCy0LXRgtC4INCh0YLQtdGE0LDQveKAnA!5e0!3m2!1sbg!2sbg!4v1747329611505!5m2!1sbg!2sbg";
      
      rest1.name = "Dionis";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.0548141520972!2d27.728264339948982!3d42.65903219033742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f5fd61702db%3A0x80f87154c150ab59!2sDionis!5e0!3m2!1sbg!2sbg!4v1747336006304!5m2!1sbg!2sbg";
      rest2.name = "Хемингуей";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.7908315113723!2d27.730871169830177!3d42.65787921264182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f5e32b80f4f%3A0xb92e65e6b3678c49!2z0KXQtdC80LjQvdCz0YPQtdC5!5e0!3m2!1sbg!2sbg!4v1747335943016!5m2!1sbg!2sbg";
      break;
  }
  
  document.getElementById('hotel1').innerText = hotel1.name;
  document.getElementById('hotel1Maps').src = hotel1.location;
  document.getElementById('hotel2').textContent = hotel2.name;
  document.getElementById('hotel2Maps').src = hotel2.location;

  document.getElementById('rest1').innerText = rest1.name;
  document.getElementById('rest1Maps').src = rest1.location;
  document.getElementById('rest2').textContent = rest2.name;
  document.getElementById('rest2Maps').src = rest2.location;
}