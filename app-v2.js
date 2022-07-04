import Panda from './Panda.js'
import Enclos from "./Enclos.js";
import Lion from "./Lion.js";
import Dauphin from "./Dauphin.js";
import Zoo from "./Zoo.js";
import Singe from "./Singe.js";
import Pinguin from "./Pinguin.js"


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

// Boucle chaque enclos
for(let i = 0; i < zoo.enclos.length; i++){
    // Boucle dans chaque bouton
    for(let a = 0; a < zoo.enclos[i].buttons.length; a++){
        
        let btn = zoo.enclos[i].buttons[a]
        let valueBtn = zoo.enclos[i].buttons[a].innerHTML
        
        btn.addEventListener('click', (e) => {
            executeAction(valueBtn, zoo.enclos[i])
        })
        
    }
}
// fonction globals
function dormir(enclos){
    enclos.current.innerHTML = "Les " + enclos.zone + " sont en tain de dormir"
    enclos.action.style.display = 'none'
    enclos.currentTimer.sec --
    for(let i = 0; i < enclos.timers.length; i++){
        enclos.timers[i].innerHTML = "00:00:"+enclos.currentTimer.sec
    }

    let timer = setTimeout(() => {
        dormir(enclos)
    }, 1000)
    if(enclos.currentTimer.sec === 0){
        enclos.action.style.display = 'flex'
        clearTimeout(timer);
        enclos.current.innerHTML = " On est reveillé"
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

function instanceObject(data){
    switch(data){
        case 'lion': return new Lion();
        case 'dauphins': return new Dauphin();
        case 'panda': return new Panda();
        case 'singe' : return new Singe();
        case 'pinguin' : return new Pinguin();
    }
}

function executeAction(valueBtn, enclos){
    let object = instanceObject(enclos.zone)
    switch (valueBtn) {
        case 'Dormir':  
            enclos.actionDormir()
            dormir(enclos)
            break;
        case 'Manger':  
            enclos.actionManger()
            manger(enclos)
            break;
        case 'Action' : 
            enclos.current.innerHTML = object.randomAction();
            break;
    }
}