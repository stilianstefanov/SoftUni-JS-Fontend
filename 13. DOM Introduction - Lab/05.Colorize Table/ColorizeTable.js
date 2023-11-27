function colorize() {
    const rows = document.querySelectorAll('tr');
    console.log(rows)

    for (let index = 1; index < rows.length; index++) {
        if(index % 2 !== 0) {           
            const currRow = rows[index];
            currRow.style.background = 'teal';
        }
    }
}