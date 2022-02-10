class Animal{
    constructor(surname, age, size) {
        this._surname = surname;
        this._age = age;
        this._size = size;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }
}
export default Animal
