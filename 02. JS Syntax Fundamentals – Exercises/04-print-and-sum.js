function solve(num1, num2) {

    let output = `${num1}`;
    let sum = num1;

    for (i = num1 + 1; i <= num2; i++) {
        output += ` ${i}`;
        sum += i;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}