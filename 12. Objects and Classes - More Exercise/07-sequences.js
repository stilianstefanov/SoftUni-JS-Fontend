function solve(input) {
    let outputArrays = [];
    for (const arrJSON of input) {
        const currentArr = JSON.parse(arrJSON);
        if (!checkDuplicate(outputArrays, currentArr)) outputArrays.push(currentArr);
    }

    for (let arr of outputArrays.sort((a, b) => a.length - b.length)) {
        console.log(`[${arr.sort((a, b) => b - a).join(', ')}]`);
    }

    function checkDuplicate(mainArrays, arr) {
        for (const currentArr of mainArrays) {
            if (JSON.stringify(currentArr.sort((a, b) => b - a)) === JSON.stringify(arr.sort((a, b) => b - a))) {
                return true;                
            }
        }
        return false;
    }
}