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

function createTodo() {
  const todoSection = document.createElement("div");
  todoSection.classList.add("todosection");

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
  createFooter();
}

export { createHeader, createSidebar, createTodo, createFooter, loadPage };
