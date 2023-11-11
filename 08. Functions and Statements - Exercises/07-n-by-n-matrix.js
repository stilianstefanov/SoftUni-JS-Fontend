function printMatrix(num) {
    const row = `${num} `.repeat(num);

    for (let i = 0; i < num; i++) {
        console.log(row);
    }
}