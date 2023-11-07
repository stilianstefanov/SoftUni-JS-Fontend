function solve(words, text) {
    const wordssplitted = words.split(', ');
    const matches = text.match(/\*+/g);
    
    for (let i = 0; i < matches.length; i++) {
        let currentWord = wordssplitted.find(w => w.length === matches[i].length);

        if (currentWord) {
            text = text.replace(matches[i], currentWord);
        }
    }

    console.log(text);
}