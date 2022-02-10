import SeaAnimal from "./SeaAnimal.js";

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
        return "les " + this._race + " rugissent"
    }

    joue() {
        return "les " + this._race + " chassent"
    }

    run() {
        return super.run(this._race);
    }

    randomAction() {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0 :
                return this.siffle()
            case 1 :
                return this.joue()
            case 2 :
                return this.run()
        }
    }
}

export default Dauphin
