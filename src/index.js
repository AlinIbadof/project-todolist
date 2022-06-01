import { loadPage } from "./page-load";
import { addTask } from "./todos";

loadPage();

const addTaskBtn = document.querySelector(".addtodo");
addTaskBtn.addEventListener("click", () => addTask());
