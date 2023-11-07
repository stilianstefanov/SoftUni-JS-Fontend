function solve(word, text) {
    const textsplitted = text.toLowerCase().split(' ');

    textsplitted.includes(word.toLowerCase()) ? console.log(word) : console.log(`${word} not found!`);
}