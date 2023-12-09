function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook/';
    let loadButton = document.getElementById('btnLoad');
    let createButton = document.getElementById('btnCreate');
    let phonebookUl = document.getElementById('phonebook');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    loadButton.addEventListener('click', loadContacts);
    createButton.addEventListener('click', createContact);

    async function loadContacts() {
        phonebookUl.innerHTML = '';
        let response = await fetch(baseURL);
        let contacts = await response.json();

        for (const contact of Object.values(contacts)) {
            let li = document.createElement('li');
            li.textContent = `${contact.person}: ${contact.phone}`;
            phonebookUl.appendChild(li);

            let deleteButton = document.createElement('button');
            deleteButton.value = contact._id;
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (e) =>  deleteContact(e));
            li.appendChild(deleteButton);
        }
    }

    async function deleteContact(event) {
        let contactId = event.currentTarget.value;

        await fetch(baseURL + contactId, {
            method: 'DELETE'
        });

        await loadContacts();
    }

    async function createContact(){
        let newContact = {
            person: personInput.value,
            phone: phoneInput.value
        };

        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(newContact)
        });

        personInput.value = '';
        phoneInput.value = '';
        await loadContacts();
    }
}

attachEvents();