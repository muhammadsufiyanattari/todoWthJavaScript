const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const submit = document.getElementById("submit");
const todoUl = document.getElementById("todoUl");
const clearAllBtn = document.getElementById("clearAll");
const taskInput = document.getElementById("taskInput");
  const singleItemDelete = document.getElementById("singleItemDelete");
  const editInput = document.getElementById("editInput");
  const updateInput = document.getElementById("updateInput");
  const filterForm=document.getElementById("filterForm");
  const filterInput=document.getElementById("filterInput");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!todoInput.value) {
    alert("Please add  first task");
    return;
  }
  todoInput.value;
  console.log(todoInput.value);
  todoUl.innerHTML += `<li id="taskLi">
                 <input id="taskInput" type="text" value="${todoInput.value}" disabled />
                <button id="singleItemDelete">Delete</button>
                <button id="editInput">Edit</button>
                <button id="updateInput">Update</button>
            </li>`;
  
 
  todoInput.value = "";
});
 todoUl.addEventListener("click", (e) => {
          e.preventDefault();
    if (e.target.id === "singleItemDelete") {
            // console.log(e.target.parentElement);

      e.target.parentElement.remove();
      return;
    }
    if (e.target.id === "editInput") {
      // console.log(e.target.parentElement.children[0]);
      e.target.parentElement.children[0].disabled = false;

      e.target.parentElement.children[0].focus();
      return;
    }
    if (e.target.id === "updateInput") {
      // console.log(e.target.parentElement.children[0]);
      e.target.parentElement.children[0].disabled = true;
      return;
    }
  });
clearAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoUl.innerHTML === "") {
    alert("No tasks to clear");
    return;
  }
  // ye confirm ke kam ata he ke sab delet karne se phele user se reconfirm kar len
  if (confirm("Are you sure you want to clear all tasks?")) {
     todoUl.innerHTML = "";
    return;
  }
 
});
// filterForm.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   // filterInput.value;
//   const filterInput = filterInput.value.toLowerCase();
//   const filterValue = todoInput.value.toLowerCase();
// const merafilter=filterInput.value.filter(value=>  value=== filterValue);
// console.log(merafilter);

//   console.log(filterInput.value.toLowerCase());

//     todoUl.innerHTML += `<li id="taskLi">
//                  <input id="taskInput" type="text" value="${todoInput.value}" disabled />
//                 <button id="singleItemDelete">Delete</button>
//                 <button id="editInput">Edit</button>
//                 <button id="updateInput">Update</button>
//             </li>`;
  
 
//   todoInput.value = "";
  

// })