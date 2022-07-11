import GroundAnimal from "../specimen/GroundAnimal.js";

class Panda extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this._race = 'singe'
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    gratter() {
        return "les " + this._race + " se grattent"
    }

    escalader() {
        return "les " + this._race + " escaladent"
    }

    run() {
        return super.run(this._race);
    }

    randomAction() {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0 :
                return this.gratter()
            case 1 :
                return this.escalader()
            case 2 :
                return this.run()
        }
    }
}

export default Panda
