function solve(num) {
    const numAsString = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = parseInt(numAsString[i]);
        
        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        }
        else oddSum += currentDigit;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);