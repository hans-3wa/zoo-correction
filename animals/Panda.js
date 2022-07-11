import GroundAnimal from "../specimen/GroundAnimal.js";

class Panda extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this._race = 'panda'
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    grimper() {
        return "les " + this._race + " grimpent"
    }

    rouler() {
        return "les " + this._race + " roulent"
    }


    randomAction() {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0 :
                return this.grimper()
            case 1 :
                return this.rouler()
            case 2 :
                return super.run(this._race);
        }
    }
    
    getIdentity(){
        return super.getIdentity(this._race);
    }
}

export default Panda
