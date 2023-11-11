function passwordValidator(password) {
    if (checkLength(password) && checkLettersAndDigitsOnly(password) && checkAtLeast2Digits(password))
        console.log('Password is valid');

    if (!checkLength(password)) console.log('Password must be between 6 and 10 characters');

    if (!checkLettersAndDigitsOnly(password)) console.log('Password must consist only of letters and digits');

    if (!checkAtLeast2Digits(password)) console.log('Password must have at least 2 digits');

    function checkLength(password) {
        return password.length >= 6 && password.length <= 10
    }
    function checkLettersAndDigitsOnly(password) {
        return /^[a-zA-Z0-9]+$/g.test(password);
    }
    function checkAtLeast2Digits(password) {
        return /(\d.*\d)/g.test(password);
    }
}

passwordValidator('Pa$s$s');