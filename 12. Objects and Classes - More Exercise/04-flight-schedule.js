function solve(inputArr) {
    const flightsInfo = inputArr[0];
    const newStatuses = inputArr[1];
    const statusToCheck = inputArr[2];

    let flights = {};
    for (const curFlight of flightsInfo) {
        const [flightNo, destination] = curFlight.split(' ');
        flights[flightNo] = {
            destination,
            status: 'Ready to fly'
        };
    }
    for (const statusInfo of newStatuses) {
        const [flightNo, newStatus] = statusInfo.split(' ');
        if (flights.hasOwnProperty(flightNo)) flights[flightNo].status = newStatus;
    }

    if (statusToCheck == 'Ready to fly') {
        for (const key in flights) {
            if (flights[key].status === 'Ready to fly')
                console.log(`{ Destination: '${flights[key].destination}', Status: '${flights[key].status}' }`);
        }
    } else {      
        for (const key in flights) {
            if (flights[key].status !== 'Ready to fly')
                console.log(`{ Destination: '${flights[key].destination}', Status: '${flights[key].status}' }`);
        }
    }
}