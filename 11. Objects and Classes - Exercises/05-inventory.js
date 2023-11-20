function solve(input) {
    let heroes = [];

    for (const heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');
        heroes.push({
            name,
            level: Number(level),
            items: items.split(', ')
        });
    }

    for (const hero of heroes.sort((a, b) => a.level - b.level)) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}