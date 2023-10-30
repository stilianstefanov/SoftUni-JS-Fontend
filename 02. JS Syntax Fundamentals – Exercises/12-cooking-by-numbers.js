function solve(startnumstr, oper1, oper2, oper3, oper4, oper5) {
    let operations = [oper1, oper2, oper3, oper4, oper5];
    let currentNum = parseInt(startnumstr);

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop':
                currentNum /= 2;
                break;
            case 'dice':
                currentNum = Math.sqrt(currentNum);
                break;
            case 'spice':
                currentNum += 1;
                break;
            case 'bake':
                currentNum *= 3;
                break;
            default:
                currentNum -= (currentNum * 0.20);
                break;
        }
        console.log(currentNum);
    }
}