class Enclos{
    constructor() {
        this._currentTimer = {
            hours: 0,
            min: 0,
            sec: 0
        }
        this._timers = []
        this._current = "";
        this._btnAction = "";
        this._manger = "";
        this._dormir = "";
        this._actions = "";

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

    get btnAction() {
        return this._btnAction;
    }

    set btnAction(value) {
        this._btnAction = value;
    }

    get manger() {
        return this._manger;
    }

    set manger(value) {
        this._manger = value;
    }

    get dormir() {
        return this._dormir;
    }

    set dormir(value) {
        this._dormir = value;
    }

    get actions() {
        return this._actions;
    }

    set actions(value) {
        this._actions = value;
    }

    actionDormir(){
        this.currentTimer.sec = 20;
    }

    actionManger(){
        this.currentTimer.sec = 5;
    }
}
export default Enclos
