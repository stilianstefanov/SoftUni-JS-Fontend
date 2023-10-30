function solve(input) {
    if (input < 0) {
        console.log('out of bounds');
    }
    else if (input <= 2) {
        console.log('baby');
    }
    else if (input <= 13) {
        console.log('child');
    }
    else if (input <= 19) {
        console.log('teenager');
    }
    else if (input <= 65) {
        console.log('adult');
    }
    else {
        console.log('elder');
    }
}