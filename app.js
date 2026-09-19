const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoUl = document.getElementById("todoUl");
const clearAllBtn = document.getElementById("clearAll");
const filterMainDive = document.getElementById("filterMainDive");
const filterInput = document.getElementById("filterInput");
const taskNotFound = document.getElementById("taskNotFound");

const hideHtmlIfEmptyTask = (tasksLength) => {
  if (tasksLength === 0) {
    taskNotFound.style.display = "block";
    filterMainDive.style.display = "none";
    clearAllBtn.style.display = "none";
  } else {
    taskNotFound.style.display = "none";
    filterMainDive.style.display = "block";
    clearAllBtn.style.display = "block";
  }
};

const genrateHtml = (e) => {
  todoUl.innerHTML += `<li id="taskLi"> 
    <input type="text" value="${e}" disabled /> 
    <div id="allBtnLi"> 
      <button class="singleItemDelete">Delete</button> 
      <button class="editInput">Edit</button> 
      <button class="updateInput">Update</button>
    </div> 
  </li>`;
};

const saveTaskInlocalStorge = () => {
  const allTask = todoUl.querySelectorAll("li");
  const currentTasks = [];

  allTask.forEach((li) => {
    currentTasks.push(li.children[0].value);
  });

  localStorage.setItem("TaskArr", JSON.stringify(currentTasks));
  hideHtmlIfEmptyTask(currentTasks.length); // اپڈیٹڈ لینتھ پاس کی
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!todoInput.value.trim()) {
    alert("Please add first task");
    return;
  }
  genrateHtml(todoInput.value);
  todoInput.value = "";
  saveTaskInlocalStorge();
});

todoUl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("singleItemDelete")) {
    e.target.closest("li").remove();
    saveTaskInlocalStorge();
    return;
  }

  if (e.target.classList.contains("editInput")) {
    const inputField = e.target.closest("li").children[0];
    inputField.disabled = false;
    inputField.focus();
    return;
  }

  if (e.target.classList.contains("updateInput")) {
    const inputField = e.target.closest("li").children[0];
    inputField.disabled = true;
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
  if (confirm("Are you sure you want to clear all tasks?")) {
    todoUl.innerHTML = "";
    localStorage.removeItem("TaskArr");
    hideHtmlIfEmptyTask(0); // یہاں ارے خالی ہو گئی تو 0 پاس کیا
  }
});

filterMainDive.addEventListener("keyup", (e) => {
  e.preventDefault();
  const searchValue = e.target.value.toLowerCase();
  const todoArr = todoUl.querySelectorAll("li");

  todoArr.forEach((single) => {
    const singleValue = single.children[0].value.trim().toLowerCase();
    if (singleValue.includes(searchValue)) {
      single.style.display = "flex";
    } else {
      single.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const getItem = JSON.parse(localStorage.getItem("TaskArr")) || [];
  hideHtmlIfEmptyTask(getItem.length);
  getItem.forEach((get) => {
    genrateHtml(get);
  });
});
