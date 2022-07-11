class Enclos{
    constructor() {
        this._current = "";
        this._buttons = []
        this._zone = ""
        this._action = ""
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
    
    get zone() {
        return this._zone;
    }

    set zone(value) {
        this._zone = value;
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
        this._animals = value;
    }


    actionDormir(){
        this.current.innerHTML = "Les " + this.zone + " sont en tain de dormir"
        this.action.style.display = 'none'
        for(let i = 0; i < this.animals.length; i++){
            let animal = this.animals[i]
            animal.currentTimer.sec = 20
            let timerId = setInterval(() => {
                animal.updateChrono(20)
                if(animal.currentTimer.sec === 0){
                    clearInterval(timerId)
                    this.current.innerHTML = "Les " + this.zone + " attendent une action"
                    this.action.style.display = 'flex'
                }
            }, 1000);
        } 
        
    }

    actionManger(){
        this.current.innerHTML = "Les " + this.zone + " sont en tain de manger"
        this.action.style.display = 'none'
        let timerId;
        
        timerId = setInterval(() => {
            for(let i = 0; i < this.animals.length; i++){
                let animal = this.animals[i]
                animal.updateChrono(5)
                
                if(this.verifyTime()){
                    clearInterval(timerId)
                    timerId = null;
                    return this.actionDormir()
                }
            } 
        }, 1000)
        
    }
    
    verifyTime(){
        for(let i = 0; i < this.animals.length; i++){
            if(this.animals[i].currentTimer.sec !== 0){
                return false
            }
        }
        return true
    }
    
    createAnimal(animal, object){
        object.case = animal.children;
        object.createIdentity();
        object.case[0].innerHTML = object.getIdentity();
        this._animals.push(object)
        
    }
    
}
export default Enclos
