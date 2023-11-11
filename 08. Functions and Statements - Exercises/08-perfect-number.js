function isPerfectNumber(num) {
    let divisors = [];

    if (num < 0) {
        console.log('It\'s not so perfect.');
        return;
    }

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) divisors.push(i);
    }

    let divisorsSum = divisors.reduce((a, c) => a + c, 0);
    num === divisorsSum ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}