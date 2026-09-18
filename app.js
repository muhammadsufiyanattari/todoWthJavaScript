const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const submit = document.getElementById("submit");
const todoUl = document.getElementById("todoUl");
const clearAllBtn = document.getElementById("clearAll");
const taskInput = document.getElementById("taskInput");
const singleItemDelete = document.getElementById("singleItemDelete");
const editInput = document.getElementById("editInput");
const updateInput = document.getElementById("updateInput");
const filterMainDive = document.getElementById("filterMainDive");
const filterInput = document.getElementById("filterInput");
const taskNotFound = document.getElementById("taskNotFound");
const genrateHtml = (e) => {
  todoUl.innerHTML += `<li id="taskLi">
                 <input id="taskInput" type="text" value="${e}" disabled />
              <div id="allBtnLi">  <button id="singleItemDelete">Delete</button>
                <button id="editInput">Edit</button>
                <button id="updateInput">Update</button></div>
            </li>`;
};
const saveTaskInlocalStorge = () => {
  const addInArr = [];
  const allTask = todoUl.querySelectorAll("li");
  allTask.forEach((li) => {
    addInArr.push(li.children[0].value);
    // console.log(addInArr);

    localStorage.setItem("TaskArr", JSON.stringify(addInArr));
  });
};



todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!todoInput.value) {
    alert("Please add  first task");
    return;
  }
  // todoInput.value;
  // console.log(todoInput.value);
  genrateHtml(todoInput.value);

  todoInput.value = "";
  saveTaskInlocalStorge();
});
todoUl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id === "singleItemDelete") {
    // console.log(e.target.parentElement..parentElement);
    console.log(e);
    e.target.parentElement.parentElement.remove();
      saveTaskInlocalStorge();

    return;
  }
  if (e.target.id === "editInput") {
    // console.log(e.target.parentElement.children[0]);
// console.log(e.target.parentElement.parentElement);

    e.target.parentElement.parentElement.children[0].disabled = false;

    e.target.parentElement.children[0].focus();
      saveTaskInlocalStorge();

    return;
  }
  if (e.target.id === "updateInput") {
    // console.log(e.target.parentElement.parentElement.children[0]);
    e.target.parentElement.parentElement.children[0].disabled = true;
      saveTaskInlocalStorge();

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
    localStorage.removeItem("TaskArr");
      saveTaskInlocalStorge();

    return;
  }
});
/*filterMainDive.addEventListener("submit",(e)=>{
  e.preventDefault();
// console.log( filterInput.value);
//  console.log(todoUl)
const filterValue=filterInput.value.toLowerCase();
const taskArr=[]
const allElements=todoUl.querySelectorAll("li");
allElements.forEach((li)=>{
  const taskValue=li.querySelector("input").value.toLowerCase();
  // console.log(taskValue);
  const OutputFilterValue=li.querySelector("input").value;
  if (taskValue.includes(filterValue)) {
    // console.log("hello sufiyan");

    todoUl.innerHTML = `<li id="taskLi">
                 <input class="filterOutPut" id="taskInput" type="text" value="${OutputFilterValue}" disabled />
                <button id="singleItemDelete">Delete</button>
                <button id="editInput">Edit</button>
                <button id="updateInput">Update</button>
            </li>`;
            filterInput.value="";
            return;
  }
  else{
    // alert("No task found");
    // return;
  }
})
})*/
filterMainDive.addEventListener("keyup", (e) => {
  e.preventDefault();

  console.log(e.target.value);
  const searchValue = e.target.value.toLowerCase();
  const todoArr = todoUl.querySelectorAll("li");

  todoArr.forEach((single) => {
    console.log(single.children[0].value);
    const singleValue = single.children[0].value.trim().toLowerCase();
    if (singleValue.includes(searchValue)) {
      console.log("hello");
      single.style.display = "flex";
    } else {
      single.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const getItem = JSON.parse(localStorage.getItem("TaskArr"));
  console.log(getItem);
  getItem.forEach((get) => {
    genrateHtml(get);
  });
});
