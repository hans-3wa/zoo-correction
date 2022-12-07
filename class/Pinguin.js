import GroundAnimal from "./GroundAnimal.js";

class Lion extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille);
        this.race = 'pinguins'
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    step() {
        return`les ${race} margent`
    }

    glisse() {
        return "les " + this._race + " glissent"
    }

    run() {
        return super.run(this._race);
    }

    randomAction() {
        let random = Math.floor(Math.random() * 3)
        if (random === this.actionId) {
            return this.randomAction()
        }
        this.actionId = random
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
