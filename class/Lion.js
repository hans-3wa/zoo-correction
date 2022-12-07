import GroundAnimal from "./GroundAnimal.js";

const race = 'Lions'
class Lion extends GroundAnimal {
    constructor(surnom, age, taille) {
        super(surnom, age, taille, race);
    }

    roar() {
        return `les ${race} rugissent`
    }

    hunting() {
        return `les ${race} chassent`
    }


    randomAction() {
        return super.randGround([this.roar(), this.hunting()])
    }

    getIdentity() {
        return super.getIdentity(race);
    }
}

export default Lion
