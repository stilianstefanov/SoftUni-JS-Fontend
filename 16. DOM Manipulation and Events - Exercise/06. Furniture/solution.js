function solve() {
  const generateButton = document.getElementsByTagName('button')[0];
  const buyButton = document.getElementsByTagName('button')[1];

  generateButton.addEventListener('click', createNewItem);
  buyButton.addEventListener('click', buyItems);

  function createNewItem() {
    const inputFurniture = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let tableBody = document.getElementsByTagName('tbody')[0];

    for (const item of inputFurniture) {
      let newRow = document.createElement('tr');

      let imageColumn = document.createElement('td');
      let img = document.createElement('img');
      img.src = item.img;
      imageColumn.appendChild(img);
      newRow.appendChild(imageColumn);

      let nameColumn = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameColumn.appendChild(nameP);
      newRow.appendChild(nameColumn);

      let priceColumn = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceColumn.appendChild(priceP);
      newRow.appendChild(priceColumn);

      let factorColumn = document.createElement('td');
      let factorP = document.createElement('p');
      factorP.textContent = item.decFactor
      factorColumn.appendChild(factorP);
      newRow.appendChild(factorColumn);

      let checkColumn = document.createElement('td');
      let checkInput = document.createElement('input');
      checkInput.type = 'checkbox';
      checkColumn.appendChild(checkInput);
      newRow.appendChild(checkColumn);

      tableBody.appendChild(newRow);
    }
  }

  function buyItems() {
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let outputArea = document.getElementsByTagName('textarea')[1];
    let totalPrice = 0;
    let decorationFactors = {};
    
    for (const row of tableRows) {
      const checkboxEl = row.getElementsByTagName('input')[0];

      if (checkboxEl.checked) {
        const [name, price, factor] = row.getElementsByTagName('p');
        decorationFactors[name.textContent] = Number(factor.textContent);
        totalPrice += Number(price.textContent);

      }
    }
    outputArea.value = `Bought furniture: ${Object.keys(decorationFactors).join(', ')}\n`;
    outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.value += `Average decoration factor: ${calculateAverage(Object.values(decorationFactors))}`
  }

  function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
  
    return average;
  }
}