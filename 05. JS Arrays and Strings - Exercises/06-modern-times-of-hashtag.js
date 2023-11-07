function solve(text) {
    let matches = text.match(/#\b[a-zA-Z]+\b/g);

    matches.forEach(m => {
        console.log(m.replace('#', ''));
    });
}