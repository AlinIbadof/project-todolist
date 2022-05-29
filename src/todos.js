import { createForm, cancelTask } from "./formcreation";

const taskDisplay = (title, description, date, priority) => {
  return { title, description, date, priority };
};

function addTask() {
  const todosection = document.querySelector(".todosection");
  const plus = document.querySelector(".addtodo");

  todosection.insertBefore(createForm(), plus);

  plus.style.display = "none";
}

function displayTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("duedate").value;
  const priority = document.getElementById("priority").value;

  const task = taskDisplay(title, description, date, priority);

  const taskRow = document.createElement("div");
  taskRow.setAttribute("id", "taskrow");
  taskRow.setAttribute("class", `task`);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("tasktitle");
  titleContainer.textContent = `Title: ${task.title}`;

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("taskdescription");
  descriptionContainer.textContent = `Description: ${task.description}`;

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("taskduedate");
  dateContainer.textContent = `Due date: ${task.date}`;

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("taskpriority");
  priorityContainer.textContent = `Priority: ${task.priority}`;

  const removeContainer = document.createElement("img");
  removeContainer.classList.add("taskremcontainer");
  removeContainer.setAttribute("src", "../src/delete.svg");
  removeContainer.setAttribute("id", "deletetaskimg");

  removeContainer.addEventListener("click", () => cancelTask(removeContainer));

  taskRow.appendChild(titleContainer);
  taskRow.appendChild(descriptionContainer);
  taskRow.appendChild(dateContainer);
  taskRow.appendChild(priorityContainer);
  taskRow.appendChild(removeContainer);

  const addTaskRow = document.querySelector(".addtodo");
  const content = document.querySelector(".todosection");
  content.insertBefore(taskRow, addTaskRow);
}

export { displayTask, addTask };

//move form creation to separate module
//clean displaytask function
//style created tasks
//make title required
//look into local storage
