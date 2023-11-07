function solve(names) {
    names.sort((a, b) => a.localeCompare(b));
    let counter = 1;

    names.forEach(n => {
        console.log(`${counter}.${n}`);
        counter++;
    });
}