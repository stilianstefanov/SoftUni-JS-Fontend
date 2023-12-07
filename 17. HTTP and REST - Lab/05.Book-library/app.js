function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books/';
    let loadBooksButton = document.getElementById('loadBooks');
    let tableBody = document.getElementsByTagName('tbody')[0];

    let submitNewButton = document.querySelector('#form button');
    let inputTitleField = document.querySelector('#form input');
    let inputAuthorField = document.querySelectorAll('#form input')[1];
    let inputFormTitle = document.querySelector('#form h3');

    loadBooksButton.addEventListener('click', loadAllBooks);
    submitNewButton.addEventListener('click', createOrEditBook);

    function loadAllBooks() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(books => {
                tableBody.innerHTML = '';
                Object.entries(books).forEach(entry => {
                    const bookId = entry[0];
                    const bookInfo = entry[1];
                    let newRow = document.createElement('tr');

                    let newTitleColumn = document.createElement('td');
                    newTitleColumn.textContent = bookInfo.title;
                    newRow.appendChild(newTitleColumn);

                    let newAuthorColumn = document.createElement('td');
                    newAuthorColumn.textContent = bookInfo.author;
                    newRow.appendChild(newAuthorColumn);

                    let newActionsColumn = document.createElement('td');
                    newRow.appendChild(newActionsColumn);

                    let newEditButton = document.createElement('button');
                    newEditButton.textContent = 'Edit';
                    newEditButton.value = bookId;
                    newActionsColumn.appendChild(newEditButton);

                    let newDeleteButton = document.createElement('button');
                    newDeleteButton.textContent = 'Delete';
                    newDeleteButton.value = bookId;
                    newActionsColumn.appendChild(newDeleteButton);

                    tableBody.appendChild(newRow);

                    newEditButton.addEventListener('click', (e) => {
                        inputFormTitle.textContent = 'Edit FORM';
                        submitNewButton.textContent = 'Save';
                        submitNewButton.value = e.currentTarget.value;
                        inputTitleField.value = newTitleColumn.textContent;
                        inputAuthorField.value = newAuthorColumn.textContent;
                    });
                    newDeleteButton.addEventListener('click', deleteBook);
                });
            });
    }

    async function deleteBook(e) {
        let deleteURL = baseUrl + e.currentTarget.value;
        await fetch(deleteURL, {
            method: 'DELETE'
        });

        loadAllBooks();
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
            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify({ title, author })
            });

        } else {
            let id = submitButton.value;
            await fetch((baseUrl + id), {
                method: "PUT",
                body: JSON.stringify({ title, author }),
            });
        }

        inputFormTitle.textContent = 'FORM';
        submitButton.textContent = 'Submit';
        submitButton.value = '';
        inputAuthorField.value = '';
        inputTitleField.value = '';

        loadAllBooks();
    }
}

attachEvents();