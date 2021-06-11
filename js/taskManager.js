class TaskManager { 
    constructor(currentId=0){  //Class constructor method
        this._tasks = [];
        this._currentId = currentId;
    }
    get tasks(){
        return this._tasks;
    }
    get currentId(){
        return this._currentId;
    }
    incrementCurrentId(){ //increment method of the Current Id
        this._currentId += 1;
    }
    addTask(name, description, assignedTo, dueDate, status){ //addTask method for loading the tasks array with task objects  
        const task = {};

        task.Id = this._currentId;
        task.Name = name;
        task.Description = description;
        task.AssignedTo = assignedTo;
        task.DueDate = dueDate;
        task.Status = status;
        
        this._tasks.push(task);
        
        // this._tasks.push([this._currentId, name, description, assignedTo, dueDate, status]); //code for loading the tasks array with task arrays
    }
}