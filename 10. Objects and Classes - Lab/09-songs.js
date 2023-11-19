function solve(input) {
    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    input.shift();
    const typeList = input.pop();
    let songsCollection = [];

    for (const songInfo of input) {
        const [type, name, time] = songInfo.split('_');
        songsCollection.push(new Song(type, name, time));
    }

    if (typeList === 'all') {
        songsCollection.forEach(s => console.log(s.name));
    }
    else {
        songsCollection.filter(s => s.type === typeList).forEach(s => console.log(s.name));
    }
}