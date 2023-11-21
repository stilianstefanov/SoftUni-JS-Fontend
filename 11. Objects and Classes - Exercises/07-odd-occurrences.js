function solve(input) {
    let words = {};
    for (const word of input.split(' ')) {
        if (!words.hasOwnProperty(word.toLowerCase())) words[word.toLowerCase()] = 1;
        else words[word.toLowerCase()]++;
    }

    let output = Object.entries(words).filter(w => w[1] % 2 !== 0).map(w => w[0]);
    console.log(output.join(' '));
}

solve('Cake IS SWEET is Soft CAKE sweet Food')