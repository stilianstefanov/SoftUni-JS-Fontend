async function loadRepos() {
	const inputUsernameElement = document.getElementById('username');
	let resultUl = document.getElementById('repos');
	resultUl.innerHTML = '';
	const url = `https://api.github.com/users/${inputUsernameElement.value}/repos`;
	inputUsernameElement.value = '';

	await fetch(url)
			.then(data => data.json())
			.then(res => {
				res.forEach(r => {
					let newLi = document.createElement('li');
					let newA = document.createElement('a');
					newA.href = r.html_url;
					newA.textContent = r.full_name;
					newLi.appendChild(newA);

					resultUl.appendChild(newLi);
				});
			});
}