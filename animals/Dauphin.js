import SeaAnimal from "../specimen/SeaAnimal.js";

class Dauphin extends SeaAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this._race = 'dauphin'
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    siffle() {
        return "les " + this._race + " sifflent"
    }

    joue() {
        return "les " + this._race + " jouent"
    }


    randomAction() {
        let random = Math.floor(Math.random() * 3)
        console.log(random);
        switch (random) {
            case 0 :
                return this.siffle()
            case 1 :
                return this.joue()
            case 2 :
                return super.nage(this._race);
        }
    }
    
    getIdentity(){
        return super.getIdentity(this._race);
    }
}

export default Dauphin
