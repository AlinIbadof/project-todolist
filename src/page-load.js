import { cancelTask } from "./todos";

import {
  createTodoTitle,
  createTodoDesc,
  createTodoDate,
  createTodoPrio,
} from "./todosDisplay";

const content = document.querySelector(".content");

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerTitle = document.createElement("div");
  headerTitle.classList.add("headertitle");
  headerTitle.textContent = "To-Do List";

  const headerImage = document.createElement("img");
  headerImage.setAttribute("src", "../src/todolist.svg");
  headerImage.classList.add("headerimage");

  header.appendChild(headerImage);
  header.appendChild(headerTitle);

  content.appendChild(header);
}

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const homeBar = document.createElement("div");
  homeBar.classList.add("homebar");

  const homeImage = document.createElement("img");
  homeImage.setAttribute("src", "../src/home.svg");
  homeImage.classList.add("homeimage");

  const homeText = document.createElement("div");
  homeText.textContent = "Home";

  homeBar.appendChild(homeImage);
  homeBar.appendChild(homeText);

  //Projects section on sidebar
  const projectBar = document.createElement("div");
  projectBar.classList.add("projectbar");

  const projectImage = document.createElement("img");
  projectImage.setAttribute("src", "../src/list.svg");
  projectImage.classList.add("projectimage");

  const projectTitles = document.createElement("div");
  projectTitles.classList.add("title");
  projectTitles.textContent = "Projects";

  const addProjectImage = document.createElement("img");
  addProjectImage.setAttribute("src", "../src/plus.svg");
  addProjectImage.classList.add("addprojectimage");

  const projects = document.createElement("div");
  projects.classList.add("projects");

  projectBar.appendChild(projectImage);
  projectBar.appendChild(projectTitles);

  projects.appendChild(addProjectImage);
  projectBar.appendChild(projects);

  sidebar.appendChild(homeBar);
  sidebar.appendChild(projectBar);
  sidebar.appendChild(projects);

  content.appendChild(sidebar);
}

//Function that checks if there are items in localstorage and adds them to pageLoadTasks array.
let pageLoadTasks = [];
function checkLS() {
  if (localStorage.length != 0) {
    let keys = Object.keys(localStorage);

    for (let i = 0; i < localStorage.length; i++) {
      let task_deserialized = JSON.parse(localStorage.getItem(`${keys[i]}`));
      pageLoadTasks.push(task_deserialized);
    }
  }
}

// Function that display tasks if there are any in LS
function printLS() {
  if (pageLoadTasks.length != 0) {
    let i = 0;
    for (const task of pageLoadTasks) {
      const taskRow = document.createElement("div");
      taskRow.setAttribute("id", "taskrow");
      taskRow.setAttribute("class", `task`);

      const removeContainer = document.createElement("img");
      removeContainer.classList.add("taskremcontainer");
      removeContainer.setAttribute("src", "../src/delete.svg");
      removeContainer.setAttribute("id", "deletetaskimg");

      removeContainer.addEventListener("click", () => {
        cancelTask(removeContainer, task.title);
      });

      taskRow.appendChild(createTodoTitle(task));
      taskRow.appendChild(createTodoDesc(task));
      taskRow.appendChild(createTodoDate(task));
      taskRow.appendChild(createTodoPrio(task));
      taskRow.appendChild(removeContainer);

      const addTaskRow = document.querySelector(".addtodo");
      const content = document.querySelector(".todosection");
      content.insertBefore(taskRow, addTaskRow);
      i = i + 1;
    }
  }
}

function createTodo() {
  const homePage = document.querySelector(".homebar");
  homePage.style = "border-bottom: 1px solid black;";

  const todoSection = document.createElement("div");
  todoSection.classList.add("todosection");
  todoSection.classList.add("homepage");

  const todoNew = document.createElement("div");
  todoNew.classList.add("addtodo");

  const todoNewImage = document.createElement("img");
  todoNewImage.setAttribute("src", "../src/plus.svg");
  todoNewImage.setAttribute("id", "addtodoimage");

  const todoNewTask = document.createElement("div");
  todoNewTask.setAttribute("id", "addtodotext");
  todoNewTask.textContent = "Add task";

  todoNew.appendChild(todoNewImage);
  todoNew.appendChild(todoNewTask);

  todoSection.appendChild(todoNew);

  content.appendChild(todoSection);
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "@ Alin Ibadof";

  content.appendChild(footer);
}

function loadPage() {
  createHeader();
  createSidebar();
  createTodo();
  checkLS();
  printLS();
  createFooter();
}

export { createHeader, createSidebar, createTodo, createFooter, loadPage };
