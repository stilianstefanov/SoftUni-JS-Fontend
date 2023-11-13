function solve(num) {
    let digitsArr = num.toString().split('').map(digit => parseInt(digit, 10));
    while (calculateAverage(digitsArr) < 5) {
        digitsArr.push(9);
    }
    console.log(digitsArr.join(''));


    function calculateAverage(numbers) {
        if (numbers.length === 0) {
            return 0;
        }
    
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }
}
solve(101);