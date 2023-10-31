function solve(yieldperday) {
    let daysmined = 0;
    let totalspice = 0;

    while (yieldperday >= 100) {
        daysmined++;
        totalspice += yieldperday;

        totalspice -= 26;
        if (totalspice < 0) {
            totalspice = 0;
        }

        yieldperday -= 10;

        if (yieldperday < 100) {
            totalspice -= 26;
            if (totalspice < 0) {
                totalspice = 0;
            }
        }
    }
    console.log(daysmined);
    console.log(totalspice);
}