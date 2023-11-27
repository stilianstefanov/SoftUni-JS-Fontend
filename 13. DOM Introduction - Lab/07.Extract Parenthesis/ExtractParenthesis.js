function extract(content) {
    const textElement = document.getElementById(content).textContent;
    const pattern = /\(([^)]*)\)/g;

    console.log(textElement.match(pattern).join('; '));

    return textElement.match(pattern).join('; ');
}