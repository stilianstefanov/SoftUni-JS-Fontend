function solve(input) {
    const searchedWords = input.shift().split(' ');
    let words = {};

    for (const word of searchedWords) {
        words[word] = 0;
    }

    for (const targetWord of input) {
        if (words.hasOwnProperty(targetWord)) words[targetWord]++;
    }

    for (const [word, times] of Object.entries(words).sort((a, b) => b[1] - a[1])) {
        console.log(`${word} - ${times}`)
    }
}