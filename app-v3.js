import Panda from './animals/Panda.js'
import Enclos from "./parc/Enclos.js";
import Lion from "./animals/Lion.js";
import Dauphin from "./animals/Dauphin.js";
import Zoo from "./parc/Zoo.js";
import Singe from "./animals/Singe.js";
import Pinguin from "./animals/Pinguin.js"
import Animal from "./specimen/Animal.js"


let zoo = new Zoo() 

let section = document.querySelectorAll('section')

for(let i = 0; i < section.length; i++){
    let enclos = new Enclos();
    let className = section[i].className
    // Si modification html modifier les selector
    let buttons = document.querySelectorAll('.' + className + '> div.actions > button')
    let timer = document.querySelectorAll('.' + className + ' > div.layout > div.enclos > div > span')
    let action = document.querySelector('.' + className + ' > div.actions')
    let current = document.querySelector('.' + className + ' > div.layout > div.current > p')
    
    enclos.zone = className;
    enclos.buttons = buttons;
    enclos.timers = timer
    enclos._action = action
    enclos.current = current
    
    zoo.enclos.push(enclos)
    
}

// Actions sur chaques enclos
for(let i = 0; i < zoo.enclos.length; i++){
    let enclos = zoo.enclos[i]
    let animal = document.querySelector('.' +  enclos.zone + ' > div.layout > div.enclos')
    
    for(let i = 0; i < animal.children.length; i++){
        let object = instanceObject(enclos.zone)
        enclos.createAnimal(animal.children[i], object)
    }
    
    // Boucle dans chaque bouton
    actionButtons(enclos);
}


function instanceObject(data){
    switch(data){
        case 'lion': return new Lion();
        case 'dauphins': return new Dauphin();
        case 'panda': return new Panda();
    }
}

function manger(enclos){
    enclos.current.innerHTML = "Les " + enclos.zone + " sont en tain de manger"
    enclos.action.style.display = 'none'
    enclos.currentTimer.sec --
    for(let i = 0; i < enclos.timers.length; i++){
        enclos.timers[i].innerHTML = "00:00:"+enclos.currentTimer.sec
    }

    let timer = setTimeout(() => {
        manger(enclos)
    }, 1000)

    if(enclos.currentTimer.sec === 0){
        clearTimeout(timer);
        enclos.current.innerHTML = "Maintenant la sieste"
        enclos.actionDormir()
        dormir(enclos)
    }
}

function actionButtons(enclos){
    for(let i = 0; i < enclos.buttons.length; i++){
        
        let btn = enclos.buttons[i]
        let valueBtn = enclos.buttons[i].innerHTML
        
        btn.addEventListener('click', (e) => {
            executeAction(valueBtn, enclos)
        })
        
    }
}

function executeAction(valueBtn, enclos){
    let object = instanceObject(enclos.zone)
    switch (valueBtn) {
        case 'Dormir':  
            enclos.actionDormir()
            break;
        case 'Manger':  
            enclos.actionManger()
            break;
        case 'Action' : 
            enclos.current.innerHTML = object.randomAction();
            break;
    }
}





