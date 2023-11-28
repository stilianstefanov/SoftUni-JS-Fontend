function solve() {
  const inputText = document.getElementById('input').value;
  const sentences = inputText.split('.');
  let outputElement = document.getElementById('output');

  let currentSentences = [];

  let counter = 0;
  for (const sentence of sentences) {
    if (sentence.length === 0) continue;

    if (counter === 3) {    
      outputElement.innerHTML += `<p>${currentSentences.join('.')}.</p>`;
      counter = 0;
      currentSentences = [];

    }
    currentSentences.push(sentence);
    counter++;
  }
  if (currentSentences.length !== 0) {
    outputElement.innerHTML += `<p>${currentSentences.join('.')}.</p>`;
  }
}