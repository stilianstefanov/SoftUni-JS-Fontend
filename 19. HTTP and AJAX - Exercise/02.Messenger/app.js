function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger/';
    let refreshButton = document.getElementById('refresh');
    let submitButton = document.getElementById('submit');
    let outputArea = document.getElementById('messages');
    let inputAuthor = document.querySelector('input[name="author"]');
    let inputMessage = document.querySelector('input[name="content"]');

    submitButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', getMessages);

    async function getMessages() {
        outputArea.value = '';
        let messagesOutput = [];
        let response = await fetch(baseURL);
        let messages = await response.json();

        for (const message of Object.values(messages)) {
           messagesOutput.push(`${message.author}: ${message.content}`);
        }
        outputArea.value = messagesOutput.join('\n');
    }

    async function sendMessage(){
        let newMessage = {
            author: inputAuthor.value,
            content: inputMessage.value
        };

        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(newMessage)
        });

        inputAuthor.value = '';
        inputMessage.value = '';
    }
}

attachEvents();