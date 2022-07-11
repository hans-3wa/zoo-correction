import Animal from "./Animal.js";

class GroundAnimal extends Animal {
    constructor(surnom, age , taille) {
        super(surnom, age, taille)
    }
    
    run(race){
        return "Les " + race + " courrent"
    }
}

export default GroundAnimal
