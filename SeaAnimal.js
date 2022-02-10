import Animal from "./Animal.js";

class SeaAnimal extends Animal{
    constructor(surnom, age , taille) {
        super(surnom, age, taille)
    }
    nage(data){
        return "Les " + data + " nagent"
    }
}
export default SeaAnimal
