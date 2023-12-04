function solve() {
  let questionSections = Array.from(document.getElementsByTagName('section'));
  let resultUl = document.getElementById('results');
  let correctAnswers = {
    'firstQuestion': 'onclick',
    'secondQuestion': 'JSON.stringify()',
    'thirdQuestion': 'A programming API for HTML and XML documents'
  };
  let correctAnswersCount = 0;

  for (let index = 0; index < questionSections.length; index++) {
    let currentSection = questionSections[index];
    let currentSectionAnswers = Array.from(currentSection.getElementsByClassName('answer-wrap'));

    for (const answer of currentSectionAnswers) {
      answer.addEventListener('click', () => {
        let answerText = answer.children[0].textContent;
        if (Object.values(correctAnswers).includes(answerText)) {
          correctAnswersCount++;
        }

        currentSection.style.display = 'none';
        let nextSection = questionSections[index + 1];
        if (nextSection) {
          nextSection.style.display = 'block';

        } else {
          let resultText = correctAnswersCount === 3 
          ? 'You are recognized as top JavaScript fan!' 
          : `You have ${correctAnswersCount} right answers`;

          resultUl.querySelector('h1').textContent = resultText;
          resultUl.style.display = 'block';
        }
      });
    }
  }
}
