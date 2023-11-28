function generateReport() {
    const headerElemets = document.querySelectorAll('thead tr th input');

    let outputObjects = [];

    const tableRowElements = Array.from(document.getElementsByTagName('tbody')[0].children);

    for (const rowElement of tableRowElements) {
        let newObject = {};
        const cells = rowElement.children;

        for (let index = 0; index < headerElemets.length; index++) {           
            if (headerElemets[index].checked) {
                const columnName = headerElemets[index].getAttribute('name');
                newObject[columnName] = cells[index].textContent;
            }
            
        }
        outputObjects.push(newObject);
    }

    document.getElementById('output').value = JSON.stringify(outputObjects);
}