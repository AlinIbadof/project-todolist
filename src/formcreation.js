import { displayTask } from "./todos";

let taskNo = 0;

function createTitleForm() {
  const title = document.createElement("div");
  title.classList.add("tasktitle");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = `Title: `;
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");
  title.appendChild(titleLabel);
  title.appendChild(titleInput);

  return title;
}

function createDescriptionForm() {
  const description = document.createElement("div");
  description.classList.add("taskdescription");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = `Description: `;
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("name", "description");
  description.appendChild(descriptionLabel);
  description.appendChild(descriptionInput);

  return description;
}

function createDateForm() {
  const dueDate = document.createElement("div");
  dueDate.classList.add("taskduedate");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "duedate");
  dueDateLabel.textContent = `Due date: `;
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "datetime-local");
  dueDateInput.setAttribute("id", "duedate");
  dueDateInput.setAttribute("name", "duedate");
  dueDate.appendChild(dueDateLabel);
  dueDate.appendChild(dueDateInput);

  return dueDate;
}

function createPriorityForm() {
  const priority = document.createElement("div");
  priority.classList.add("taskpriority");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = `Priority: `;
  //select tag for dropdown menu
  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "priority");
  const lowPriority = document.createElement("option");
  lowPriority.setAttribute("value", "low");
  lowPriority.textContent = "Low";
  const mediumPriority = document.createElement("option");
  mediumPriority.setAttribute("value", "medium");
  mediumPriority.textContent = "Medium";
  const highPriority = document.createElement("option");
  highPriority.setAttribute("value", "high");
  highPriority.textContent = "High";
  prioritySelect.appendChild(lowPriority);
  prioritySelect.appendChild(mediumPriority);
  prioritySelect.appendChild(highPriority);
  priority.appendChild(priorityLabel);
  priority.appendChild(prioritySelect);

  return priority;
}
function cancelTask(e) {
  const plus = document.querySelector(".addtodo");
  plus.style.display = "flex";

  const parent = e.parentElement;

  const content = document.querySelector(".todosection");
  content.removeChild(parent);

  taskNo -= 1;
}

function submitTask() {
  const plus = document.querySelector(".addtodo");
  plus.style.display = "flex";

  displayTask();

  const task = document.querySelector(`.task${taskNo}`);

  const content = document.querySelector(".todosection");

  content.removeChild(task);
}

function createForm() {
  const todo = document.createElement("div");
  todo.setAttribute("id", "taskrow");
  todo.setAttribute("class", `task${taskNo}`);

  ///adding form
  const form = document.createElement("form");
  form.setAttribute("id", "form");

  const title = createTitleForm();
  form.appendChild(title);

  const description = createDescriptionForm();
  form.appendChild(description);

  const dueDate = createDateForm();
  form.appendChild(dueDate);

  const priority = createPriorityForm();
  form.appendChild(priority);

  todo.appendChild(form);

  const submit = document.createElement("div");
  submit.classList.add("tasksubmit");
  submit.textContent = "✓";

  const cancel = document.createElement("div");
  cancel.classList.add("taskcancel");
  cancel.textContent = "x";

  submit.addEventListener("click", () => submitTask(submit));
  cancel.addEventListener("click", () => cancelTask(cancel));

  todo.appendChild(submit);
  todo.appendChild(cancel);

  return todo;
}

export {
  createTitleForm,
  createDescriptionForm,
  createDateForm,
  createPriorityForm,
  cancelTask,
  submitTask,
  createForm,
};
