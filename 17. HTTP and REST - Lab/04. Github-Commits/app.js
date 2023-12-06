async function loadCommits() {
    const inputUserNameEl = document.getElementById('username');
    const inputRepoEl = document.getElementById('repo');
    let outputUl = document.getElementById('commits');
    outputUl.innerHTML = '';
    const url = `https://api.github.com/repos/${inputUserNameEl.value}/${inputRepoEl.value}/commits`;

    await fetch(url)
            .then(response => {
                if(!response.ok) {
                    let newLi = document.createElement('li');
                    let newP = document.createElement('p');
                    newP.textContent = `Error: ${response.status} (Not found)`;
                    newLi.appendChild(newP);

                    outputUl.appendChild(newLi);
                    return;
                }
                return response.json();
            })
            .then(data => {
                data.forEach(c => {
                    let newLi = document.createElement('li');
                    let newP = document.createElement('p');
                    newP.textContent = `${c.commit.author.name}: ${c.commit.message}`;
                    newLi.appendChild(newP);

                    outputUl.appendChild(newLi);
                })
            });
}