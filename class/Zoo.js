import Enclosure from "./Enclosure.js";
import {capitalizeFirstLetter} from "../utils.js";

class Zoo {
    constructor() {
        this._enclosure = []
    }

    get enclosure() {
        return this._enclosure;
    }

    set enclosure(value) {
        this._enclosure.push(value)
    }

    constructZoo(sections) {
        for (const section of sections) {
            const enclosure = new Enclosure()
            enclosure.buttons = document.querySelectorAll(`.${section.className} > div.actions > button`)
            enclosure.timerDom = document.querySelector(`.${section.className} > div.layout > div.enclos > div > span`)
            enclosure.action = document.querySelector(`.${section.className} > div.actions`)
            enclosure.current = document.querySelector(`.${section.className} > div.layout > div.current > p`)
            enclosure.race = `${capitalizeFirstLetter(section.className)}s`
            const animals = document.querySelector(`.${section.className} >  div.layout > div.enclos`)

            for (const enclos of animals.children) {
                enclosure.createAnimal(enclos, section.className)
            }

            this.enclosure = enclosure
        }
    }

    listenActions() {
        for (const enclosure of this.enclosure) {
            for(const button of enclosure.buttons){
                button.addEventListener('click', () => {
                    enclosure.executeAction(button.innerHTML.toLowerCase())
                })
            }
        }
    }
}

export default Zoo

