    const taskManager = new TaskManager(0); //Instantiation of class TaskManager
    console.log(taskManager.tasks);   
    let taskHtml; //Variable for storing the task html object.
    
    //-----------------Grabbing the html elements--------------------
    let nameCreator = document.getElementById('nameCreator');
    let taskDescrip = document.getElementById('taskDescrip');
    let assigneeName = document.getElementById('assigneeName');
    let dueDateInput = document.getElementById('dueDateInput');
    let statusSelect = document.getElementById('statusSelect');
    let saveButton = document.getElementById('saveButton');
    let cancelButton = document.getElementById('cancelButton');
    let testID = document.getElementById('testDiv'); 
    let errorMsg = document.getElementById('errMsg');
    let errorMsg1 = document.getElementById('errMsg1');
    let errorMsg2 = document.getElementById('errMsg2');
    let errorMsg3 = document.getElementById('errMsg3');
    let errorMsg4 = document.getElementById('errMsg4');  
        
    let validationCounter = 0; //Counter for validations(max 5)
    
    //    -------------------Event Triggered Function-----------------
    function validFormFieldInput(){ 
        let tdate = new Date();  //creating date object to later obtain today's date in string format
        let d = new Date(1623456784332);
        let bdate = new Date(dueDateInput.value); //to obtain the input date in string format.
        //console.log(`Today's date using tdate.getTime gives - ${tdate.getTime()}`);
        //console.log(`tdate = new Date() gives - ${tdate}`);
        //console.log(`The date input using Date.parse(bdate) was - ${Date.parse(bdate)}`);
        //console.log(`bdate = new Date(dueDateInput.value) gives - ${bdate}`);
        console.log(`The d = new Date(1623456784332) gives - ${d}`);
        if(nameCreator.value.length < 5){ //Validation of Name field entry
            nameCreator.style.border = '1px solid red';
            errorMsg.innerHTML = "    The entry should be of 5 characters or more.";
            errorMsg.style.color = 'red';            
        }else{nameCreator.style.border = '1px solid black';
            errorMsg.innerHTML = "";
            validationCounter += 1;
        }
        if(taskDescrip.value.length < 5){ //Validation of Task description field
            taskDescrip.style.border = '1px solid red';
            errorMsg1.innerHTML = "    The entry should be of 5 characters or more.";
            errorMsg1.style.color = 'red';
        }else{taskDescrip.style.border = '1px solid black';
            errorMsg1.innerHTML = "";
            validationCounter += 1;
        }
        if(assigneeName.value.length < 5){ //Validation of Assignee Name field
            assigneeName.style.border = '1px solid red';
            errorMsg2.innerHTML = "    The entry should be of 5 characters or more.";
            errorMsg2.style.color = 'red';
        }else{assigneeName.style.border = '1px solid black';
            errorMsg2.innerHTML = "";
            validationCounter += 1;
        }
        if(dueDateInput.value == '' || Date.parse(bdate) < tdate.getTime()){ //Validation of Due date input field. 
            //Here tdate.getTime() returns time in millisec
            dueDateInput.style.border = '1px solid red';
            errorMsg3.innerHTML = "    Please select a proper date.";
            errorMsg3.style.color = 'red';
        }else{dueDateInput.style.border = '1px solid black';
            errorMsg3.innerHTML = "";
            validationCounter += 1;
        }
        if(statusSelect.value === 'Select one' || statusSelect.value === ""){ //Validation of Status field
            statusSelect.style.border = '1px solid red';
            errorMsg4.innerHTML = "   Please select an option.";
            errorMsg4.style.color = 'red';
        }else{statusSelect.style.border = '1px solid black';
            errorMsg4.innerHTML = "";
            validationCounter += 1;
        }
        if(validationCounter === 5){ 
            //taskManager.incrementCurrentId();//Call for incrementing the CurrentId

            //Calling out '.addTask()' method
            taskManager.addTask(nameCreator.value, taskDescrip.value, assigneeName.value, dueDateInput.value, statusSelect.value);

            taskManager.render(); //Call for render method

            validationCounter = 0;
            nameCreator.value = '';
            taskDescrip.value = '';
            assigneeName.value = '';
            dueDateInput.value = '';
            statusSelect.value = '';          

        }else{
            validationCounter = 0; //Resetting the counter as the validation is not complete.
        }         
        console.log(taskManager.tasks);         
    }
    
    //----------------Cancel Button Activated Function----------
    function cancelFunction(){

        document.getElementById("form_assignment").reset();
        validationCounter = 0;
            nameCreator.value = '';
            taskDescrip.value = '';
            assigneeName.value = '';
            dueDateInput.value = '';
            statusSelect.value = '';
            errorMsg.innerHTML = "";
            errorMsg1.innerHTML = "";
            errorMsg2.innerHTML = "";
            errorMsg3.innerHTML = "";
            errorMsg4.innerHTML = "";
            nameCreator.style.border = '1px solid black';
            taskDescrip.style.border = '1px solid black';
            assigneeName.style.border = '1px solid black';
            dueDateInput.style.border = '1px solid black';
            statusSelect.style.border = '1px solid black';
    }
    // ----------------Adding Event Listener--------------------
    
    //Event Listeners for the form fields
    nameCreator.addEventListener('input', secondValid);
    taskDescrip.addEventListener('input', secondValid);
    assigneeName.addEventListener('input', secondValid);
    dueDateInput.addEventListener('input', secondValid);   
    statusSelect.addEventListener('input', secondValid); 

    //Event Listeners for the 'Save' and 'Cancel' buttons
    saveButton.addEventListener('click', validFormFieldInput);
    saveButton.addEventListener('click', (e)=>{e.preventDefault();})
    //To prevent the resetting/reloading of the webpage
    cancelButton.addEventListener('click', cancelFunction);
    cancelButton.addEventListener('click', (e)=>{e.preventDefault();})
    //To prevent the resetting of the webpage

    //Event Listener for the 'Done' button on the task cards.
    let taskUList = document.getElementById('taskListCard');
    taskUList.addEventListener('click', (event)=>{if (event.target.classList.contains('complete_btn')){  
        
        //event.target.nodeName === 'BUTTON' works fine
        //console.log(event.target.nodeName);
        //console.log(`Hi I am here in the Task List`);

        const parentElem = event.target.parentElement.parentElement;

       // console.log(`The parent element is ${parentElem.nodeName}`);

        const parentId = parseInt(parentElem.dataset.id);

            //console.log(parentId);
           // console.log(typeof parentId);

        const selectTask = taskManager.getTaskById(parentId);
        selectTask.Status = "Done";
        //selectTask.
        console.log(selectTask.Id);
        console.log(selectTask);
        taskManager.render();        
    }});
