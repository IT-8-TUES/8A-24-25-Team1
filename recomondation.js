document.getElementById('city').addEventListener('change', function () {
    const selectedCity = this.value;
    const output1 = document.getElementById('output1');
  
    switch (selectedCity) {
      case 'option1':
        output1.textContent = 'Северозападна Бълагрия';
        break;
      case 'option2':
        output1.textContent = 'Североизточна България';
        break;
      case 'option3':
        output1.textContent = 'Югозападна България';
        break;
      case 'option4':
        output1.textContent = 'Югоизточна България';
        break;
      default:
        output1.textContent = '';
    }
  });