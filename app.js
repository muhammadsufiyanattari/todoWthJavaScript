const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const submit = document.getElementById("submit");
const todoUl = document.getElementById("todoUl");
const clearAllBtn = document.getElementById("clearAll");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("Please enter a task");
    return;
  }
  todoInput.value;
  console.log(todoInput.value);
  todoUl.innerHTML += `<li id="taskLi">
                 <input id="taskInput" type="text" value=${todoInput.value} disabled />
                <button id="singleItemDelete">Delete</button>
                <button id="editInput">Edit</button>
                <button id="updateInput">Update</button>
            </li>`;
  const taskInput = document.getElementById("taskInput");
  const editInput = document.getElementById("editInput");
  const updateInput = document.getElementById("updateInput");

  editInput.addEventListener("click", (e) => {
    e.preventDefault();
    taskInput.disabled = false;
    taskInput.focus();
    updateInput.addEventListener("click", (e) => {
      e.preventDefault();
      taskInput.disabled = true;
    });
  });
  todoInput.value = "";
});
clearAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoUl.innerHTML === "") {
    alert("No tasks to clear");
    return;
  }
  // ye confirm ke kam ata he ke sab delet karne se phele user se reconfirm kar len
  confirm("Are you sure you want to clear all tasks?");
  todoUl.innerHTML = "";
});
