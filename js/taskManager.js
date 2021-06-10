class TaskManager {
    constructor(tasks){
        this._tasks = [];
        this._currentId = 0;
    }
    get tasks(){
        return this._tasks;
    }
    get currentId(){
        return this._currentId;
    }
    incrementCurrentId(){
        this._currentId++;
    }
}