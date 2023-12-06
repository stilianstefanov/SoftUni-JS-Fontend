async function loadRepos() {
   await fetch('https://api.github.com/users/testnakov/repos')
      .then(data => data.text())
      .then(result => {
         document.getElementById('res').textContent = result;
      });
}