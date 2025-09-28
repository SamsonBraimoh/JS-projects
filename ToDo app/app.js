const input = document.getElementById('inputField');
const Addbutton = document.getElementById('Addbtn');
const list = document.getElementById('list');

Addbutton.addEventListener("click", ()=> {
    const task = input.value.trim();
    if(task !== ""){
        const li = document.createElement("li");
        li.textContent = task;
        const deleteTask = document.createElement("button");
        deleteTask.textContent = "del";
        deleteTask.onclick = ()=> li.remove();

        li.appendChild(deleteTask);
        list.appendChild(li)
       
        input.value = "";
    };
});
