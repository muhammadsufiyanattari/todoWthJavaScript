const todoForm=document.getElementById("todoForm");
const todoInput=document.getElementById("todoInput");
const submit=document.getElementById("submit");
const todoUl=document.getElementById("todoUl");
const clearAllBtn=document.getElementById("clearAll");
todoForm.addEventListener("submit", e=>{
    e.preventDefault();
todoInput.value
console.log(todoInput.value);
todoUl.innerHTML+=`<li id="taskLi">
                 <input id="taskInput" type="text" value=${todoInput.value} disabled />
                <button id="singleItemDelete">Delete</button>
            </li>`;
todoInput.value=""

})
clearAllBtn.addEventListener("click", e=>{
    e.preventDefault();
    todoUl.innerHTML="";
}
)
