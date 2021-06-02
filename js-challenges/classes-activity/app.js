class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    getPlayer() {
        console.log(this.name + " was born in the " + this.country)
        console.log(`${this.name} was born in the ${this.country}`)
    }
}

class BasketballPlayer extends Player {
    constructor(name, country, age) {
    super(name, country);
    this.age = age;
    }

    showTalent() {
    console.log(this.name + " is " + this.age + " years old and knows how to play Basketball.")
    console.log(`${this.name} is ${this.age} years old and knows how to play Basketball.`)
    }
}

let player1 = new Player("Oliver", "Philippines", "28");
let player1a = new BasketballPlayer("Oliver", "Philippines", "28");

player1.getPlayer();
player1a.showTalent();


