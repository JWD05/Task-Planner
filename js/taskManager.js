function createTaskHtml(id, name, description, assignedTo, dueDate, status){ 
    // let html = `<li class="list-group-item list_name" data-id="${id}"          data-loaded="true" style="border: 1px solid purple;">
    //         <div><label for='listnameoutput'><strong>Name:</strong> </label><output name='listnameoutput'> &nbsp;${name}</output></div>
    //         <div><label for='listtaskdesc'><strong>Task Description: </strong></label><output name='listtaskdesc'> &nbsp;${description}</output></div>
    //         <div><label for='listassigned'><strong>Assigned to:</strong> </label><output name='listassigned'> &nbsp;${assignedTo}</output></div>
    //          <div><label for='listduedate'><strong>Due date: </strong></label><output name='listduedate'> &nbsp;${dueDate}</output></div>
    //          <div><label for='liststatus'><strong>Status: </strong></label><output name='liststatus'> &nbsp;${status}</output></div>
    //          <section class="card_buttons">
    //          <button type="submit" class="btn btn-danger delete_btn btn-sm shadow">Delete</button>&nbsp;&nbsp;
    //          <button type="submit" class="btn btn-primary complete_btn btn-sm shadow ${
    //             status === "todo" || status === "progress" || status === "review"
    //               ? "visible"
    //               : "invisible"
    //           }">Done</button> 
    //      </section>
    //      </li>`
//---------Above the use of conditional statement in template literal has been made and is being used as a replacement of the code below.

    let html = "";
    if(status!= 'Done'){
        html = 
        `<li class="list-group-item list_name" data-id="${id}"          data-loaded="true" style="border: 1px solid purple;">
            <div><label for='listnameoutput'><strong>Name:</strong> </label><output name='listnameoutput'> &nbsp;${name}</output></div>
            <div><label for='listtaskdesc'><strong>Task Description: </strong></label><output name='listtaskdesc'> &nbsp;${description}</output></div>
            <div><label for='listassigned'><strong>Assigned to:</strong> </label><output name='listassigned'> &nbsp;${assignedTo}</output></div>
            <div><label for='listduedate'><strong>Due date: </strong></label><output name='listduedate'> &nbsp;${dueDate}</output></div>
            <div><label for='liststatus'><strong>Status: </strong></label><output name='liststatus'> &nbsp;${status}</output></div>
            <section class="card_buttons">
            <button type="submit" class="btn btn-danger delete_btn btn-sm shadow">Delete</button>&nbsp;&nbsp;
            <button type="submit" class="btn btn-primary complete_btn btn-sm shadow">Done</button>
        </section>
        </li>`;  
    }
    else{
        html = `<li class="list-group-item list_name" data-id="${id}"   data-loaded="true" style="border: 1px solid purple;">
            <div><label for='listnameoutput'><strong>Name:</strong> </label><output name='listnameoutput'> &nbsp;${name}</output></div>
            <div><label for='listtaskdesc'><strong>Task Description: </strong></label><output name='listtaskdesc'> &nbsp;${description}</output></div>
            <div><label for='listassigned'><strong>Assigned to:</strong> </label><output name='listassigned'> &nbsp;${assignedTo}</output></div>
            <div><label for='listduedate'><strong>Due date: </strong></label><output name='listduedate'> &nbsp;${dueDate}</output></div>
            <div class="text-danger"><label for='liststatus' ><strong>Status: </strong></label><output name='liststatus'> &nbsp;${status}</output></div>
            <section class="card_buttons">
            <button type="submit" class="btn btn-danger delete_btn btn-sm shadow">Delete</button>&nbsp;&nbsp;
            <button type="submit" class="btn btn-primary complete_btn btn-sm shadow" style="display:none">Done</button>
        </section>
        </li>`;      
    }
    return html;    
}

let tasksHtml; // variable to hold the joined HTML strings of all tasks.

class TaskManager { 
    constructor(currentId=0){  //Class constructor method
        this._tasks = []; // Array where all task objects will be stored
        this._currentId = currentId;        
    }
    get tasks(){
        return this._tasks;
    }
    get currentId(){
        return this._currentId;
    }
    incrementCurrentId(){ //increment method of the Current Id
        //this._currentId += 1;         
        this._currentId += 1;
        let tempCurrentId = this._currentId;
        return tempCurrentId;
               
    }
    addTask(name, description, assignedTo, dueDate, status){ //addTask method for loading the tasks array with task objects  
        const task = {};
        let tempId = this.incrementCurrentId();        
        task.Id = tempId; //this._currentId;
        task.Name = name;
        task.Description = description;
        task.AssignedTo = assignedTo;
        task.DueDate = dueDate;
        task.Status = status;

        this._tasks.push(task);
        
        // this._tasks.push([this._currentId, name, description, assignedTo, dueDate, status]); //code for loading the tasks array with task arrays        
    }
    getTaskById(id){//getTaskById method to get task using unique Id
        let tempTaskObj;
        for(let i=0; i < this._tasks.length; i++){
            
            if(parseInt(this._tasks[i].Id) === id){
                tempTaskObj = this._tasks[i];
            }            
        }
        return tempTaskObj;
    }
    
    render(){ //render method to render the tasks as cards    
        let tasksHtmlList = []; //Array for storing the task html strings

        for(const arrayElement of this._tasks){ //Iterating through the tasks array

            //converting the date into readable format
            let date = new Date(arrayElement.DueDate);
            let formattedDate = date.toLocaleDateString();

            //Calling createTaskHtml method and assigning the output
            let taskHtml = createTaskHtml(arrayElement.Id, arrayElement.Name, arrayElement.Description, arrayElement.AssignedTo, formattedDate, arrayElement.Status);

            //Pushing the individual task html to the tasksHtmlList Array
            tasksHtmlList.push(taskHtml);
        }

        //applying join() method to the tasksHtmlList array to obtain a string.
        tasksHtml = tasksHtmlList.join('\n');
        let listTaskRender = document.getElementById('taskListCard');
        listTaskRender.innerHTML=tasksHtml;       
        
       console.log(tasksHtml);
    }
    save(){//save method to save the tasks as JSON in the Local Storage
        let tasksJson = JSON.stringify(this._tasks);//Converting 'this._tasks' array into JSON string format
        localStorage.setItem("tasks", tasksJson);

        let currId = JSON.stringify(this._currentId);//Converting 'this._currentId' array into JSON string format
        localStorage.setItem("currentId", currId);
    }
    load(){
        const tasksJson = localStorage.getItem('tasks');
        if(tasksJson != null){
            this._tasks = JSON.parse(tasksJson);
            const stringcurrentId = localStorage.getItem('currentId');
            this._currentId = parseInt(stringcurrentId);
        }
    }
    deleteTask(taskId){
        const newTasks=[];
        for(const task of this._tasks){
            if(task.Id !== taskId){newTasks.push(task);}
        }
        this._tasks = newTasks;
    }
}