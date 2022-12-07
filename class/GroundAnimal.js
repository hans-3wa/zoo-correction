import Animal from "./Animal.js";

class GroundAnimal extends Animal {
    constructor(surnom, age, taille, race) {
        super(surnom, age, taille, race)
    }


    run() {
        return `Les ${super.race} courrent`
    }

    randGround(actions) {
        return super.rand(actions.concat([this.run()]))
    }
}

export default GroundAnimal
