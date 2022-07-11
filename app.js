import Panda from './Panda.js'
import Enclos from "./Enclos.js";
import Lion from "./Lion.js";
import Dauphin from "./Dauphin.js";

let enclosPanda = new Enclos()
let panda = new Panda('Pierre', 12, 132)

let timerPanda = document.querySelectorAll('.panda > div.layout > div.enclos > div > span')
let btnPanda = document.querySelectorAll('.panda > div.actions > button')
let currentPanda = document.querySelector('.panda > div.layout > div.current > p')
enclosPanda.btnAction = document.querySelector('.panda > div.actions')

// Defined Enclos Panda
enclosPanda.current = currentPanda;
for (let i = 0; i < timerPanda.length; i++){
    enclosPanda.timers.push(timerPanda[i])
}

for(let i = 0; i < btnPanda.length; i++){
    switch (i){
        case 0 : enclosPanda.manger = btnPanda[i]; break;
        case 1 : enclosPanda.dormir = btnPanda[i]; break;
        case 2 : enclosPanda.actions = btnPanda[i]; break;
        default:
            console.log('error')
    }
}

// Panda eat
enclosPanda.manger.addEventListener('click', (e) => {
    enclosPanda.current.innerHTML = 'Bon appetit'
    enclosPanda.actionManger()
    
    manger(enclosPanda)

})

// Panda sleep
enclosPanda.dormir.addEventListener('click', (e) => {
    // 5s before sleep
    setTimeout(() => {
        enclosPanda.actionDormir()
        enclosPanda.current.innerHTML = "Bonne nuit"
        dormir(enclosPanda)
    })
})

// Panda action
enclosPanda.actions.addEventListener('click', (e) => {
    enclosPanda.current.innerHTML = panda.randomAction();
})


//############## LION
let enclosLion = new Enclos()
let lion = new Lion()

let timerLion = document.querySelectorAll('.lion > div.layout > div.enclos > div > span')
let btnLion = document.querySelectorAll('.lion > div.actions > button')
let currentLion = document.querySelector('.lion > div.layout > div.current > p')
enclosLion.btnAction = document.querySelector('.lion > div.actions')

// Defined Enclos Panda
enclosLion.current = currentLion;
for (let i = 0; i < timerLion.length; i++){
    enclosLion.timers.push(timerLion[i])
}

for(let i = 0; i < btnLion.length; i++){
    switch (i){
        case 0 : enclosLion.manger = btnLion[i]; break;
        case 1 : enclosLion.dormir = btnLion[i]; break;
        case 2 : enclosLion.actions = btnLion[i]; break;
        default:
            console.log('error')
    }
}

// Lion eat
enclosLion.manger.addEventListener('click', (e) => {
    enclosLion.current.innerHTML = 'Bon appetit'
    enclosLion.actionManger()
    manger(enclosLion)

})

// Lion sleep
enclosLion.dormir.addEventListener('click', (e) => {
    // 5s before sleep
    setTimeout(() => {
        enclosLion.actionDormir()
        enclosLion.current.innerHTML = "Bonne nuit"
        dormir(enclosLion)
    })
})

// Lion action
enclosLion.actions.addEventListener('click', (e) => {
    enclosLion.current.innerHTML = lion.randomAction();
})


//############## DAUPHINS
let enclosDauphin = new Enclos()
let dauphin = new Dauphin()

let timerDauphins = document.querySelectorAll('.dauphins > div.layout > div.enclos > div > span')
let btnDauphins = document.querySelectorAll('.dauphins > div.actions > button')
let currentDauphins = document.querySelector('.dauphins > div.layout > div.current > p')
enclosDauphin.btnAction = document.querySelector('.dauphins > div.actions')

// Defined Enclos Panda
enclosDauphin.current = currentDauphins;
for (let i = 0; i < timerDauphins.length; i++){
    enclosDauphin.timers.push(timerDauphins[i])
}

for(let i = 0; i < btnDauphins.length; i++){
    switch (i){
        case 0 : enclosDauphin.manger = btnDauphins[i]; break;
        case 1 : enclosDauphin.dormir = btnDauphins[i]; break;
        case 2 : enclosDauphin.actions = btnDauphins[i]; break;
        default:
            console.log('error')
    }
}

// Dauphins eat
enclosDauphin.manger.addEventListener('click', (e) => {
    enclosDauphin.current.innerHTML = 'Bon appetit'
    enclosDauphin.actionManger()
    manger(enclosDauphin)

})

// Dauphins sleep
enclosDauphin.dormir.addEventListener('click', (e) => {
    // 5s before sleep
    setTimeout(() => {
        enclosDauphin.actionDormir()
        enclosDauphin.current.innerHTML = "Bonne nuit"
        dormir(enclosDauphin)
    })
})

// Dauphins action
enclosDauphin.actions.addEventListener('click', (e) => {
    enclosDauphin.current.innerHTML = dauphin.randomAction();
})


// fonction globals
function dormir(enclos){
    enclos.btnAction.style.display = 'none'
    enclos.currentTimer.sec --
    for(let i = 0; i < enclos.timers.length; i++){
        enclos.timers[i].innerHTML = "00:00:"+enclos.currentTimer.sec
    }

    let timer = setTimeout(() => {
        dormir(enclos)
    }, 1000)
    if(enclos.currentTimer.sec === 0){
        enclos.btnAction.style.display = 'flex'
        clearTimeout(timer);
        enclos.current.innerHTML = " On est reveillé"
    }
}

function manger(enclos){
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