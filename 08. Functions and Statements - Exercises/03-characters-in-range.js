function solve(...args) {
    const printCharsBetween = (char1, char2) => {
        let result = '';
        for (let i = char1.charCodeAt(0) + 1; i < char2.charCodeAt(0); i++) {
            result += `${String.fromCharCode(i)} `;
        }
        console.log(result);
    }
    args[0].charCodeAt(0) < args[1].charCodeAt(0) ? printCharsBetween(args[0], args[1]) : printCharsBetween(args[1], args[0]);
}