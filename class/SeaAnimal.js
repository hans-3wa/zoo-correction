import Animal from "./Animal.js";

class SeaAnimal extends Animal{
    constructor(surnom, age , taille, race) {
        super(surnom, age, taille, race)
    }

    swimming(data){
        return `Les ${super.race} nagent`
    }

    randSea(actions) {
        return super.rand(actions.concat([this.swimming()]))
    }
}
export default SeaAnimal
