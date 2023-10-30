function solve(input) {
    let sum = 0;
    let areSame = true;

    let str = input.toString();

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);

        if (i > 0 && str[i] !== str[i - 1]) {
            areSame = false;
        }
    }

    console.log(areSame);
    console.log(sum);
}