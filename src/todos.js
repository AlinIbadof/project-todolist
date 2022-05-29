import { createForm } from "./formcreation";

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

  if (tasks.length != 0) {
    const content = document.querySelector(".todosection");
    const allrows = document.querySelectorAll(".task");
    allrows.forEach((e) => content.removeChild(e));
  }

  for (const task of tasks) {
    const taskRow = document.createElement("div");
    taskRow.setAttribute("id", "taskrow");
    taskRow.setAttribute("class", `task`);

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("tasktitle");
    const titleText = document.createElement("div");
    titleText.textContent = `Title: `;
    const titleWritten = document.createElement("div");
    titleWritten.textContent = `${task.title}`;
    titleText.classList.add("task-left");
    titleWritten.classList.add("task-right");
    titleContainer.appendChild(titleText);
    titleContainer.appendChild(titleWritten);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("taskdescription");
    const descriptionText = document.createElement("div");
    descriptionText.textContent = `Description: `;
    const descriptionWritten = document.createElement("div");
    descriptionWritten.textContent = `${task.description}`;
    descriptionText.classList.add("task-left");
    descriptionWritten.classList.add("task-right");
    descriptionContainer.appendChild(descriptionText);
    descriptionContainer.appendChild(descriptionWritten);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("taskduedate");
    const dateText = document.createElement("div");
    dateText.textContent = `Due Date: `;
    const dateWritten = document.createElement("div");
    dateWritten.textContent = `${task.date}`;
    dateText.classList.add("task-left");
    dateWritten.classList.add("task-right");
    dateContainer.appendChild(dateText);
    dateContainer.appendChild(dateWritten);

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("taskpriority");
    const priorityText = document.createElement("div");
    priorityText.textContent = `Priority: `;
    const priorityWritten = document.createElement("div");
    priorityWritten.textContent = `${task.priority}`;
    priorityText.classList.add("task-left");
    priorityWritten.classList.add("task-right");
    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(priorityWritten);

    const removeContainer = document.createElement("img");
    removeContainer.classList.add("taskremcontainer");
    removeContainer.setAttribute("src", "../src/delete.svg");
    removeContainer.setAttribute("id", "deletetaskimg");

    removeContainer.addEventListener("click", () =>
      cancelTask(removeContainer)
    );

    taskRow.appendChild(titleContainer);
    taskRow.appendChild(descriptionContainer);
    taskRow.appendChild(dateContainer);
    taskRow.appendChild(priorityContainer);
    taskRow.appendChild(removeContainer);

    const addTaskRow = document.querySelector(".addtodo");
    const content = document.querySelector(".todosection");
    content.insertBefore(taskRow, addTaskRow);
  }
}

// This function finds out the index of the task, and then removes it from the "tasks" array
function cancelTask(e) {
  const plus = document.querySelector(".addtodo");
  plus.style.display = "flex";

  const parent = e.parentElement;
  tasks.splice(Array.from(parent.parentElement).indexOf(parent) + 1, 1);

  const content = document.querySelector(".todosection");
  content.removeChild(parent);
}

export { displayTask, addTask };

//make title required
//look into local storage

// make task objects inside of an array;
// when displayfunction is called, run a for loop through array, and display all
// this will help when creating new projects.
