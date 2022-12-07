import SeaAnimal from "./SeaAnimal.js";

const race = 'Dauphins'
class Dauphin extends SeaAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille, race);
    }


    whistle() {
        return `les ${race} sifflent`
    }

    playing() {
        return `les ${race} jouent`
    }


    randomAction() {
        return super.randSea([this.playing(), this.whistle()])
    }
    
    getIdentity(){
        return super.getIdentity(race);
    }
}

export default Dauphin
