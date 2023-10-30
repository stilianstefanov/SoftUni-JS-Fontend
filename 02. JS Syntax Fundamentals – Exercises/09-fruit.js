function solve(fruitType, weightGrams, priceKg) {
    let weightKg = weightGrams / 1000;
    let totalPrice = weightKg * priceKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`)
}