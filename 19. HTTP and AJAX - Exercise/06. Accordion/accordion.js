function solution() {
    const articlesListURL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const articledetailsURL = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const mainSection = document.getElementById('main');

    loadArticles();

    async function loadArticles() {
        let response = await fetch(articlesListURL);
        let articles = await response.json();

        for (const article of articles) {
            let wrapper = document.createElement('div');
            wrapper.classList.add('accordion');
            mainSection.appendChild(wrapper);

            let head = document.createElement('div');
            head.classList.add('head');
            wrapper.appendChild(head);

            let titleSpan = document.createElement('span');
            titleSpan.textContent = article.title;
            head.appendChild(titleSpan);

            let button = document.createElement('button');
            button.classList.add('button');
            button.id = article._id;
            button.textContent = 'More';
            button.addEventListener('click', toggleContent);
            head.appendChild(button);
        }
    }

    async function toggleContent(event) {
        let toggleButton = event.currentTarget;
        let articleWrapper = toggleButton.parentElement.parentElement;
        let extraContainer = articleWrapper.getElementsByClassName('extra')[0];

        if (toggleButton.textContent === 'More') {

            if (!extraContainer) {
                let response = await fetch(articledetailsURL + toggleButton.id);
                let details = await response.json();

                extraContainer = document.createElement('div');
                extraContainer.classList.add('extra');
                articleWrapper.appendChild(extraContainer);

                let detailsP = document.createElement('p');
                detailsP.textContent = details.content;
                extraContainer.appendChild(detailsP);
            }
            toggleButton.textContent = 'Less';
            extraContainer.style.display = 'block';

        } else {
            toggleButton.textContent = 'More';
            extraContainer.style.display = 'none';
        }
    }
}

solution();