function solve(input) {
    let armies = {};
    for (const commandInfo of input) {
        if (commandInfo.includes('arrives')) {
            const leaderName = commandInfo.split(' arrives')[0];
            armies[leaderName] = {};
        }
        else if (commandInfo.includes(': ')) {
            let [leaderName, armyInfo] = commandInfo.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');

            if (armies.hasOwnProperty(leaderName)) armies[leaderName][armyName] = Number(armyCount);
        }
        else if (commandInfo.includes('+')) {
            let [armyName, countToAdd] = commandInfo.split(' + ');

            for (const leader in armies) {
                if (armyName in armies[leader]) armies[leader][armyName] += Number(countToAdd);
            }
        }
        else {
            const leaderName = commandInfo.split(' defeated')[0];
            if (leaderName in armies) delete armies[leaderName];
        }
    }
    for (const [leader, armiesObj] of Object.entries(armies).sort((a, b) => sum(Object.values(b[1])) - sum(Object.values(a[1])))) {
        console.log(`${leader}: ${sum(Object.values(armiesObj))}`);

        for (const [armyName, armyCount] of Object.entries(armiesObj).sort((a, b) => b[1] - a[1])) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }

    function sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    }
}