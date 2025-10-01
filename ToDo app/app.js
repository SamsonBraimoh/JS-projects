
const input = document.getElementById('inputField');
const Addbutton = document.getElementById('Addbtn');
const list = document.getElementById('list');

Addbutton.addEventListener("click", ()=> {
    // assigning the value of input to a variable, task
    const task = input.value.trim();
    // a conditional statement to check if task is not equal to an empty string
    if(task !== ""){
        // created an html li element for each task
        const li = document.createElement("li");
        // filling li with input value 
        li.textContent = task;
        // creating a button to delete each task
        const deleteTask = document.createElement("button");
        deleteTask.textContent = "del";
        deleteTask.style.float = "right"
        // deleting task
        deleteTask.onclick = ()=> li.remove();
        // deleting each task
        li.appendChild(deleteTask);
        // adding task one after the other
        list.appendChild(li)
    //    setting input to be an empty string to make 
        input.value = "";
    };
});
