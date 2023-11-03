function solve(text, word) {
    let words = text.split(" ");
    let occurences = 0;

    words.forEach(w => {
        if (w === word) {
            occurences++;
        }
    });
    
    console.log(occurences);
}