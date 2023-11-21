function solve(input) {
    let cars = {};
    for (carInfo of input) {
        const [command, carNo] = carInfo.split(', ');

        if (command === 'IN') cars[carNo] = undefined;
        else delete cars[carNo];
    }

    if (Object.keys(cars).length !== 0) console.log(Object.keys(cars).sort(( a, b ) => a.localeCompare(b)).join('\n'));
    else console.log('Parking Lot is Empty');
}

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])