import {generateRandom} from "../utils.js";

class Animal {

    constructor(surname, age, size, race) {
        this.surname = surname;
        this.age = age;
        this.size = size;
        this._actionId = 999999
        this.currentTimer = {
            hours: 0,
            min: 0,
            sec: 0
        }
        this.timmerDom = null
        this.race = race
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

    get currentTimer() {
        return this._currentTimer;
    }

    set currentTimer(value) {
        this._currentTimer = value;
    }

    get timmerDom() {
        return this._timmerDom;
    }

    set timmerDom(value) {
        this._timmerDom = value;
    }

    get actionId() {
        return this._actionId;
    }

    set actionId(value) {
        this._actionId = value;
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    createIdentity() {
        let name = ['Oli', "Zuan", "Hary", 'Tim', 'Nestor', 'Joni', 'Tytu', 'Part', 'Maz', 'Zozo']
        this._surname = name[Math.floor(Math.random() * name.length)];
        this._size = `${Math.floor(Math.random() * 200) + 1}`
        this._age = Math.floor(Math.random() * 10) + 1
    }

    getIdentity(race) {
        return `${this._surname} à ${this._age} an(s) et il mesure ${this._size} cm`
    }

    eat() {
        if (this.currentTimer.sec <= 5 && this.currentTimer.sec !== 0) {
            this.timmerDom.innerHTML = `00:00:${--this.currentTimer.sec}`
        } else {
            this.currentTimer.sec = 5
        }

    }

    sleep() {
        if (this.currentTimer.sec <= 20 && this.currentTimer.sec !== 0) {
            this.timmerDom.innerHTML = `00:00:${--this.currentTimer.sec}`
        } else {
            this.currentTimer.sec = 20
        }
    }

    rand(actions) {
        let random = generateRandom(actions.length, this.actionId)
        if (random === this._actionId) {
            return this.rand()
        }
        this.actionId = random
        return actions[random]
    }

}

export default Animal
