function solve(input) {
    let towns = [];

    for (const townInfo of input) {
        const [town, latitude, longitude] = townInfo.split(' | ');
        towns.push({town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)});
    }
    towns.forEach(t => console.log(t));
}