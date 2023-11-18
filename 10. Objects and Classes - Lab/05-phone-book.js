function solve(peopleInfo) {
    let result = {};
    for (const info of peopleInfo) {
        let [name, phoneNumber] = info.split(" ");
        result[name] = phoneNumber;
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}