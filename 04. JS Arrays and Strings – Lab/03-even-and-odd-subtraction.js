function solve(array) {
    let oddsum = 0;
    let evensum = 0;

    for (const number of array) {
        if (number % 2 == 0) {
            evensum += number;
        }
        else {
            oddsum += number;
        }
    }
    console.log(evensum - oddsum);
}

solve([1,2,3,4,5,6])