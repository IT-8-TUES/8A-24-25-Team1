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

function createObjectsCities (){

}

/*function city() {
  let selectedCity = document.querySelector('.selectCity').value;

  console.log(selectedCity);
  let townName = document.getElementById('townName');
  let rest1 = document.getElementById('rest1');
  let rest1Link = document.getElementById('rest1Link');
  let rest2 = document.getElementById('rest2');
  let rest2Link = document.getElementById('rest2Link');
  let hotel1 = document.getElementById('hotel1');
  let hotel1Link = document.getElementById('hotel1Link');
  let hotel2 = document.getElementById('hotel2');
  let hotel2Link = document.getElementById('hotel2Link');

  switch(selectedCity){
    case 'Видин':
      rest1.innerText = "Ресторант Бонония – С изглед към Дунав и разнообразно меню.";
      rest1Link.innerText = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.528374944633!2d22.879178648820425!3d43.9857267949507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753798530ae4697%3A0x504888736e737c29!2z0KDQtdGB0YLQvtGA0LDQvdGCINCR0L7QvdC-0L3QuNGP!5e0!3m2!1sbg!2sbg!4v1747217141841!5m2!1sbg!2sbg';
      rest2.innerText = 'Ресторант Телеграф Капия – Традиционна кухня в автентична обстановка.';
      rest2Link.innerText = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.528374944633!2d22.879178648820425!3d43.9857267949507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753798530ae4697%3A0x504888736e737c29!2z0KDQtdGB0YLQvtGA0LDQvdGCINCR0L7QvdC-0L3QuNGP!5e0!3m2!1sbg!2sbg!4v1747218702586!5m2!1sbg!2sbg';

      hotel1.innerText = 'Хотел Ровно – Централно разположен хотел с добра оценка от гостите.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Семеен хотел Анна-Кристина – Предлага комфортно настаняване с висока оценка.';
      hotel2Link.innerText = 'wretryftguh';
      break;

    case 'Белоградчик':
      rest1.innerText = "Ресторант Скалите – В хотел „Скалите“, предлага местна кухня.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Механа Белоградчик – Традиционни ястия в битов стил.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Скалите – Четиризвезден хотел в центъра на града с удобства за релакс.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Hotel Fort o Bel – Съчетание от комфорт и красива гледка към природата.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Берковица':
      rest1.innerText = "Ресторант Воденицата – Традиционна българска кухн";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Кафе-ресторант Централ – Класическа европейска и българска кухня.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел "Ком" – Разположен в подножието на Стара планина, предлага уютни стаи и красива природа.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел "Берковица" – Централно разположен хотел с удобства за туристи и бизнес пътуващи.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Чипровци':
      rest1.innerText = "Ресторант „При Иван“ – Домашно приготвена храна и уютна атмосфера.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Механа Чипровци – Местни специалитети.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Кипровец – Разположен в центъра на града, предлага комфортно настаняване.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Бутик Хотел Илица – Бутиков хотел в близост до Чипровци с модерни удобства.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Козлодуй':
      rest1.innerText = "Ресторант Комплекс Радецки – Българска кухня и дунавска риба.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Клуб-ресторант Дунав – Класическа атмосфера и местни ястия.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Комплекс Радецки – Хотел-ресторант на брега на Дунав с историческо значение.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'By The River Hotel – Модерен хотел с удобства и красива гледка.';
      hotel2Link.innerText = 'wretryftguh';
      break;
      

      case 'Шумен':
      rest1.innerText = "Gourmet Nirvana – Изискан ресторант с разнообразно меню.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Popsheytanova Kushta – Традиционна българска кухня в уютна обстановка.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Роял – Модерен и уютен, близо до центъра.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Family Art Hotel Nirvana – Артистична атмосфера, стил и комфорт.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Варна':
      rest1.innerText = "Staria Chinar – Cherno More – Барбекю и европейска кухня.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Happy Център Варна – Популярен с разнообразно и достъпно меню.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Комплекс Хоризонт – В Морската градина, с гледка и близост до плажа.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Виктория – Бутиков, комфортен и централно разположен.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Велико Търново':
      rest1.innerText = "Shtastliveca – Модерен интериор с българска кухня.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ego Pizza & Grill – Пица и грил в приятна атмосфера.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Янтра – С изглед към Царевец, със СПА и класически стил.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Boutique Hotel Tsarevets – Елегантен и романтичен бутиков хотел.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Силистра':
      rest1.innerText = "Ресторант Дунав – Рибни специалитети с изглед към реката.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Механа Силистра – Традиционна българска кухня в битов стил.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Дръстър – Луксозен хотел до Дунав с историческа тематика.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Силистра – Уютен и удобен за бизнес и туризъм.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Добрич':
      rest1.innerText = "Ресторант Старият Добрич – Традиционна кухня в историческа обстановка.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ресторант България – Местни специалитети и уют.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел България – Традиционен стил в центъра на града.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Добруджа – Удобен и спокоен престой.';
      hotel2Link.innerText = 'wretryftguh';
      break;


      case 'Мелник':
      rest1.innerText = "Механа Мелник – Традиционна кухня и местни вина.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Хотел Болярска къща – Домашен уют с красива гледка.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Мелник – Възрожденски стил в най-малкия град.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Болярска къща – Домашен уют с красива гледка.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Банско':
      rest1.innerText = "Механа Дедо Пене – Класическа българска битова кухня.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ресторант Леонардо – Италианска гурме кухня.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Кемпински Хотел Гранд Арена – 5-звезден лукс с отличен СПА център.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Лъки Банско – Модерен апартаментен хотел с много удобства.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Сандански':
      rest1.innerText = "Ресторант Сандански – Местни специалитети и уютна обстановка.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Механа Златен Рог – Богато меню в битов стил.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Парк Хотел Пирин – СПА хотел в подножието на Пирин.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Свети Никола – Централен хотел с добра кухня и удобства.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Кюстендил':
      rest1.innerText = "Вила Кюстендил – Изискано меню с гурме ястия.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Механа Чифлика – Традиционна българска кухня.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Хотел Стримон Гардън СПА – Луксозен СПА и уелнес хотел.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Хотел Велбъжд – Класически градски хотел.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'София':
      rest1.innerText = "Ресторант Саса – Международна кухня с модерна атмосфера.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Хаджидрагановите къщи – Българска кухня в автентичен стил.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Sense Hotel Sofia – Модерен 5-звезден хотел с панорамен бар.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Hotel Niky – Уютен хотел в центъра с удобства за туристи и бизнес.';
      hotel2Link.innerText = 'wretryftguh';
      break;


      case 'Бургас':
      rest1.innerText = "Happy Bar & Grill – Популярна верига с богато меню.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ресторант „Нептун“ – Морски деликатеси край брега.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Hotel Bulgaria Burgas – Централен хотел с панорамна гледка.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Aqua Hotel – Модерен хотел с вътрешен басейн и СПА.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Стара Загора':
      rest1.innerText = "Щастливеца – Разнообразна кухня и изискана атмосфера.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Зеленият хълм – Традиционна кухня с красива гледка.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Park Hotel Stara Zagora – Луксозен хотел край езеро.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Hotel Elegance – Бутиков стил и модерни удобства.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Ямбол':
      rest1.innerText = "Ресторант „Тракия“ – Класическа българска кухня.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ресторант „Класик“ – Модерна европейска кухня.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Hotel Diana Palace – Модерен хотел с ресторант.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Hotel Tundzha – Градски хотел с класически стил.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Сливен':
      rest1.innerText = "Ресторант Сливен – Българска кухня в традиционен стил.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ресторант Национал – Популярен сред местните, с разнообразно меню.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Hotel Park Central – Удобен и модерен хотел в центъра.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Hotel Imperia – Тихо и комфортно място за престой.';
      hotel2Link.innerText = 'wretryftguh';
      break;

      case 'Несебър':
      rest1.innerText = "Ресторант Стария Несебър – Морска кухня с гледка към морето.";
      rest1Link.innerText = 'wretryftguh';
      rest2.innerText = 'Ресторант Hemingway – Местни специалитети и уютна атмосфера.';
      rest2Link.innerText = 'wretryftguh';

      hotel1.innerText = 'Sol Nessebar Palace – All-inclusive хотел на брега с водни атракции.';
      hotel1Link.innerText = 'wretryftguh';
      hotel2.innerText = 'Hotel St. Stefan – Бутиков хотел в Стария град с морска гледка.';
      hotel2Link.innerText = 'wretryftguh';
      break;
  }
   if (hotel1Link !== "") {
        hotel1Link.src = hotel1Link;
    }

  if (hotel2Link !== "") {
        hotel2Link.src = hotel2Link;
    }

  if (rest1Link !== "") {
        rest1Link.src = rest1Link;
    }

  if (rest2Link !== "") {
        rest2Link.src = rest2Link;
    }
}