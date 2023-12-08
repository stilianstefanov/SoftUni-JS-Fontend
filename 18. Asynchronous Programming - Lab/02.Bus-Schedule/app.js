function solve() {
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStopId = 'depot';
    let nextStopName = '';
    let stopNameOutput = document.querySelector('#info span');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    function depart() {
        fetch(baseURL + nextStopId)
            .then(res => res.json())
            .then(stop => {
                nextStopName = stop.name;
                nextStopId = stop.next;
                stopNameOutput.textContent = `Next stop ${nextStopName}`;     

                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(res => {
                departButton.disabled = true;
                arriveButton.disabled = true;
                stopNameOutput.textContent = 'Error';
            });
    }

    async function arrive() {
        stopNameOutput.textContent = `Arriving at ${nextStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();