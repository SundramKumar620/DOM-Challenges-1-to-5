let taskinput = document.getElementById('taskInput');
let addbtn = document.getElementById('addButton');

let tasklist = document.getElementById('taskList');
let alltask = document.getElementById('totalTasks');
let completedtask = document.getElementById('completedTasks');
let totalTaskscount = 0;
let completedtaskcount = 0;

let emptyListMessage = document.getElementById('empty-list');

addbtn.addEventListener('click',()=>{
   if(taskinput.value!==""){

    let inputvalue = taskinput.value;
    let li = document.createElement('li');
    li.classList.add('task-item')

    li.innerText = inputvalue;
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.style.backgroundColor = 'rgb(255, 99, 99)';
    delbtn.style.borderRadius = "2px";
    li.appendChild(delbtn);

    emptyListMessage.style.display ="none";

    tasklist.appendChild(li);
    totalTaskscount++;
    alltask.innerText = `Total tasks: ${totalTaskscount}`
    taskinput.value = '';

    checkbox.addEventListener('input',()=> {
        if(checkbox.checked){
            completedtaskcount++;
            li.style.textDecoration = 'line-through';
            li.style.color = 'gray';
            completedtask.innerText = `Completed: ${completedtaskcount}`;
        } else{
            completedtaskcount--;
            li.style.textDecoration = 'none';
            li.style.color = 'black';
            completedtask.innerText = `Completed: ${completedtaskcount}`;
        }
    })

    delbtn.addEventListener('click',()=>{

        if(checkbox.checked){
            
            completedtaskcount--;
            completedtask.innerText = `Completed: ${completedtaskcount}`;
        }

        li.remove();
        totalTaskscount--;
        alltask.innerText = `Total tasks: ${totalTaskscount}`

        if(totalTaskscount===0){
            emptyListMessage.style.display ="list-item";
        }
        
    })
}

});