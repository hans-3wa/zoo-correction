import GroundAnimal from "./GroundAnimal.js";

class Panda extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this._race = 'panda'
        this.button = document.querySelector('.panda > button')
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

    run() {
        return super.run(this._race);
    }

    randomAction() {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0 :
                return this.grimper()
            case 1 :
                return this.rouler()
            case 2 :
                return this.run()
        }
    }
}

export default Panda
