function solve(num) {
    if (num === 100) {
        console.log('100% Complete!');
        return;
    }

    let bar = [];
    for (let i = 0; i < 10; i++) {
        if (i < num / 10) {
            bar.push('%');
        } else {
            bar.push('.');
        }
    }

    console.log(`${num}% [${bar.join('')}]`);
    console.log('Still loading...');
}