class Zoo {
    constructor() {
        this._enclos = []
    }

    get enclos() {
        return this._enclos;
    }

    set enclos(value) {
        this._enclos = value;
    }
}

export default Zoo