function attachEvents() {
    const locationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayForecastURL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const upcomingForecastURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    let inputNameElement = document.getElementById('location');
    let submitButton = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast');
    let currentDivElement = document.getElementById('current');
    let upComingDivElement = document.getElementById('upcoming');

    submitButton.addEventListener('click', getForecast);

    function getForecast() {
        const locationName = inputNameElement.value;
        forecastDiv.style.display = 'block';
        let locationCode = '';

        fetch(locationsURL)
            .then(res => res.json())
            .then(locations => {
                for (const location of locations) {
                    if (location.name === locationName) {
                        locationCode = location.code;
                    }
                }

                if (!locationCode) {
                    forecastDiv.textContent = 'Error';
                    return;
                }

                getCurrentConditions(locationCode);
                getUpcomingConditions(locationCode);
            })
            .catch(res => {
                forecastDiv.textContent = 'Error';
            });
    }

    function getUpcomingConditions(code) {
        fetch(upcomingForecastURL + code)
            .then(res => res.json())
            .then(upcomingForecast => {
                let newForecastInfoDiv = document.createElement('div');
                newForecastInfoDiv.classList.add('forecast-info');
                upComingDivElement.appendChild(newForecastInfoDiv);

                appendSpanElements(newForecastInfoDiv, upcomingForecast.forecast);
            })
            .catch(res => {
                forecastDiv.textContent = 'Error';
            });
    }

    function getCurrentConditions(code) {
        fetch(todayForecastURL + code)
            .then(res => res.json())
            .then(forecastInfo => {
                let newForecastsDiv = document.createElement('div');
                newForecastsDiv.classList.add('forecasts');
                currentDivElement.appendChild(newForecastsDiv);

                let newSymbolSpan = document.createElement('span');
                newSymbolSpan.classList.add('symbol');
                newSymbolSpan.innerHTML = getConditionSymbol(forecastInfo.forecast.condition);
                newForecastsDiv.appendChild(newSymbolSpan);

                let newConditionSpan = document.createElement('span');
                newConditionSpan.classList.add('condition');
                newForecastsDiv.appendChild(newConditionSpan);

                let newLocationNameSpan = document.createElement('span');
                newLocationNameSpan.classList.add('forecast-data');
                newLocationNameSpan.textContent = forecastInfo.name;
                newConditionSpan.appendChild(newLocationNameSpan);

                let newLocationTempSpan = document.createElement('span');
                newLocationTempSpan.classList.add('forecast-data');
                newLocationTempSpan.innerHTML = `${forecastInfo.forecast.low}&#176/${forecastInfo.forecast.high}&#176`;
                newConditionSpan.appendChild(newLocationTempSpan);

                let newConditionWeatherSpan = document.createElement('span');
                newConditionWeatherSpan.classList.add('forecast-data');
                newConditionWeatherSpan.textContent = `${forecastInfo.forecast.condition}`;
                newConditionSpan.appendChild(newConditionWeatherSpan);
            })
            .catch(res => {
                forecastDiv.textContent = 'Error';
            });
    }

    function appendSpanElements(divElement, daysInfo) {
        for (const day of daysInfo) {
            let newUpcomingSpan = document.createElement('span');
            newUpcomingSpan.classList.add('upcoming');
            divElement.appendChild(newUpcomingSpan);

            let newSymbolSpan = document.createElement('span');
            newSymbolSpan.classList.add('symbol');
            newSymbolSpan.innerHTML = getConditionSymbol(day.condition);
            newUpcomingSpan.appendChild(newSymbolSpan);

            let newDegreesSpan = document.createElement('span');
            newDegreesSpan.classList.add('forecast-data');
            newDegreesSpan.innerHTML = `${day.low}&#176/${day.high}&#176`;
            newUpcomingSpan.appendChild(newDegreesSpan);

            let newConditionWeatherSpan = document.createElement('span');
            newConditionWeatherSpan.classList.add('forecast-data');
            newConditionWeatherSpan.textContent = day.condition;
            newUpcomingSpan.appendChild(newConditionWeatherSpan);
        }
    }

    function getConditionSymbol(condition) {
        switch (condition) {
            case 'Sunny': return '&#x2600';
            case 'Partly sunny': return '&#x26C5';
            case 'Overcast': return '&#x2601';
            case 'Rain': return '&#x2614';
            default: break;
        }
    }
}

attachEvents();