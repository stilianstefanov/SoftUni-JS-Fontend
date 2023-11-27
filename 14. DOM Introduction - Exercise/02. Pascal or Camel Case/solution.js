function solve() {
  const inputText = document.getElementById('text').value;
  const requiredFormat = document.getElementById('naming-convention').value;

  if (requiredFormat !== 'Pascal Case' && requiredFormat !== 'Camel Case') {
    document.getElementById('result').textContent = 'Error!';
    return;
  }

  let wordsArray = inputText.split(' ');
  let output = '';
  
  if (requiredFormat === 'Camel Case') {
    output += wordsArray.shift().toLowerCase();   
  }

  for (const word of wordsArray) {
    const wordConverted = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    output += wordConverted;
  }
  document.getElementById('result').textContent = output;
}