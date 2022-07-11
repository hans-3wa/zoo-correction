class Animal{
    
    
    constructor(surname, age, size) {
        this._surname = surname;
        this._age = age;
        this._size = size;
        this._currentTimer = {
            hours: 0,
            min: 0,
            sec: 0
        }
        this._timmer = null
        this._case = null
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
    
    get timmer() {
        if(this._timmer){
            return this._timmer
        }
        return "00:00:00"
    }

    set timmer(value) {
        this._timmer = value;
    }
    
    get case() {
        return this._case
    }

    set case(value) {
        this._case = value;
    }
    
    get currentTimer() {
        return this._currentTimer;
    }

    set currentTimer(value) {
        this._currentTimer = value;
    }

    get timmer() {
        return this._timmer;
    }

    set timmer(value) {
        this._timmer = value;
    }
    
    createIdentity(){
        let name = ['Oli', "Zuan", "Hary", 'Tim', 'Nestor', 'Joni', 'Tytu', 'Part', 'Maz', 'Zozo']
        this._surname = name[Math.floor(Math.random() * name.length)];
        this._size = `${Math.floor(Math.random() * 200) + 1}`
        this._age = Math.floor(Math.random() * 10) + 1
    }
    
    getIdentity(race) {
        return `${race.charAt(0).toUpperCase() + race.slice(1)} <br/> ${this._surname} à ${this._age} an(s) et il mesure ${this._size} cm`
    }
    
    updateChrono(time){
        if(this.currentTimer.sec === 0) {
            this.currentTimer.sec = time
        }
        
        this._case[1].innerHTML = `${this.currentTimer.hours} : ${this.currentTimer.min} : ${this.currentTimer.sec}`
        this.currentTimer.sec = --this.currentTimer.sec
    }
    
}
export default Animal
