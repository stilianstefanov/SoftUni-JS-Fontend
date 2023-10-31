function solve(lostfightscount, helmetprice, swordprice, shieldprice, armorprice) {
    let helmetbrokentimes = 0;
    let swordbrokentimes = 0;
    let shieldbrokentimes = 0;
    let armorbrokentimes = 0;

    for (let i = 1; i <= lostfightscount; i++) {
        if (i % 2 === 0) {
            helmetbrokentimes++;
        }
        if (i % 3 === 0) {
            swordbrokentimes++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldbrokentimes++;
            if (shieldbrokentimes % 2 === 0) {
                armorbrokentimes++;
            }
        }
    }

    let totalexpenses = ((helmetbrokentimes * helmetprice) +
        (swordbrokentimes * swordprice) +
        (shieldbrokentimes * shieldprice) +
        (armorbrokentimes * armorprice)).toFixed(2);
    console.log(`Gladiator expenses: ${totalexpenses} aureus`);
}