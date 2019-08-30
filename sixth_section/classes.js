class Warrior {
    constructor(weapon) {
        this.weapon = weapon
    }

    report(name) {
        console.log(`Warrior ${name} uses ${this.weapon}.`)
    }
}

let aWarrior = new Warrior('axe')
let anotherWarrior = new Warrior('sword')
aWarrior.report('Höðr')
anotherWarrior.report('Jörmungandr')
// Class name can be omitted
let anonymousClassObject = new class {getWord() {return 'bloody objects!'}}
console.log(anonymousClassObject.getWord())