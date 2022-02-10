import Animal from "./Animal.js";

class GroundAnimal extends Animal{
    constructor(surnom, age , taille) {
        super(surnom, age, taille)
    }
    run(data){
        return "Les " + data + " cours"
    }
}
export default GroundAnimal
