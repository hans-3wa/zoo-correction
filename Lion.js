import GroundAnimal from "./GroundAnimal.js";

class Lion extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this._race = 'lion'
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    rugir() {
        return "les " + this._race + " rugissent"
    }

    chasse() {
        return "les " + this._race + " chassent"
    }

    run() {
        return super.run(this._race);
    }

    randomAction() {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0 :
                return this.rugir()
            case 1 :
                return this.chasse()
            case 2 :
                return this.run()
        }
    }
}

export default Lion
