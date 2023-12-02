function create(words) {
   let divElemets = [];

   words.forEach(w => {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');

      newP.textContent = w;
      newP.style.display = 'none';
      newDiv.appendChild(newP);

      newDiv.addEventListener('click', () => {
         newDiv.children[0].style.display = '';
      });

      divElemets.push(newDiv);      
   });

   let outputElement = document.getElementById('content');
   divElemets.forEach(e => {
      outputElement.appendChild(e);
   })
}