class Warrior {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }

    toString() {
        return `${this.name} carries ${this.weapon}`
    }
}

let berserker = new Warrior('Asger', 'axe')
console.log(berserker.toString())

class RangedWarrior extends Warrior {
    constructor(name, weapon, ammo) {
        super(name, weapon)
        this.ammo = ammo
    }

    toString() {
        return super.toString() + ` with ${this.ammo} ammo`
    }

    shoot() {
        let hitChance = Math.random()
        if (hitChance < 0.5) {
            console.log('Alas! You missed the target.')
        } else {
            console.log('You hit the target. Well done!')
        }
        this.ammo--
    }
}

let archer = new RangedWarrior('Baldr', 'arrow', 17)
console.log(archer.toString())
archer.shoot()
console.log(archer.toString())
// Instance of operator is useful when we want to detect if a class is a subclass of onether one
// Almost every object is instance of Object class
console.log(archer instanceof RangedWarrior)
console.log(archer instanceof Warrior)
console.log(berserker instanceof RangedWarrior)
console.log(berserker instanceof Warrior)
console.log(berserker instanceof Object)