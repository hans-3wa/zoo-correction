import GroundAnimal from "./GroundAnimal.js";

class Lion extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this._race = 'pinguins'
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    marche() {
        return "les " + this._race + " marchent"
    }

    glisse() {
        return "les " + this._race + " glissent"
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
