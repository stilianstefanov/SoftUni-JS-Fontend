function getInfo() {
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopIdInput = document.getElementById('stopId');
    let stopNameOutput = document.getElementById('stopName');
    let busesUlOutput = document.getElementById('buses');
    const stopId = stopIdInput.value;
    stopIdInput.value = '';
    stopNameOutput.textContent = '';
    busesUlOutput.innerHTML = '';

    fetch(baseURL + stopId)
        .then(res => res.json())
        .then(stop => {
            stopNameOutput.textContent = stop.name;

            for (const [busNo, time] of Object.entries(stop.buses)) {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${busNo} arrives in ${time} minutes`;

                busesUlOutput.appendChild(newLi);
            }
        })
        .catch((err) => {
            stopNameOutput.textContent = 'Error';
        });
}