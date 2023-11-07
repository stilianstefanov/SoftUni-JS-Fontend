function solve(array) {
    let resultarr = [];
    let indicator = 1;
    
    while (array.length > 0) {
        if (indicator % 2 === 1) {
            array.sort((a, b) => a - b);
            resultarr.push(array.shift());
        }
        else {
            array.sort((a, b) => b - a);
            resultarr.push(array.shift());
        }
        indicator++;
    }

    return resultarr;
}