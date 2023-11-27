function subtract() {
    let result = Number(document.getElementById('firstNumber').value) - Number(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = result;
}