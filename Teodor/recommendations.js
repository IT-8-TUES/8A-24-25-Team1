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
      town = ['Бургас','Стара Загора','Хасково','Сливен','Несебър'];
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
  link: '',
  img: ''
};

let hotel2 = {
  name: '',
  location: '',
  link: '',
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

  document.getElementById("rest1Img").style.display="block";
  document.getElementById("rest2Img").style.display="block";
  document.getElementById("hotel1Img").style.display="block";
  document.getElementById("hotel2Img").style.display="block";

  switch(selectedCity) {
    case 'Видин':
      hotel1.name = "Хотел Ровно";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.971653137328!2d22.87011477547006!3d43.980635771088465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753799d1949b817%3A0xdcaa3a9086aef4db!2z0KXQvtGC0LXQuyAi0KDQvtCy0L3QviI!5e0!3m2!1sbg!2sbg!4v1747232269789!5m2!1sbg!2sbg";
      hotel1.img = "img/WidinHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/rovno.bg.html?aid=323176&label=rovno-cim9j7UbtiB2utv8ZHc2LQS275077768970%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-99744485124%3Alp1001461%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-839613&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747556034&srpvid=df5e39dba1321590&type=total&ucfs=1&";

      hotel2.name = "Семеен хотел Анна-Кристина";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.660163398614!2d22.88073500000001!3d43.987077000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753795aaaaaaaab%3A0x121513e96e7e58fb!2z0KHQtdC80LXQtdC9INGF0L7RgtC10Lsg4oCe0JDQvdC90LAg0JrRgNC40YHRgtC40L3QsOKAnCDQktC40LTQuNC9!5e0!3m2!1sbg!2sbg!4v1747226383569!5m2!1sbg!2sbg";
      hotel2.img = "img/WidinHotel2.jpg";
      hotel2.link = "https://www.booking.com/searchresults.bg.html?aid=318615&label=New_Bulgarian_BG_19114761385-34SRsx0jIztVK13WexpziQS634186712317%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55380194223%3Atidsa-321246203880%3Alp1001461%3Ali%3Adec%3Adm%3Aag19114761385%3Acmp108540745&gclid=Cj0KCQjwiqbBBhCAARIsAJSfZkYwIAR9PVLRzPvVpVYZoTJ1P8GPMmf1ScyN3BUDXbmtpPgk-Pe8mLEaAkIOEALw_wcB&highlighted_hotels=422642&redirected=1&city=-839613&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=93a6504c5e128f77887ac73532ccab87";

      rest1.name = "Ресторант Бонония";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.7150145177166!2d22.8793315!3d43.9859428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753798530ae4697%3A0x504888736e737c29!2z0KDQtdGB0YLQvtGA0LDQvdGCINCR0L7QvdC-0L3QuNGP!5e0!3m2!1sbg!2sbg!4v1747331721981!5m2!1sbg!2sbg";
      rest1.img = "img/WidinRest1.jpg";

      rest2.name = "Man&Mia";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22962.092030894306!2d22.834718110839848!3d43.99531969999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4753790060ab3fdd%3A0xe4a7e5036ed8d926!2sMan%26Mia!5e0!3m2!1sbg!2sbg!4v1747911348457!5m2!1sbg!2sbg";
      rest2.img = "img/WidinRest2.png";
      break;

    case 'Белоградчик':
      hotel1.name = "Хотел Скалите";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1129173918357!2d22.6870251!3d43.625008699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d6e47a566b3%3A0x5625dc59f05b194f!2z0KXQvtGC0LXQuyAi0KHQutCw0LvQuNGC0LUi!5e0!3m2!1sbg!2sbg!4v1747226431078!5m2!1sbg!2sbg";
      hotel1.img = "img/BeogradchikHotel1.jpg";
      hotel1.link = "https://www.booking.com/searchresults.bg.html?aid=318615&label=New_Bulgarian_BG_19114761385-34SRsx0jIztVK13WexpziQS634186712317%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566012825%3Alp1001461%3Ali%3Adec%3Adm%3Aag19114761385%3Acmp108540745&gclid=Cj0KCQjwiqbBBhCAARIsAJSfZkYA0HITW6u6I3ukwnfMYPkv7HPVFUPc3MYm0xu67lkrpiT_WaRg9akaAsPSEALw_wcB&highlighted_hotels=8689494&redirected=1&city=-832131&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=93a6504c5e128f77887ac73532ccab87";
      
      hotel2.name = 'Hotel Fort o Bel';
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1459618365725!2d22.676815200000014!3d43.6243209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548dd36894cc95%3A0x4b43847276870cf0!2sHotel%20%22Fort%20o%20Bel%22!5e0!3m2!1sbg!2sbg!4v1747226519217!5m2!1sbg!2sbg";
      hotel2.img = "img/BeogradchikHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/fort-o-bel.bg.html?aid=323176&label=fort-o-bel-z4w9hwbHRlBCKscE9_9XcAS625143792851%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-850704096955%3Alp1001461%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTQUGSsRwx9_PrTsz47A96U&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832131&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&map=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747557125&srpvid=a8c83c016cff0412&type=total&ucfs=1&#map_closed";

      rest1.name = "Ресторант Скалите";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1129173918357!2d22.6870251!3d43.625008699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d6e47a566b3%3A0x5625dc59f05b194f!2z0KXQvtGC0LXQuyAi0KHQutCw0LvQuNGC0LUi!5e0!3m2!1sbg!2sbg!4v1747332431231!5m2!1sbg!2sbg";
      rest1.img = "img/BeogradchikRest1.jpg";
      
      rest2.name = "Механа Маркашница";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0981246071738!2d22.685294617443862!3d43.6253166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d6e3b7aedfd%3A0x953ce089a66e466f!2z0JzQtdGF0LDQvdCwINCc0LDRgNC60LDRiNC90LjRhtCw!5e0!3m2!1sbg!2sbg!4v1747332508315!5m2!1sbg!2sbg";
      rest2.img = "img/BeogradchikRest2.jpg";
      break;

    case 'Берковица':
      hotel1.name = 'Хотел Воденицата';
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5426502579185!2d23.126502!3d43.2400477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab2a559a38013b%3A0x66cf84141c6d41b8!2z0KXQvtGC0LXQuyDQktC-0LTQtdC90LjRhtCw0YLQsA!5e0!3m2!1sbg!2sbg!4v1747913384080!5m2!1sbg!2sbg";
      hotel1.img = "img/BercowicaHotelRest1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/khotiel-riestorant-vodienitsata.bg.html?aid=323175&label=berkovitsa-RA_y7_ZrwG%2AbwvrgLlBDdwS500150718170%3Apl%3Ata%3Ap15%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12493774115%3Alp9214223%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsrrOiXr4XC74&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832176&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=4&hpos=4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747913095&srpvid=3fbf502908b7081f&type=total&ucfs=1&";
      
      hotel2.name = 'Green Hill Guest House';
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.471773361443!2d23.12217661791011!3d43.24153343669579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab2b59a27db675%3A0x47844654b77dea!2z0JrRitGJ0LAg0LfQsCDQs9C-0YHRgtC4IC0gR3JlZW4gSGlsbCBMdXh1cnkgVmlsbGE!5e0!3m2!1sbg!2sbg!4v1747592536315!5m2!1sbg!2sbg";
      hotel2.img = "img/BercowicaHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/green-hill-boutique.bg.html?aid=318615&label=Bulgarian_BG_28510482025-kYTuodUKz1YwLRo7a%2AmmvwS634186712281%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55652618300%3Atidsa-321246206760%3Alp1001461%3Ali%3Adec%3Adm%3Aag28510482025%3Acmp108540745&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832176&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747592159&srpvid=adca806a7312029c&type=total&ucfs=1&#map_closed";

      rest1.name = "Ресторант Воденицата";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8767617518124!2d23.3034357!3d42.6215696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8395452c29fb%3A0x59929e00aa2fa77f!2z0JLQvtC00LXQvdC40YbQsNGC0LA!5e0!3m2!1sbg!2sbg!4v1747332577801!5m2!1sbg!2sbg";
      rest1.img = "img/BercowicaHotelRest1.jpg";
      
      rest2.name = "Бистро V2";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.475508030574!2d23.12685300434096!3d43.23577282554873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab2bbb017d0efb%3A0x229d9b19c57fe666!2z0JHQuNGB0YLRgNC-IFYy!5e0!3m2!1sbg!2sbg!4v1747332686499!5m2!1sbg!2sbg";
      rest2.img = "img/BercowicaRest2.jpg";
      break;

    case 'Чипровци':
      hotel1.name = "Хотел-механа Павлова къща";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.7062946442593!2d22.880269900000002!3d43.3831649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4754db35b5fcef5b%3A0x9cde2f7e44e1a7ab!2z0KXQvtGC0LXQuy3QvNC10YXQsNC90LAgItCf0LDQstC70L7QstCwINC60YrRidCwIg!5e0!3m2!1sbg!2sbg!4v1747818118617!5m2!1sbg!2sbg";
      hotel1.img = "img/ChiprowciHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/khotel-mekhana-pavlova-kshcha.bg.html?aid=323175&label=chiprovtsi-3IZCfRziIs0RCalM11wN4QS473170072298%3Apl%3Ata%3Ap12%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-122886099380%3Alp9197338%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsrrOiXr4XC74&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832989&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747817761&srpvid=dae63e7768f20e64&type=total&ucfs=1&";
      
      hotel2.name = "Принцес Анастасия /Къща за гости/";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10225.529129999692!2d22.877060327298494!3d43.38253202766959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4754db613caf9711%3A0xc4d19c3c77b79693!2z0J_RgNC40L3RhtC10YEg0JDQvdCw0YHRgtCw0YHQuNGPIC_QmtGK0YnQsCDQt9CwINCz0L7RgdGC0Lgv!5e0!3m2!1sbg!2sbg!4v1747232649306!5m2!1sbg!2sbg";
      hotel2.img = "img/ChiprowciHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/kshcha-printsesa-anastasiia.bg.html?aid=318615&label=New_Bulgarian_BG_19114761385-34SRsx0jIztVK13WexpziQS634186712317%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566012825%3Alp1001461%3Ali%3Adec%3Adm%3Aag19114761385%3Acmp108540745&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832989&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747595055&srpvid=0ef9861172370bbd&type=total&ucfs=1&";

      rest1.name = "Ресторант При Иван";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.087737418507!2d22.6915329!3d43.6255328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47548d702bd8b7df%3A0x2119fb65abf760fb!2z0J_RgNC4INCY0LLQsNC9!5e0!3m2!1sbg!2sbg!4v1747332767578!5m2!1sbg!2sbg";
      rest1.img = "img/ChiprowciRest1.jpg";

      rest2.name = "Пицария Ресторант Чичовци";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751499.0232922054!2d22.434944509482865!3d42.628646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8392a0fc43b1%3A0x46e6dabdb51e5c72!2z0J_QuNGG0LDRgNC40Y8g0KDQtdGB0YLQvtGA0LDQvdGCIOKAnNCn0LjRh9C-0LLRhtC44oCd!5e0!3m2!1sbg!2sbg!4v1747332867200!5m2!1sbg!2sbg";
      rest2.img = "img/ChiprowciRest1.jpg";
      break;

    case 'Козлодуй':
      hotel1.name = "Комплекс Радецки";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.793158064367!2d23.676154!3d43.7979049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40acae8d5028146f%3A0x5bf01cf6a60301a5!2z0JrQvtC80L_Qu9C10LrRgSAi0KDQsNC00LXRhtC60Lgi!5e0!3m2!1sbg!2sbg!4v1747232709896!5m2!1sbg!2sbg";
      hotel1.img = "img/KozloduiHotel1.jpg";
      
      hotel2.name = "By The River Hotel";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6016788439683!2d23.964416399999998!3d43.7396009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aca27f024a6117%3A0x93488ea7969a807a!2sBy%20The%20River%20Hotel!5e0!3m2!1sbg!2sbg!4v1747232777770!5m2!1sbg!2sbg";
      hotel2.img = "img/KozloduiHotel1.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/by-the-river.bg.html?aid=356980&label=gog235jc-1FCAsoF0IMYnktdGhlLXJpdmVySANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAK-5KjBBsACAdICJGRmNTZkOGRiLTEzMjQtNGZlNS1hNTM2LTc1NmNhNWNlNjU2ZdgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-836922&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747595846&srpvid=190c879f8b2404aa&type=total&ucfs=1&";

      rest1.name = "Ресторант Комплекс Радецки";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.793158064367!2d23.676154!3d43.7979049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40acae8d5028146f%3A0x5bf01cf6a60301a5!2z0JrQvtC80L_Qu9C10LrRgSAi0KDQsNC00LXRhtC60Lgi!5e0!3m2!1sbg!2sbg!4v1747333078294!5m2!1sbg!2sbg";
      rest1.img = "img/KozloduiRest1.jpg";
      
      rest2.name = "Ресторант Дунав";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472398.5973869145!2d24.429326399999997!3d43.88114045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60c5f8a7d5f3%3A0x3266edbb01b65eda!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQlNGD0L3QsNCyIg!5e0!3m2!1sbg!2sbg!4v1747333384352!5m2!1sbg!2sbg";
      rest2.img = "img/KozloduiRest2.jpg";
      break;

    case 'Шумен':
      hotel1.name = "Хотел Роял";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.56478151465393!2d26.935584154510128!3d43.27161104758793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58b018a9fb531%3A0xe7191c84ed503622!2z0KXQvtGC0LXQuyDQoNC-0Y_QuyDQqNGD0LzQtdC9!5e0!3m2!1sbg!2sbg!4v1747232858779!5m2!1sbg!2sbg";
      hotel1.img = "img/ShumenHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/khotel-roial.bg.html?aid=318615&label=New_Bulgarian_BG_19114761385-34SRsx0jIztVK13WexpziQS634186712317%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566012825%3Alp9222567%3Ali%3Adec%3Adm%3Aag19114761385%3Acmp108540745&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838266&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747726073&srpvid=d349347859080343&type=total&ucfs=1&";
      
      hotel2.name = "Арт хотел Нирвана";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4375161431312!2d26.9304876!3d43.263209100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58afa00dc0b1b%3A0xca1f2a1cd0dfc200!2z0JDRgNGCINGF0L7RgtC10Lsg0J3QuNGA0LLQsNC90LA!5e0!3m2!1sbg!2sbg!4v1747232924963!5m2!1sbg!2sbg";
      hotel2.img = "img/ShumenHotel1.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/art-nirvana.bg.html?aid=356980&label=gog235jc-1FCAsoF0ILYXJ0LW5pcnZhbmFIA1gDaBeIAQGYAQO4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtvfsMEGwAIB0gIkMDI4ZGFjOTAtMDcyYS00MzdjLWE4YzgtMWI3Yjk1YTBjYmVi2AIF4AIB&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838266&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747726307&srpvid=a79534eea09500ee&type=total&ucfs=1&";

      rest1.name = "Гурме ресторант Нирвана";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4385374521285!2d26.930488!3d43.263187699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58af0a40d8849%3A0x7e915f4ff7922a2!2z0JPRg9GA0LzQtSDRgNC10YHRgtC-0YDQsNC90YIg0J3QuNGA0LLQsNC90LA!5e0!3m2!1sbg!2sbg!4v1747333473912!5m2!1sbg!2sbg";
      rest1.img = "img/ShumenRest1.jpg";
      
      rest2.name = "Примо бар и грил";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11619.668118945432!2d26.91449493095318!3d43.274114008167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58a5c7e9a4609%3A0xbd89297850579913!2z0J_RgNC40LzQviDQsdCw0YAg0Lgg0LPRgNC40Ls!5e0!3m2!1sbg!2sbg!4v1747333605668!5m2!1sbg!2sbg";
      rest1.img = "img/ShumenRest2.jpg";
      break;

    case 'Варна':
      hotel1.name = "Boutique Hotel Horizont";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13361.38702409267!2d27.923020048230658!3d43.21072650806384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4541b54b8f69b%3A0x7e25ab2c355ecf09!2z0JrQvtC80L_Qu9C10LrRgSDQpdC-0YDQuNC30L7QvdGC!5e0!3m2!1sbg!2sbg!4v1747233011860!5m2!1sbg!2sbg";
      hotel1.img = "img/WarnaHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/boutique-horizont-varna.bg.html?aid=356980&label=gog235jc-1FCAsoF0IXYm91dGlxdWUtaG9yaXpvbnQtdmFybmFIA1gDaBeIAQGYAQO4ARfIAQzYAQHoAQH4AQKIAgGoAgO4ArjysMEGwAIB0gIkYWViYWM5MzktY2E2Mi00MDQzLTg3MmEtMGViZTI4MTFlMzM42AIF4AIB&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-839465&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747728705&srpvid=b491399cfd4101d3&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Виктория";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.9730257386377!2d27.902302799999998!3d43.21005510000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45477d74c179d%3A0x4f0c3fedef7240c5!2z0KXQvtGC0LXQuyDQktC40LrRgtC-0YDQuNGP!5e0!3m2!1sbg!2sbg!4v1747233075414!5m2!1sbg!2sbg";
      hotel2.img = "img/WarnaHotel1.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/victoria-varna.bg.html?aid=323176&label=victoria-varna-QmFF1XyWcj015BV_3NDQ_QS266362560940%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12845001887%3Alp9197338%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-839465&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747740355&srpvid=a6ce505e7fb10eb7&type=total&ucfs=1&";

      rest1.name = "Стария чинар Черно море";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.200523933344!2d27.919578899999994!3d43.2052833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455867a773827%3A0x6c9efb40ef06a720!2z0KHRgtCw0YDQuNGPINGH0LjQvdCw0YAg0KfQtdGA0L3QviDQvNC-0YDQtQ!5e0!3m2!1sbg!2sbg!4v1747333650084!5m2!1sbg!2sbg";
      rest1.img = "img/WarnaRest1.jpg";
      
      rest2.name = "Капитан Кук";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23270.247223752416!2d27.889920550794784!3d43.19310786787255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a453e379d4af5b%3A0xaa50f8660dc2715a!2z0JrQsNC_0LjRgtCw0L0g0JrRg9C6!5e0!3m2!1sbg!2sbg!4v1747334024775!5m2!1sbg!2sbg";
      rest2.img = "img/WarnaRest2.jpg";
      break;

    case 'Велико Търново':
      hotel1.name = "Къща За Гости При Вальо";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.3852639462953!2d27.747939400000003!3d42.2702987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6cd9c1a1d12dd%3A0xd3a7220f53e88f08!2z0JrRitGJ0LAg0JfQsCDQk9C-0YHRgtC4INCf0YDQuCDQktCw0LvRjNC-!5e0!3m2!1sbg!2sbg!4v1747742597213!5m2!1sbg!2sbg";
      hotel1.img = "img/WelikoTyrnowoHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/guest-house-pri-valyo.bg.html?aid=356980&label=gog235jc-1FCAsoF0IVZ3Vlc3QtaG91c2UtcHJpLXZhbHlvSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuALd1LHBBsACAdICJGNiY2NjYjNkLTFkM2QtNDU2Yy1iOWM3LTRkOWVlNzc3MjkyZdgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-837528&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747741286&srpvid=c62b522fc36e1740&type=total&ucfs=1&";
      
      hotel2.name = "Tsarevets Boutique Hotel & SPA";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.1297907904363!2d25.645118399999994!3d43.0807666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a92622463eff87%3A0x73b92d4ba7a1bb60!2sTsarevets%20Boutique%20Hotel%20%26%20SPA!5e0!3m2!1sbg!2sbg!4v1747325167677!5m2!1sbg!2sbg";
      hotel2.img = "img/WelikoTyrnowoHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/tsarevets.bg.html?aid=356980&label=gog235jc-1FCAsoF0IJdHNhcmV2ZXRzSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuALQ4rHBBsACAdICJDI4MThjYjNkLTQ3YzAtNDNjZS1iYmNhLWY1ODNlMWM3ZTVlMtgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-839524&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747743064&srpvid=52a955a8481a03ca&type=total&ucfs=1&";

      rest1.name = "Ресторант Щастливеца - стара част";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.9490306465273!2d25.636049599999996!3d43.08456689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9261b875279bf%3A0x98a11502275a03e4!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQqdCw0YHRgtC70LjQstC10YbQsCIgLSDRgdGC0LDRgNCwINGH0LDRgdGC!5e0!3m2!1sbg!2sbg!4v1747334117099!5m2!1sbg!2sbg";
      rest1.img = "img/WelikoTyrnowoRest1.jpg";

      rest2.name = "Ego 1 pizza & grill";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.9978665918134!2d25.631505617443835!3d43.083540199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9261afa4dd997%3A0x9cb705a59a7cb31d!2zRWdvIDEgcGl6emEgJiBncmlsbCAtIHJlc3RhdXJhbnQg0JLQtdC70LjQutC-INCi0YrRgNC90L7QstC-!5e0!3m2!1sbg!2sbg!4v1747334196312!5m2!1sbg!2sbg";
      rest2.img = "img/WelikoTyrnowoRest2.jpg";
      break;

    case 'Силистра':
      hotel1.name = "Хотел Дръстър";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.127995911283!2d27.261055999999996!3d44.121981999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b021d612c09ec3%3A0x16b1f350848b67f2!2sHotel%20Drustar!5e0!3m2!1sbg!2sbg!4v1747325537161!5m2!1sbg!2sbg";
      hotel1.img = "img.SilistraHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/drustar-5.bg.html?aid=356980&label=gog235jc-1FCAsoF0IJZHJ1c3Rhci01SANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKe77HBBsACAdICJGZlYWYyNTNlLTA3OTctNDQzNy1iZTllLTk4OGUxMzdhNmJkNdgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838278&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747745430&srpvid=a8c858cf9b3b0819&type=total&ucfs=1&";

      hotel2.name = "Хотел Силистра";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11457.781816843275!2d27.2567890697754!3d44.11543330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01f82297c0061%3A0x5e63c15398a44e59!2z0KXQvtGC0LXQuyAi0KHQuNC70LjRgdGC0YDQsCI!5e0!3m2!1sbg!2sbg!4v1747325585160!5m2!1sbg!2sbg";
      hotel2.img = "img.SilistraHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/silistra.bg.html?aid=323176&label=silistra-rznndJwf9c0OJ%2A9iV3mU3AS438125932229%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-342517802566%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838278&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747745544&srpvid=15855a8078ab073a&type=total&ucfs=1&";

      rest1.name = "Ресторант Дунав";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.4221188800184!2d27.2496618!3d44.1159147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b020295c30b6a3%3A0xe3490c238275b863!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQlNCj0J3QkNCSIg!5e0!3m2!1sbg!2sbg!4v1747334255418!5m2!1sbg!2sbg";
      rest1.img = "img/SilistraRest1.jpg";

      rest2.name = "Силистра ресторант България";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728.594295479872!2d27.256640528940437!3d44.118495182607305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01f8c0ef5773b%3A0x7409697a112a0ec9!2z0KHQuNC70LjRgdGC0YDQsCDRgNC10YHRgtC-0YDQsNC90YIg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sbg!4v1747334340429!5m2!1sbg!2sbg";
      rest2.img = "img/SilistraRest2.jpg";
      break;

    case 'Добрич':
      hotel1.name = "Парк Хотел Изида";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23126.08512209455!2d27.801408605800628!3d43.56987046299854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a516985efe024b%3A0xfebd01199c187680!2z0J_QsNGA0Log0KXQvtGC0LXQuyDQmNC30LjQtNCw!5e0!3m2!1sbg!2sbg!4v1747325830784!5m2!1sbg!2sbg";
      hotel1.img = "img/DobrichHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/park-khotiel-izida.bg.html?aid=323176&label=park-khotiel-izida-ro1qU3eY68h54rFAslBTNgS466263653197%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-79398140244%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-839090&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747748127&srpvid=8a295f8ce7560b9f&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Добруджа";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.7607008800064!2d27.8287268!3d43.5698692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a516832798578b%3A0xee436782f56c381c!2z0KXQvtGC0LXQuyDigJ7QlNC-0LHRgNGD0LTQttCw4oCc!5e0!3m2!1sbg!2sbg!4v1747928708495!5m2!1sbg!2sbg";
      hotel2.img = "img/DobrichHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/dobrudja-dobrich.bg.html?aid=323176&label=dobrudja-dobrich-IsCClwunMkwG17VyZ6hJFQS190498573868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-38999679817%3Alp9214223%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-839090&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747928501&srpvid=d8216e5825bb038f&type=total&ucfs=1&";

      rest1.name = "Ресторант Старият Добрич ";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.6849485603475!2d27.829997899999995!3d43.57144749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5169cd698fddd%3A0x8ce6b3bbd719507a!2z0JPQvtGB0YLQuNC70L3QuNGG0LAg0KHRgtCw0YDQuNGPINCU0L7QsdGA0LjRhw!5e0!3m2!1sbg!2sbg!4v1747334389060!5m2!1sbg!2sbg";
      rest1.img = "img/Dobrichrest1.jpg";
      
      rest2.name = "Ресторант България";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.8310690709504!2d23.724342!3d41.572900600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abc078f78c1c53%3A0x256f81e8ce1cccb5!2z0KDQtdGB0YLQvtGA0LDQvdGCINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sbg!2sbg!4v1747334434052!5m2!1sbg!2sbg";
      rest2.img = "mg/Dobrichrest2.jpg";
      break;

    case 'Мелник':
      hotel1.name = "Хотел Мелник";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.1588753337296!2d23.3924408!3d41.5224991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd303f7daa65%3A0xa7c95679fd09389b!2z0KXQntCi0JXQmyDQnNCV0JvQndCY0Jo!5e0!3m2!1sbg!2sbg!4v1747325928304!5m2!1sbg!2sbg";
      hotel1.img = "img/MelnikHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/hotel-melnik.bg.html?aid=356980&label=gog235jc-1FCAsoF0IMaG90ZWwtbWVsbmlrSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAL9m7LBBsACAdICJDQzMTIwM2Y5LWZjOWUtNGI3Zi05MzQzLTM5ZWEzNWY4NDhhONgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-836318&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747750403&srpvid=79a163ff770305b1&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Болярка";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.1127771748943!2d23.39371051744384!3d41.52349770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd2539a7470d%3A0x6643738e29505bb2!2z0YXQvtGC0LXQuyDQkdC-0LvRj9GA0LrQsA!5e0!3m2!1sbg!2sbg!4v1747326053206!5m2!1sbg!2sbg";
      hotel2.img = "img/MelnikHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/mehana-bolyarka.bg.html?aid=356980&label=gog235jc-1FCAsoF0IPbWVoYW5hLWJvbHlhcmthSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKCnbLBBsACAdICJDdlZjI2ZTBlLTViZjgtNGVjMS1iMzg0LTk2YzIzYzQ1NTRlZNgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-836318&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747750536&srpvid=661c6441811705cd&type=total&ucfs=1&";

      rest1.name = "Механа Мелник";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.130577653002!2d23.3935421!3d41.5231121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd301b700001%3A0x21440c9e2b070e8f!2z0JzQtdGF0LDQvdCwINCc0LXQu9C90LjQug!5e0!3m2!1sbg!2sbg!4v1747334477563!5m2!1sbg!2sbg";
      rest1.img = "img/MelnikRest1.jpg";
      
      rest2.name = "Механа Менчева Къща";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95587.7243884019!2d23.326368458203113!3d41.52341950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abcd253b1d9263%3A0x97772cb27ce6518e!2z0JzQtdGF0LDQvdCwINCc0LXQvdGH0LXQstCwINCa0YrRidCw!5e0!3m2!1sbg!2sbg!4v1747334562763!5m2!1sbg!2sbg";
      rest2.img = "img/MelnikRest1.jpg";
      break;

    case 'Банско':
      hotel1.name = "Кемпински Хотел Гранд Арена";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.094291486908!2d23.4783393!3d41.82626769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abae9d53dc21f5%3A0x84776f1d29129361!2z0JrQtdC80L_QuNC90YHQutC4INGF0L7RgtC10Lsg0JPRgNCw0L3QtCDQkNGA0LXQvdCw!5e0!3m2!1sbg!2sbg!4v1747326209191!5m2!1sbg!2sbg";
      hotel1.img = "img/BanskoHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/kempinskihotelgrandarenabanskobulgaria.bg.html?aid=323176&label=kempinskihotelgrandarenabanskobulgaria-pUvwRUiF0N0rQNyfCbbk0AS731799269014%3Apl%3Ata%3Ap11%3Ap21%2C020%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12689233207%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-831977&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747750890&srpvid=483d64f2892507a3&type=total&ucfs=1&";

      hotel2.name = "Апартхотел Лъки Банско СПА & Релакс";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.33251528819!2d23.485299999999995!3d41.842669199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea5ec8d0299%3A0x7fba254290c9b376!2sApart%20Hotel%20Lucky%20Bansko%20SPA%20%26%20Relax!5e0!3m2!1sbg!2sbg!4v1747326262737!5m2!1sbg!2sbg";
      hotel2.img = "img/BanskoHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/lucky-bansko-aparthotel.bg.html?aid=323176&label=lucky-bansko-aparthotel-qLz%2AqJFu4BAu%2A3g1jemvjgS266357895497%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-519004676316%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-831977&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747751004&srpvid=6f6c65283d010125&type=total&ucfs=1&";

      rest1.name = "Дедо Пене B&B";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.6709892205336!2d23.4874179!3d41.8353823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea2e48610e9%3A0x67af79453cc115e6!2z0JTQtdC00L4g0J_QtdC90LUgQiZC!5e0!3m2!1sbg!2sbg!4v1747334638150!5m2!1sbg!2sbg";
      rest1.img = "img/BanskoRest1.jpg";
      
      rest2.name = "Италиански ресторант Леонардо";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.3414992710022!2d23.484354!3d41.842475799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea5de91b671%3A0x2445546cb83c9957!2z0JjRgtCw0LvQuNCw0L3RgdC60Lgg0YDQtdGB0YLQvtGA0LDQvdGCINCb0LXQvtC90LDRgNC00L4!5e0!3m2!1sbg!2sbg!4v1747334705412!5m2!1sbg!2sbg";
      rest2.img = "img/BanskoRest2.jpg";
      break;

    case 'Сандански':
      hotel1.name = "Парк Хотел Пирин";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.4135225968876!2d23.2891022!3d41.581936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa33e2f2435bab%3A0x73da2cc51f908af1!2z0J_QsNGA0Log0KXQvtGC0LXQuyDQn9C40YDQuNC9!5e0!3m2!1sbg!2sbg!4v1747326316708!5m2!1sbg!2sbg";
      hotel1.img = "img/SandanskiHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/pirin-park.bg.html?aid=356980&label=gog235jc-1FCAsoF0IKcGlyaW4tcGFya0gDWANoF4gBAZgBA7gBF8gBDNgBAegBAfgBAogCAagCA7gCr7KywQbAAgHSAiRjNDcwODFkZS05M2JhLTRlMjMtYmNkYi1lMzBkMGFmZDY3YzTYAgXgAgE&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838052&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747753267&srpvid=94d26998313208f7&type=total&ucfs=1&";

      hotel2.name = "Хотел Дева";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23885.132877573447!2d23.244214102141775!3d41.555356506700086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa317ea13694d5%3A0xee159f74d6315ac2!2z0KXQvtGC0LXQuyDQlNC10LLQsA!5e0!3m2!1sbg!2sbg!4v1747326465125!5m2!1sbg!2sbg";
      hotel2.img = "img/SandanskiHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/hotel-deva.bg.html?aid=356980&label=gog235jc-1FCAsoF0IKaG90ZWwtZGV2YUgDWANoF4gBAZgBA7gBF8gBDNgBAegBAfgBAogCAagCA7gC9rKywQbAAgHSAiRmYTA4MzE2Yy1jNzBmLTRhNmMtOTc0MS01ZjBkOGNmMTRlOWHYAgXgAgE&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838052&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747753353&srpvid=6f6c69bbfbd20395&type=total&ucfs=1&";

      rest1.name = "Ресторант Сандански";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23880.405070088513!2d23.24465095996857!3d41.568148736361145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa317998981131%3A0x15b51eb8d3edee6e!2z0KDQtdGB0YLQvtGA0LDQvdGCIOKAntCh0LDQvdC00LDQvdGB0LrQuOKAnA!5e0!3m2!1sbg!2sbg!4v1747334759063!5m2!1sbg!2sbg";
      rest1.img = "img/SandanskiRest1.jpg";
      
      rest2.name = "Restaurant Oasis";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5970.1016135777245!2d23.275939215120868!3d41.56814499148314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa3164afb8a9fd%3A0xc899a79a91652d92!2sRestaurant%20Oasis!5e0!3m2!1sbg!2sbg!4v1747334868729!5m2!1sbg!2sbg";
      rest2.img = "img/SandanskiRest2.jpg";
      break;

    case 'Кюстендил':
      hotel1.name = "Хотел Стримон Гардън СПА";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.7506791598867!2d22.6896464!3d42.283845199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaea4a8ce803f%3A0xfa3a8b7d73440521!2sStrimon%20Garden%20SPA%20Hotel!5e0!3m2!1sbg!2sbg!4v1747327254446!5m2!1sbg!2sbg";
      hotel1.img = "img/KystendilHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/strimon-garden-spa-hotel.bg.html?aid=356980&label=gog235jc-1FCA0oF0IYc3RyaW1vbi1nYXJkZW4tc3BhLWhvdGVsSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuALNvLLBBsACAdICJGY4MzM3NDM1LTFkZTItNDQwMi04OTA1LTE2MmJhZjIyMDE0Y9gCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-835744&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747754591&srpvid=21416c2a6d3502e8&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Велбъжд";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.6113496316466!2d22.684051!3d42.28681900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9c58ade60015%3A0xad90e356fae26240!2z0KXQvtGC0LXQuyDigJ7QktC10LvQsdGK0LbQtOKAnA!5e0!3m2!1sbg!2sbg!4v1747327363109!5m2!1sbg!2sbg";
      hotel2.img = "img/KystendilHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/velbujd.bg.html?aid=356980&label=gog235jc-1FCAsoF0IHdmVsYnVqZEgDWANoF4gBAZgBA7gBF8gBDNgBAegBAfgBAogCAagCA7gCk72ywQbAAgHSAiQ2MGY5Njg3Ny04NjJmLTQzY2QtYTQ2OC1hNzU5MTQ2YTYxMWLYAgXgAgE&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-835744&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747754649&srpvid=a87e6c4af5850cf0&type=total&ucfs=1&";

      rest1.name = "Механа Михалкова Къща";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29441.453582681395!2d22.674795620736514!3d42.282784626871106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9c63cde611e7%3A0x41d9b0c2fb37cd4f!2z0JzQtdGF0LDQvdCwICLQnNC40YXQsNC70LrQvtCy0LAg0JrRitGJ0LAi!5e0!3m2!1sbg!2sbg!4v1747334961823!5m2!1sbg!2sbg";
      rest1.img = "img/KystendilRest1.jpg";
      
      rest2.name = "Ресторант Friends";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11806.87881139432!2d22.674093781122668!3d42.284506362066125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9cf5e3236eeb%3A0x9a4ffe6baa68477a!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQpNGA0LXQvdC00YEi!5e0!3m2!1sbg!2sbg!4v1747335045899!5m2!1sbg!2sbg";
      rest2.img = "img/KystendilRest2.jpg";
      break;

    case 'София':
      hotel1.name = "Хотел Сенс";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.451667770654!2d23.3312623!3d42.694156199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa990b45e1e799%3A0xfaadfb5f5f892aec!2z0KHQtdC90YE!5e0!3m2!1sbg!2sbg!4v1747328926433!5m2!1sbg!2sbg";
      hotel1.img = "img/SofiaHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/sense-sofia.bg.html?aid=356980&label=gog235jc-1FCAsoF0ILc2Vuc2Utc29maWFIA1gDaBeIAQGYAQO4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtTSssEGwAIB0gIkZjA5MjlmOTctNzc4NC00ZTcxLTlmYWItN2RiOGUyOTcxYTJj2AIF4AIB&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838489&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747757404&srpvid=e19c71aa71b50372&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Ники";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.6150817750977!2d23.3166077!3d42.69069530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8513724e852d%3A0x24f87fb2ca1440bc!2z0KXQvtGC0LXQuyDigJ7QndC40LrQuOKAnA!5e0!3m2!1sbg!2sbg!4v1747328979923!5m2!1sbg!2sbg";
      hotel2.img = "img/SofiaHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/niky.bg.html?aid=323176&label=niky-8IP3dgruhaMcpZluspL9RwS466248300864%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12719334234%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838489&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747756319&srpvid=c62b6f8d77e30c82&type=total&ucfs=1&";

      rest1.name = "Ресторант & пицария Каре";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.9224255519043!2d23.34484865988162!3d42.66299926365884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8433e2f5d267%3A0x818a88f4e15720f9!2z0KDQtdGB0YLQvtGA0LDQvdGCICYg0L_QuNGG0LDRgNC40Y8g0JrQsNGA0LU!5e0!3m2!1sbg!2sbg!4v1747335141354!5m2!1sbg!2sbg";
      rest1.img = "img/SofiaRest1.jpg";

      rest2.name = "Хаджидрагановите къщи";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.8660691332034!2d23.320038575387738!3d42.70655657116282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856097373943%3A0x79c95ed83c9b8d54!2z0KXQsNC00LbQuNC00YDQsNCz0LDQvdC-0LLQuNGC0LUg0LrRitGJ0Lg!5e0!3m2!1sbg!2sbg!4v1747335189232!5m2!1sbg!2sbg";
      rest2.img = "img/SofiaRest2.jpg";
      break;

    case 'Бургас':
      hotel1.name = "Хотел България Бургас";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.9431282107234!2d27.473331599999998!3d42.4927617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694c6d8b495d5%3A0x657d8b323b159fb6!2z0KXQvtGC0LXQuyDigJ7QkdGK0LvQs9Cw0YDQuNGP4oCc!5e0!3m2!1sbg!2sbg!4v1747329023190!5m2!1sbg!2sbg";
      hotel1.img = "img/BurgasHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/bulgaria-burgas.bg.html?aid=356980&label=gog235jc-1FCAsoF0IPYnVsZ2FyaWEtYnVyZ2FzSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKZ6rLBBsACAdICJDQ1ZjM1YWM4LTg5NjYtNDcxZC05YTA4LWFjNGFjOGYzZTc3YtgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832673&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747760428&srpvid=e19b778d61c201d2&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Аква";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.0814903545015!2d27.4673877!3d42.5110762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6948fe81540cb%3A0xb1eb5afea971908c!2z0KXQvtGC0LXQuyDQkNC60LLQsCAtINCR0YPRgNCz0LDRgQ!5e0!3m2!1sbg!2sbg!4v1747329064679!5m2!1sbg!2sbg";
      hotel2.img = "img/BurgasHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/aqua-burgas.bg.html?aid=323176&label=aqua-burgas-AEaUIhIIjsuGog%2A_N74ChgS438112840541%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-10515767449%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-832673&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747760475&srpvid=d50377a87b34017a&type=total&ucfs=1&";

      rest1.name = "Happy Bar & Grill Center (Burgas)";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5883.741422593585!2d27.475565934887705!3d42.49430119999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694c7216d8e9f%3A0x595ce4d47fd03a54!2sHappy%20Bar%20%26%20Grill%20Center%20(Burgas)!5e0!3m2!1sbg!2sbg!4v1747335273022!5m2!1sbg!2sbg";
      rest1.img = "img/BurgasRest1.jpg";
      
      rest2.name = "Ресторант и бар Нептун";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.9723954247743!2d27.481508800000004!3d42.4921395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694c36f60a503%3A0xc053d081f280719e!2z0KDQtdGB0YLQvtGA0LDQvdGCINC4INCx0LDRgCAi0J3QtdC_0YLRg9C9Ig!5e0!3m2!1sbg!2sbg!4v1747335344300!5m2!1sbg!2sbg";
      rest2.img = "img/BurgasRest2.jpg";
      break;

    case 'Стара Загора':
      hotel1.name = "Парк Хотел Стара Загора";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.19245499672!2d25.6352776!3d42.444921099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869b2f9701fcd%3A0x57f6877b6bff1e33!2z0J_QsNGA0Lot0KXQvtGC0LXQuyDQodGC0LDRgNCwINCX0LDQs9C-0YDQsA!5e0!3m2!1sbg!2sbg!4v1747329285276!5m2!1sbg!2sbg";
      hotel2.img = "img/StaraZagoraHotel1.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/park-stara-zagora.bg.html?aid=318615&label=Bulgarian_BG_29561930545-hIMWGJL9nfB99QXILbP4WQS634186712305%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55328758879%3Atidsa-331215073644%3Alp9222567%3Ali%3Adec%3Adm%3Aag29561930545%3Acmp108540745&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747813219&srpvid=bd9135efbfa300d2&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Елеганс";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1321841730482!2d25.6366752!3d42.4249212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a86975b0928e8d%3A0x23f307dda41c3270!2z0KXQvtGC0LXQuyDQldC70LXQs9Cw0L3RgQ!5e0!3m2!1sbg!2sbg!4v1747329351702!5m2!1sbg!2sbg";
      hotel2.img = "img/StaraZagoraHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/elegance.bg.html?aid=323176&label=elegance-3ftemiFH88GC4k04A6Tp5QS438112840754%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-79396470924%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0k0Jj07Epxvc&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747813301&srpvid=58bf3618bea401d3&type=total&ucfs=1&";

      rest1.name = "Щастливеца";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.532586113491!2d25.631894799999998!3d42.4376831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869a553fed957%3A0xb5280acbd58cabb3!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQqdCw0YHRgtC70LjQstC10YbQsCIg0KHRgtCw0YDQsCDQl9Cw0LPQvtGA0LA!5e0!3m2!1sbg!2sbg!4v1747335398326!5m2!1sbg!2sbg";
      rest1.img = "img/StaraZagoraRest1.jpg";

      rest2.name = "ANTONY";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11780.172600639593!2d25.627924738535402!3d42.426816404697476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8697462b9d109%3A0xb2f9acf1aa2f8bb4!2sANTONY!5e0!3m2!1sbg!2sbg!4v1747335486907!5m2!1sbg!2sbg";
      rest2.img = "img/StaraZagoraRest2.jpg";
      break;

    case 'Хасково':
      hotel1.name = "Бутиков хотел History";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.60121564033!2d25.5404024!3d41.9444198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad512034e0c9e1%3A0x533752458a977f7f!2z0KXQvtGC0LXQuy3RgNC10YHRgtC-0YDQsNC90YIgSGlzdG9yeSDQpdCw0YHQutC-0LLQvg!5e0!3m2!1sbg!2sbg!4v1747815651895!5m2!1sbg!2sbg";
      hotel1.img = "img/HaskovoHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/history.bg.html?aid=318615&label=New_Bulgarian_BG_20480106145-g5KEffQcX7MwX1IpaJACzgS634186712284%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55056447527%3Atidsa-303472602395%3Alp9197338%3Ali%3Adec%3Adm%3Aag20480106145%3Acmp108540745&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-835029&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747814862&srpvid=faf33924e6740564&type=total&ucfs=1&";
      
      hotel2.name = "VIGOR Hotel";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.282295594088!2d25.570233899999998!3d41.929784999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad570fc1879ba7%3A0xe5774a1498e0c16f!2sHotel%20Vigor!5e0!3m2!1sbg!2sbg!4v1747815618826!5m2!1sbg!2sbg";
      hotel2.img = "img/HaskovoHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/vigor.bg.html?aid=318615&label=New_Bulgarian_BG_20480106145-g5KEffQcX7MwX1IpaJACzgS634186712284%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55056447527%3Atidsa-303472602395%3Alp9197338%3Ali%3Adec%3Adm%3Aag20480106145%3Acmp108540745&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-835029&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747815261&srpvid=661c39ec777f15ed&type=total&ucfs=1&";

      rest1.name = "Burger Bar 13";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.8726626902735!2d25.552027524731738!3d41.9339172413032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad51898da97129%3A0xeafa3d26973b2969!2sBurger%20Bar%2013!5e0!3m2!1sbg!2sbg!4v1747815887453!5m2!1sbg!2sbg";
      rest1.img = "img/HaskovoRest1.jpg";
      
      rest2.name = "Ресторант Алафрангите";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.0250401990834!2d25.542516488854986!3d41.9353133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad50c2e467af83%3A0xecd7ad19c95ef1f!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQkNC70LDRhNGA0LDQvdCz0LjRgtC1Ig!5e0!3m2!1sbg!2sbg!4v1747816000639!5m2!1sbg!2sbg";
      rest2.img = "img/HaskovoRest2.jpg";
      break;

    case 'Сливен':
      hotel1.name = "Хотел Парк Централ";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.105623074517!2d26.315771299999998!3d42.680304899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a627432310c051%3A0x2dadbcc77d778c4!2z0KXQvtGC0LXQuyDQn9Cw0YDQuiDQptC10L3RgtGA0LDQuw!5e0!3m2!1sbg!2sbg!4v1747329486010!5m2!1sbg!2sbg";
      hotel1.img = "img/SlivenHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/park-central.bg.html?aid=323176&label=park-central-mY2M2Byc4O6inVKhJOjyaQS203201829768%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-101140065861%3Alp9197338%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXdX6HrtnYy-H1SL7QUSpK8&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838421&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747816481&srpvid=8a293c4e6f3d001e&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Рикас";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.25729389783!2d26.319247710356112!3d42.67709187104489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6274034ac4291%3A0x3308f9455a24b0f6!2z0KXQvtGC0LXQuyDigJ7QoNC40LrQsNGB4oCc!5e0!3m2!1sbg!2sbg!4v1747936227698!5m2!1sbg!2sbg";
      hotel2.img = "img/SlivenHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/ricas.bg.html?aid=356980&label=gog235jc-1FCAsoF0IFcmljYXNIA1gDaBeIAQGYAQO4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AorFvcEGwAIB0gIkZDBhOTgwNjItYWVkMC00MjQwLTkxMDItZDhiY2NiMWMwNzRm2AIF4AIB&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-838421&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747935888&srpvid=d2b97cc52f750435&type=total&ucfs=1&";

      rest1.name = "Вила Вилекула";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5866.365950359426!2d26.306725144386288!3d42.67866627996004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6273f14ada253%3A0xc1460336e3473394!2z0JLQuNC70LAg0JLQuNC70LXQutGD0LvQsA!5e0!3m2!1sbg!2sbg!4v1747335760337!5m2!1sbg!2sbg";
      rest1.img = "img/SlivenRest1.jpeg";
      
      rest2.name = "Пицария „Палермо“";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11732.904846885409!2d26.30539145852109!3d42.67775033880653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a62742403e964d%3A0xc6bc65dfe24f1976!2z0J_QuNGG0LDRgNC40Y8g4oCe0J_QsNC70LXRgNC80L7igJw!5e0!3m2!1sbg!2sbg!4v1747335861414!5m2!1sbg!2sbg";
      rest2.img = "img/SlivenRest2.jpeg";
      break;

    case 'Несебър':
      hotel1.name = "Sol Nessebar Palace All Inclusive";
      hotel1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.363114889147!2d27.698288!3d42.653659999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f35fb402b95%3A0x38fbb80448b20af8!2z0KHQvtC7INCd0LXRgdC10LHRitGAINCc0LDRgNC1!5e0!3m2!1sbg!2sbg!4v1747329560162!5m2!1sbg!2sbg";
      hotel1.img = "img/NesebarHotel1.jpg";
      hotel1.link = "https://www.booking.com/hotel/bg/nessebar-palace.bg.html?aid=356980&label=gog235jc-1FCAsoF0IPbmVzc2ViYXItcGFsYWNlSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKPpLbBBsACAdICJDcxMWU5ODQ0LWQ5MmQtNGQ4YS1hZjg1LWFiMWUyNWY0OGFmOdgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-836658&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747816985&srpvid=f0813d48e6220475&type=total&ucfs=1&";
      
      hotel2.name = "Хотел Свети Стефан";
      hotel2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10217.33246483494!2d27.728276464842047!3d42.65799718687956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f5fef7fa7e7%3A0x518d4ba80158b145!2z0YXQvtGC0LXQuyDigJ7QodCy0LXRgtC4INCh0YLQtdGE0LDQveKAnA!5e0!3m2!1sbg!2sbg!4v1747329611505!5m2!1sbg!2sbg";
      hotel2.img = "img/NesebarHotel2.jpg";
      hotel2.link = "https://www.booking.com/hotel/bg/st-stefan.bg.html?aid=356980&label=gog235jc-1FCAsoF0IJc3Qtc3RlZmFuSANYA2gXiAEBmAEDuAEXyAEM2AEB6AEB-AECiAIBqAIDuAL8pbbBBsACAdICJDViMDQ3NTc1LTU3OGItNGE4ZC1iNThlLWRmNjdlNDc3ODkxNdgCBeACAQ&sid=93a6504c5e128f77887ac73532ccab87&dest_id=-836658&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747817222&srpvid=b3c93dbee98512c6&type=total&ucfs=1&";

      rest1.name = "Dionis";
      rest1.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.0548141520972!2d27.728264339948982!3d42.65903219033742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f5fd61702db%3A0x80f87154c150ab59!2sDionis!5e0!3m2!1sbg!2sbg!4v1747336006304!5m2!1sbg!2sbg";
      rest1.img = "img/NesebarRest1.webp";
      
      rest2.name = "Хемингуей";
      rest2.location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.7908315113723!2d27.730871169830177!3d42.65787921264182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f5e32b80f4f%3A0xb92e65e6b3678c49!2z0KXQtdC80LjQvdCz0YPQtdC5!5e0!3m2!1sbg!2sbg!4v1747335943016!5m2!1sbg!2sbg";
      rest2.img = "img/NesebarRest2.webp";
      break;
  }


  document.getElementById('hotel1').innerText = hotel1.name;
  document.getElementById('hotel1Maps').src = hotel1.location;
  document.getElementById('hotel1Img').src = hotel1.img;
  document.getElementById('hotel1link').href = hotel1.link;
  
  document.getElementById('hotel2').textContent = hotel2.name;
  document.getElementById('hotel2Maps').src = hotel2.location;
  document.getElementById('hotel2Img').src = hotel2.img;
  document.getElementById('hotel1link').src = hotel1.link;

  document.getElementById('rest1').innerText = rest1.name;
  document.getElementById('rest1Maps').src = rest1.location;
  document.getElementById('rest1Img').src = rest1.img;
  
  document.getElementById('rest2').textContent = rest2.name;
  document.getElementById('rest2Maps').src = rest2.location;
  document.getElementById('rest2Img').src = rest2.img;
}


document.addEventListener("DOMContentLoaded", load);
document.addEventListener("change", load);

function load(){
  let selectedRegion = document.getElementById('region').value;
  let selectCity = document.querySelector('.selectCity');

  if (selectedRegion == "no-value") {
    selectCity.disabled = true;
  } else {
    selectCity.disabled = false;
  }

}
