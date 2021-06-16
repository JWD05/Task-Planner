function secondValid(){
    let tdate = new Date();  
    let d = new Date(1623456784332);
    let bdate = new Date(dueDateInput.value); 
    console.log(`The d = new Date(1623456784332) gives - ${d}`);
    if(nameCreator.value.length < 5){ //Validation of Name field entry
        nameCreator.style.border = '1px solid red';
        errorMsg.innerHTML = "    The entry should be of 5 characters or more.";
        errorMsg.style.color = 'red';            
    }else{nameCreator.style.border = '1px solid black';
        errorMsg.innerHTML = "";            
    }
    if(taskDescrip.value.length < 5){ //Validation of Task description field
        taskDescrip.style.border = '1px solid red';
        errorMsg1.innerHTML = "    The entry should be of 5 characters or more.";
        errorMsg1.style.color = 'red';
    }else{taskDescrip.style.border = '1px solid black';
        errorMsg1.innerHTML = "";           
    }
    if(assigneeName.value.length < 5){ //Validation of Assignee Name field
        assigneeName.style.border = '1px solid red';
        errorMsg2.innerHTML = "    The entry should be of 5 characters or more.";
        errorMsg2.style.color = 'red';
    }else{assigneeName.style.border = '1px solid black';
        errorMsg2.innerHTML = "";           
    }
    if(dueDateInput.value == '' || Date.parse(bdate) < tdate.getTime()){ //Validation of Due date input field. 
        //Here tdate.getTime() returns time in millisec
        dueDateInput.style.border = '1px solid red';
        errorMsg3.innerHTML = "    Please select a proper date.";
        errorMsg3.style.color = 'red';
    }else{dueDateInput.style.border = '1px solid black';
        errorMsg3.innerHTML = "";           
    }
    if(statusSelect.value === 'Select one' || statusSelect.value === ''){ //Validation of Status field
        statusSelect.style.border = '1px solid red';
        errorMsg4.innerHTML = "   Please select an option.";
        errorMsg4.style.color = 'red';
    }else{statusSelect.style.border = '1px solid black';
        errorMsg4.innerHTML = "";           
    }       
}