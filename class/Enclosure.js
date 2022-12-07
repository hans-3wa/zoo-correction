import {capitalizeFirstLetter} from "../utils.js";
import Panda from "./Panda.js";
import Dauphin from "./Dauphin.js";
import Lion from "./Lion.js";

class Enclosure {
    constructor() {
        this.race = ""
        this.current = "";
        this.buttons = []
        this.action = ""
        this._animals = []
    }

    get current() {
        return this._current;
    }

    set current(value) {
        this._current = value;
    }

    get buttons() {
        return this._buttons;
    }

    set buttons(value) {
        this._buttons = value;
    }

    get action() {
        return this._action;
    }

    set action(value) {
        this._action = value;
    }


    get animals() {
        return this._animals;
    }

    set animals(value) {
        this._animals.push(value);
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    createAnimal(dom, race) {
        const animal = eval(`new ${capitalizeFirstLetter(race)}()`)
        animal.case = dom.children
        animal.timmerDom = dom.children[1]
        animal.createIdentity()
        animal.case[1].innerHTML = animal.getIdentity();
        this.animals.push(animal)
    }

    executeAction(action) {
        switch (action) {
            case 'manger':
                this.actionEat()
                break
            case 'dormir':
                this.actionSleep()
                break
            default:
                this.actionRandom()
        }
    }

    actionEat() {
        this.current.innerHTML = `Les ${this.race} sont en train de manger`
        this.action.style.display = 'none'
        let timerId;
        let sec = 5;

        timerId = setInterval(() => {

            for (const animal of this.animals) {
                animal.timmerDom.innerHTML = `00:00:${sec}`
                animal.eat()
            }

            if (sec === 0) {
                clearInterval(timerId)
                timerId = null
                return this.actionSleep()
            }
            --sec
        }, 1000)
    }

    actionSleep() {
        this.current.innerHTML = `Les ${this.race} sont en train de dormir`
        this.action.style.display = 'none'
        let timerId
        let sec = 20;

        timerId = setInterval(() => {
            for (const animal of this.animals) {
                animal.timmerDom.innerHTML = `00:00:${sec}`
                animal.sleep()
            }
            if (sec === 0) {
                clearInterval(timerId)
                timerId = null
                this.action.style.display = 'flex'
                this.current.innerHTML = `Les ${this.race} attendent une action`
            }
            sec--
        }, 1000)

    }

    actionRandom(){
        this.current.innerHTML = this.animals[0].randomAction()
    }
}

export default Enclosure
