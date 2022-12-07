import GroundAnimal from "./GroundAnimal.js";

const race = 'Panda'
class Panda extends GroundAnimal{
    constructor(surnom, age, taille) {
        super(surnom, age, taille, race);
    }

    get action() {
        return this._action;
    }

    set action(value) {
        this._action = value;
    }

    grimper() {
        return `les ${race} grimpent`
    }

    rouler() {
        return `les ${race} roulent`
    }

    randomAction() {
        return super.randGround([this.rouler(), this.grimper()])
    }

    getIdentity(){
        return super.getIdentity(race);
    }
}

export default Panda
