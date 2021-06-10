    //Grabbing the html elements
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
    // console.log(nameCreator);
    // console.log(taskDescrip);
    // console.log(assigneeName);
    // console.log(dueDateInput);
    // console.log(statusSelect);
    //console.log("Task Description:" + taskDescrip.value);
    let tdate = new Date();
    //Event Handler
    function validFormFieldInput(){
        if(nameCreator.value.length < 5){
            nameCreator.style.border = '1px solid red';
            errorMsg.innerHTML = "    The entry should be of 5 characters or more.";
            errorMsg.style.color = 'red';
        }else{nameCreator.style.border = '1px solid black';}
        if(taskDescrip.value.length < 5){
            taskDescrip.style.border = '1px solid red';
            errorMsg1.innerHTML = "    The entry should be of 5 characters or more.";
            errorMsg1.style.color = 'red';
        }else{taskDescrip.style.border = '1px solid black';}
        if(assigneeName.value.length < 5){
            assigneeName.style.border = '1px solid red';
            errorMsg2.innerHTML = "    The entry should be of 5 characters or more.";
            errorMsg2.style.color = 'red';
        }else{assigneeName.style.border = '1px solid black';}
        if(dueDateInput.value === '' && dueDateInput.value < tdate){
            dueDateInput.style.border = '1px solid red';
            errorMsg3.innerHTML = "    Please select a proper date.";
            errorMsg3.style.color = 'red';
        }else{}
        if(statusSelect.value === 'Select one'){
            statusSelect.style.border = '1px solid red';
            errorMsg4.innerHTML = "   Please select an option.";
            errorMsg4.style.color = 'red';
        }else{}
        console.log(nameCreator);
    console.log(taskDescrip);
    console.log(assigneeName);
    console.log(dueDateInput);
    console.log(statusSelect);
    console.log("Task Description:" + taskDescrip.value);
    }

    //Adding Event Listener
    saveButton.addEventListener('click',validFormFieldInput);
    saveButton.addEventListener('click',(e)=>{e.preventDefault();})
