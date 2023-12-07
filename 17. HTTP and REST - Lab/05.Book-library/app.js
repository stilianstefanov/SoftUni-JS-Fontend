function attachEvents() {
    let loadBooksButton = document.getElementById('loadBooks');
    let tableBody = document.getElementsByTagName('tbody')[0];

    let submitNewButton = document.querySelector('#form button');
    let inputTitleField = document.querySelector('#form input');
    let inputAuthorField = document.querySelectorAll('#form input')[1];
    let inputFormTitle = document.querySelector('#form h3');

    loadBooksButton.addEventListener('click', loadAllBooks);
    submitNewButton.addEventListener('click', createOrEditBook);

    async function loadAllBooks() {
        await fetch('http://localhost:3030/jsonstore/collections/books/')
            .then(response => response.json())
            .then(books => {
                tableBody.innerHTML = '';
                Object.entries(books).forEach(entry => {
                    let newRow = document.createElement('tr');
                    let newTitleColumn = document.createElement('td');
                    let newAuthorColumn = document.createElement('td');
                    let newActionsColumn = document.createElement('td');

                    let newEditButton = document.createElement('button');
                    let newDeleteButton = document.createElement('button');
                    newEditButton.textContent = 'Edit';
                    newEditButton.value = entry[0];
                    newDeleteButton.textContent = 'Delete';
                    newDeleteButton.value = entry[0];

                    newTitleColumn.textContent = entry[1].title;
                    newAuthorColumn.textContent = entry[1].author;

                    newEditButton.addEventListener('click', function fillEditForm(e) {
                        inputFormTitle.textContent = 'Edit FORM';
                        submitNewButton.textContent = 'Save';
                        submitNewButton.value = e.currentTarget.value;
                        inputTitleField.value = newTitleColumn.textContent;
                        inputAuthorField.value = newAuthorColumn.textContent;
                    });
                    newDeleteButton.addEventListener('click', DeleteBook);

                    newActionsColumn.appendChild(newEditButton);
                    newActionsColumn.appendChild(newDeleteButton);
                    newRow.appendChild(newTitleColumn);
                    newRow.appendChild(newAuthorColumn);
                    newRow.appendChild(newActionsColumn);
                    tableBody.appendChild(newRow);
                })
            });
    }

    async function DeleteBook(e) {
        let deleteURL = `http://localhost:3030/jsonstore/collections/books/${e.currentTarget.value}`;
        await fetch(deleteURL, {
            method: 'DELETE'
        });
        await loadAllBooks();
    }

    async function createOrEditBook(e) {
        let submitButton = e.currentTarget;
        let author = inputAuthorField.value;
        let title = inputTitleField.value;
        if (title === "" || author === "") {
            alert("Please fill in all input fields");
            return;
        }

        if (submitButton.textContent === 'Submit') {
            await fetch('http://localhost:3030/jsonstore/collections/books', {
                method: "POST",
                body: JSON.stringify({ title, author })
            });

        } else {
            let id = submitButton.value;
            await fetch(('http://localhost:3030/jsonstore/collections/books/' + id), {
                method: "PUT",
                body: JSON.stringify({ title, author })
            });
        }

        inputFormTitle.textContent = 'FORM';
        submitButton.textContent = 'Submit';
        submitButton.value = '';
        inputAuthorField.value = '';
        inputTitleField.value = '';
        await loadAllBooks();
    }
}

attachEvents();