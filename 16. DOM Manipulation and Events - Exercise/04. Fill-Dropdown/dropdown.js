function addItem() {
    let newItem = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let dropDown = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.textContent = newItem.value;
    newOption.value = newItemValue.value;

    dropDown.appendChild(newOption);
    newItem.value = '';
    newItemValue.value = '';
}