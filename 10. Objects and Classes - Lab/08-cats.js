function solve(info) {
    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    };

    for (catInfo of info) {
        const [name, age] = catInfo.split(' ');
        const catObject = new Cat(name, age);
        catObject.meow();
    }   
}