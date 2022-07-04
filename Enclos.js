class Enclos{
    constructor() {
        this._currentTimer = {
            hours: 0,
            min: 0,
            sec: 0
        }
        this._timers = []
        this._current = "";
        this._buttons = []
        this._zone = ""
        this._action = ""

    }

    get currentTimer() {
        return this._currentTimer;
    }

    set currentTimer(value) {
        this._currentTimer = value;
    }

    get timers() {
        return this._timers;
    }

    set timers(value) {
        this._timers = value;
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


    actionDormir(){
        this.currentTimer.sec = 20;
    }

    actionManger(){
        this.currentTimer.sec = 5;
    }
}
export default Enclos
