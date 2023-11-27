function sumTable() {
    let elements = document.getElementsByTagName('tbody')[0].children;
    let sum = 0;

    for (let index = 1; index < elements.length - 1; index++) {
        let curPrice = Number(elements[index].children[1].textContent);
        sum += curPrice;
    }
    document.getElementById('sum').textContent = sum;
}