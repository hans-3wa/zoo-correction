class Lapin {

    constructor(name, color, proprietaire) {
        this._name = name;
        this._color = color;
        this._proprietaire = proprietaire;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get proprietaire() {
        return this._proprietaire;
    }

    set proprietaire(value) {
        this._proprietaire = value;
    }
}