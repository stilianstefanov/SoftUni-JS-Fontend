function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];
    let inputTextArea = document.getElementsByTagName('textarea')[0];
    let outputTextArea = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', encodeText);
    decodeButton.addEventListener('click', decodeText);

    function encodeText() {       
        let encodedText = '';

        for (let index = 0; index < inputTextArea.value.length; index++) {
            let currentCharCode = inputTextArea.value[index].charCodeAt(0);
            currentCharCode += 1;
            let encodedSymbol = String.fromCharCode(currentCharCode);

            encodedText += encodedSymbol;
        }
        
        inputTextArea.value = '';
        outputTextArea.value = encodedText;
    }

    function decodeText() {
        let decodedText = '';

        for (let index = 0; index < outputTextArea.value.length; index++) {
            let currentCharCode = outputTextArea.value[index].charCodeAt(0);
            currentCharCode -= 1;
            let decodedSymbol = String.fromCharCode(currentCharCode);

            decodedText += decodedSymbol;
        }

        outputTextArea.value = decodedText;
    }
}