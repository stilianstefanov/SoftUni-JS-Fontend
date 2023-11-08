function solve(goldGrams) {
    let totalMoney = 0;
    let bitcoinsBought = 0;
    let dayFirstBitcoin = 0;
    const bitCoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    for (let i = 0; i < goldGrams.length; i++) {
        let currentGrams = goldGrams[i];
        if ((i + 1) % 3 === 0) {
            currentGrams -= currentGrams * 0.30;
        }

        totalMoney += currentGrams * goldPricePerGram;
        while (totalMoney - bitCoinPrice >= 0) {
            if (dayFirstBitcoin === 0) {
                dayFirstBitcoin = i + 1;
            }

            totalMoney -= bitCoinPrice;
            bitcoinsBought++;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);