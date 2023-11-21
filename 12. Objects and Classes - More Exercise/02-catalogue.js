function solve(input) {
    let catalogue = {};

    for (const productInfo of input.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))) {
        const initialLetter = productInfo[0];
        const [name, price] = productInfo.split(' : ');

        if (!catalogue.hasOwnProperty(initialLetter)) {
            catalogue[initialLetter] = [];
        }
        catalogue[initialLetter].push({
            name,
            price: Number(price)
        });
    }

    for (const key in catalogue) {
        console.log(key);
        catalogue[key].forEach(p => {
            console.log(`  ${p.name}: ${p.price}`);
        })
    }
}