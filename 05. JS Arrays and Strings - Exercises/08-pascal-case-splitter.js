function solve(text) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        let currentword = text[i];
        
        let index = i + 1;
        while (typeof(text[index]) === 'string' && text[index].toUpperCase() !== text[index]) {
            currentword += text[index];
            index++;
        }

        currentword += ' ';
        result += currentword;
        i = index - 1;
    }

    console.log(result.trim().split(' ').join(', '));    
}