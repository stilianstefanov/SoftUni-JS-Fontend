function solve(input) {
    let garage = {};

    for (const carInfo of input) {
        let [garageNo, carDetails] = carInfo.split(' - ');       
        if(!garage.hasOwnProperty(garageNo)) garage[garageNo] = [];
        garage[garageNo].push({});

        for (const detailInfo of carDetails.split(', ')) {
            let [detailName, detailSpec] = detailInfo.split(': ');
            let carObj = garage[garageNo][garage[garageNo].length - 1];
            carObj[detailName] = detailSpec;
        }
    }

    for (const garageNo in garage) {
        console.log(`Garage № ${garageNo}`);
        for (const car of garage[garageNo]) {
            console.log(`--- ${Object.entries(car).map(d => `${d[0]} - ${d[1]}`).join(', ')}`);
        }
    }
}