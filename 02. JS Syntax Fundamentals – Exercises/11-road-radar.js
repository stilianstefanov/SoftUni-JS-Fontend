function solve(speed, area) {
    let speedlimit = 0;

    switch (area) {
        case 'motorway': speedlimit = 130; break;
        case 'interstate': speedlimit = 90; break;
        case 'city': speedlimit = 50; break;
        default: speedlimit = 20; break;
    }

    if (speed <= speedlimit) {
        console.log(`Driving ${speed} km/h in a ${speedlimit} zone`);
    }
    else {
        let speeddiff = speed - speedlimit;
        let status = '';

        if (speeddiff <= 20) {
            status = 'speeding';
        }
        else if (speeddiff <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speeddiff} km/h faster than the allowed speed of ${speedlimit} - ${status}`);
    }
}
