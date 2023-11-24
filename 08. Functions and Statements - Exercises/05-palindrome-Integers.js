function palindromeCheck(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i].toString();
        let firstHalf = [];
        let secondHalfReversed = [];

        if (currentNum.length % 2 === 0) {
            firstHalf = currentNum.split('').slice(0, currentNum.length / 2);
            secondHalfReversed = currentNum.split('').slice(currentNum.length / 2).reverse();
        } else {
            firstHalf = currentNum.split('').slice(0, Math.floor(currentNum.length / 2));
            secondHalfReversed = currentNum.split('').slice(Math.ceil(currentNum.length / 2)).reverse();
        }
        
        let isPalindrome = firstHalf.every((value, index) => value === secondHalfReversed[index]);
        isPalindrome ? console.log('true') : console.log('false');
    }
}

palindromeCheck([32,2,232,1010]);