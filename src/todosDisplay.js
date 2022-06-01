function createTodoTitle(task) {
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

  return titleContainer;
}

function createTodoDesc(task) {
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

  return descriptionContainer;
}

function createTodoDate(task) {
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

  return dateContainer;
}

function createTodoPrio(task) {
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

  return priorityContainer;
}

export { createTodoTitle, createTodoDesc, createTodoDate, createTodoPrio };
