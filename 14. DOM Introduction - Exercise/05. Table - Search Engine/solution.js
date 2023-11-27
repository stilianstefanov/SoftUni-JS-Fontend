function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedString = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';

      let tableRows = Array.from(document.querySelectorAll('tbody tr'));

      for (let row of tableRows) {
         row.classList.remove('select');
         let rowCells = Array.from(row.children);

         if (rowCells.some(c => c.textContent.toLowerCase().includes(searchedString.toLowerCase()))) {
            row.classList.add('select');
         }
      }
   }
}