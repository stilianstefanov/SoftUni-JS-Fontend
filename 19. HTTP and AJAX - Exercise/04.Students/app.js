function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/collections/students/';
    let tableBody = document.querySelector('tbody');
    let submitButtton = document.getElementById('submit');
    let inputFields = Array.from(document.getElementsByTagName('input'));

    loadStudents();
    submitButtton.addEventListener('click', addStudent);

    async function addStudent() {
        if (inputFields.some(i => !i.value)) return;

        let newStudent = {
          firstName: inputFields[0].value,
          lastName: inputFields[1].value,
          facultyNumber: inputFields[2].value,
          grade: inputFields[3].value
        };

        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(newStudent)
        });

        await loadStudents();
    }

    async function loadStudents() {
        tableBody.innerHTML = '';
        let response = await fetch(baseURL);
        let students = await response.json();

        for (const student of Object.values(students)) {
            let newRow = document.createElement('tr');

            let firstNameCol = document.createElement('td');
            firstNameCol.textContent = student.firstName;
            newRow.appendChild(firstNameCol);
           
            let lastNameCol = document.createElement('td');
            lastNameCol.textContent = student.lastName;
            newRow.appendChild(lastNameCol);

            let facNoCol = document.createElement('td');
            facNoCol.textContent = student.facultyNumber;
            newRow.appendChild(facNoCol);

            let gradeCol = document.createElement('td');
            gradeCol.textContent = student.grade;
            newRow.appendChild(gradeCol);

            tableBody.appendChild(newRow);
        }
    }
}

attachEvents();