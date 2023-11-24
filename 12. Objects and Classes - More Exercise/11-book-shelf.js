function solve(inputArr) {
    let library = {};

    for (const command of inputArr) {
        if (command.includes('->')) {
            const [shelfId, genre] = command.split(' -> ');
            if(library.hasOwnProperty(shelfId)) continue;

            library[shelfId] = {
                genre: genre,
                books: []
            };
        } else {
            const [bookTitle, bookInfo] = command.split(': ');
            const [author, bookGenre] = bookInfo.split(', ');
            if (!Object.values(library).some(s => s.genre === bookGenre)) continue;

            let shelf = Object.values(library).find(s => s.genre === bookGenre);
            shelf.books.push({
                title: bookTitle,
                author: author
            });
        }
    }
    let sortedShelves = Object.entries(library).sort((a, b) => b[1].books.length - a[1].books.length);
    
    for (const shelf of sortedShelves) {
        console.log(`${shelf[0]} ${shelf[1].genre}: ${shelf[1].books.length}`);

        let sortedBooks = shelf[1].books.sort((a, b) => a.title.localeCompare(b.title));
        for (const book of sortedBooks) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}