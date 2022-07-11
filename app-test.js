let chrono = {
    h: 0,
    min: 0,
    sec: 20
}

function timer(chronos){
    chrono.sec == --chrono.sec
    return chrono
}

let enclos = document.querySelector('.enclos')
timer(chrono);
for (let i = 0; i < enclos.children.length; i++){
    let element = enclos.children[i];
    let span = element.children[1];
    span.innerHTML = `${chrono.h} : ${chrono.min} : ${chrono.sec}`
    
}