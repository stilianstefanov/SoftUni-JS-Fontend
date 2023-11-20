function solve(input) {
    let persons = [];

    for (const personName of input) {
        persons.push({
            name: personName, 
            number: personName.length});
    }
    persons.forEach(p => console.log(`Name: ${p.name} -- Personal Number: ${p.number}`));
}
