function solve(array, step) {
    let resultarr = [];

    for (let i = 0; i < array.length; i += step) {
        resultarr.push(array[i]);
    }

    return resultarr;
}