function solve(input) {
    let moviesStore = [];

    for (const command of input) {
        if (command.includes('addMovie')) {
            moviesStore.push({ name: command.slice(9) });
            
        } else if (command.includes('directedBy')) {
            const movieName = command.slice(0, command.indexOf('directedBy') - 1);
            const movieDirector = command.slice(command.indexOf('directedBy') + 11);

            for (const movie of moviesStore) {
                if (movie.name === movieName) {
                    movie['director'] = movieDirector;
                }
            }

        } else {
            const movieName = command.slice(0, command.indexOf('onDate') - 1);
            const movieDate = command.slice(command.indexOf('onDate') + 7);

            for (const movie of moviesStore) {
                if (movie.name === movieName) {
                    movie['date'] = movieDate;
                }
            }
        }
    }

    for (const movie of moviesStore) {
        if (movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }
}