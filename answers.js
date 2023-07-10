class Cat{
    constructor(name, coat, kitten) {
        this.name = name;
        this.coat = coat;
        this.kitten = kitten;
    }
    age(){
        if (this.kitten === true) {
            console.log('and i\'m just a baby');
        } else {
            console.log('and I am NOT a baby');
        }
    }
    call(){
        console.log(`My name is ${this.name}`);
    }
    pattern(){
        console.log(`I am a ${this.coat}`);
    }
}

const nala = new Cat('Nala', 'Tortoiseshell', true);
const mini = new Cat( 'Mini', 'Tuxedo', false);

console.log(nala);
nala.call();
nala.pattern();
nala.age();

console.log(mini);
mini.call();
mini.pattern();
mini.age();