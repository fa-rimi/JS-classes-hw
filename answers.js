// CREATING CLASSES
class Cat {
  constructor(name, coat, kitten) {
    this.name = name;
    this.coat = coat;
    this.kitten = kitten;
  }
  age() {
    if (this.kitten === true) {
      console.log("and i'm just a baby");
    } else {
      console.log("and I am NOT a baby");
    }
  }
  call() {
    console.log(`My name is ${this.name}`);
  }
  pattern() {
    console.log(`I am a ${this.coat}`);
  }
}

const nala = new Cat("Nala", "Tortoiseshell", true);
const mini = new Cat("Mini", "Tuxedo", false);

console.log(nala);
nala.call();
nala.pattern();
nala.age();

console.log(mini);
mini.call();
mini.pattern();
mini.age();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CONSTRUCTORS
class pirates {
  constructor(name, goal, food, ship) {
    this.name = name;
    this.goal = goal;
    this.food = food;
    this.ship = ship;
  }
  iAm() {
    if (this.goal === true) {
      console.log("I\'m finding the one piece!");
    } else {
      console.log("I\'m just cruising...");
    }
  }
  call() {
    console.log(`My name is ${this.name}`);
  }
  hungry() {
    console.log(`I like ${this.food}`);
  }
  boatName() {
    console.log(`My ship name is ${this.ship}`);
  }
}

const pirate1 = new pirates(
  "Luffy",
  true,
  "Meat Meat and More Meat",
  "The Thousand Sunny"
);
const pirate2 = new pirates("Nami", true, "Tangerines", "LuNa");
const pirate3 = new pirates("Karoo", false, "Cold Water", "The Thousand Sunny");
const strawHats = [pirate1, pirate2, pirate3];

const pirate4 = new pirates("Jack Sparrow", false, "Rum", "The Black Pearl");
const pirate5 = new pirates("Jack", true, "Everything", "The Black Pearl");
const pirate6 = new pirates("Swann", false, "Food", "The Black Pearl");
const blackPearl = [pirate4, pirate5, pirate6];

// Nested loop version
for (const pirates of strawHats) {
    console.log(pirates);

    for (const [key, value] of Object.entries(pirates)) {
        console.log(key, value);  
    }
}
