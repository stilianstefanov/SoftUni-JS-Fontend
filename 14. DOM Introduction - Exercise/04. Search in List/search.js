function search() {
   let liElements = Array.from(document.getElementById('towns').children);
   let searchedString = document.getElementById('searchText').value;

   let matchesCount = 0;

   for (const element of liElements) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = 'none';

      if (element.textContent.toLowerCase().includes(searchedString.toLowerCase())) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         matchesCount++;

      }
   }

   document.getElementById('result').textContent = `${matchesCount} matches found`;
}
