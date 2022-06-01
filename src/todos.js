import { createForm } from "./formcreation";
import {
  createTodoTitle,
  createTodoDesc,
  createTodoDate,
  createTodoPrio,
} from "./todosDisplay";

const taskDisplay = (title, description, date, priority) => {
  return { title, description, date, priority };
};

function addTask() {
  const todosection = document.querySelector(".todosection");
  const plus = document.querySelector(".addtodo");

  todosection.insertBefore(createForm(), plus);

  plus.style.display = "none";
}

let tasks = [];

//IIFE Function that checks if there are items in localstorage and adds them to tasks array.
const checkLS = (function () {
  if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let task_deserialized = JSON.parse(localStorage.getItem(`${i}`));
      tasks.push(task_deserialized);
    }
  }
})();

function createTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("duedate").value;
  const priority = document.getElementById("priority").value;

  const task = taskDisplay(title, description, date, priority);
  tasks.push(task);
}

function displayTask() {
  createTask();

  //removing all content in todosection
  if (tasks.length != 0) {
    const content = document.querySelector(".todosection");
    const allrows = document.querySelectorAll(".task");
    allrows.forEach((e) => content.removeChild(e));
  }
  let i = 0;
  localStorage.clear();

  //adding content in todosection
  for (const task of tasks) {
    const taskRow = document.createElement("div");
    taskRow.setAttribute("id", "taskrow");
    taskRow.setAttribute("class", `task`);

    const removeContainer = document.createElement("img");
    removeContainer.classList.add("taskremcontainer");
    removeContainer.setAttribute("src", "../src/delete.svg");
    removeContainer.setAttribute("id", "deletetaskimg");

    removeContainer.addEventListener("click", () =>
      cancelTask(removeContainer)
    );

    taskRow.appendChild(createTodoTitle(task));
    taskRow.appendChild(createTodoDesc(task));
    taskRow.appendChild(createTodoDate(task));
    taskRow.appendChild(createTodoPrio(task));
    taskRow.appendChild(removeContainer);

    const addTaskRow = document.querySelector(".addtodo");
    const content = document.querySelector(".todosection");
    content.insertBefore(taskRow, addTaskRow);

    //adding the items also to localstorage
    let task_serialized = JSON.stringify(task);
    localStorage.setItem(`${i}`, task_serialized);
    i = i + 1;
  }
}

// This function finds out the index of the task, and then removes it from the "tasks" array (when delete icon from a task is pressed)
function cancelTask(e) {
  const plus = document.querySelector(".addtodo");
  plus.style.display = "flex";

  const parent = e.parentElement;
  tasks.splice(Array.from(parent.parentElement).indexOf(parent) + 1, 1);

  //removes item also from localstorage
  localStorage.removeItem(
    `${Array.from(parent.parentElement).indexOf(parent) + 1}`
  );

  const content = document.querySelector(".todosection");
  content.removeChild(parent);
}

export { displayTask, addTask, cancelTask };
