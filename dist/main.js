(()=>{"use strict";let t=0;function e(){const e=document.createElement("div");e.setAttribute("id","taskrow"),e.setAttribute("class",`task${t}`);const a=document.createElement("form");a.setAttribute("id","form");const l=function(){const t=document.createElement("div");t.classList.add("tasktitle");const e=document.createElement("label");e.setAttribute("for","title"),e.textContent="Title: ";const n=document.createElement("input");return n.setAttribute("type","text"),n.setAttribute("id","title"),n.setAttribute("name","title"),t.appendChild(e),t.appendChild(n),t}();a.appendChild(l);const r=function(){const t=document.createElement("div");t.classList.add("taskdescription");const e=document.createElement("label");e.setAttribute("for","description"),e.textContent="Description: ";const n=document.createElement("input");return n.setAttribute("type","text"),n.setAttribute("id","description"),n.setAttribute("name","description"),t.appendChild(e),t.appendChild(n),t}();a.appendChild(r);const u=function(){const t=document.createElement("div");t.classList.add("taskduedate");const e=document.createElement("label");e.setAttribute("for","duedate"),e.textContent="Due date: ";const n=document.createElement("input");return n.setAttribute("type","datetime-local"),n.setAttribute("id","duedate"),n.setAttribute("name","duedate"),t.appendChild(e),t.appendChild(n),t}();a.appendChild(u);const m=function(){const t=document.createElement("div");t.classList.add("taskpriority");const e=document.createElement("label");e.setAttribute("for","priority"),e.textContent="Priority: ";const n=document.createElement("select");n.setAttribute("name","priority"),n.setAttribute("id","priority");const d=document.createElement("option");d.setAttribute("value","low"),d.textContent="Low";const o=document.createElement("option");o.setAttribute("value","medium"),o.textContent="Medium";const c=document.createElement("option");return c.setAttribute("value","high"),c.textContent="High",n.appendChild(d),n.appendChild(o),n.appendChild(c),t.appendChild(e),t.appendChild(n),t}();a.appendChild(m),e.appendChild(a);const p=document.createElement("div");p.classList.add("tasksubmit"),p.textContent="✓";const h=document.createElement("div");return h.classList.add("taskcancel"),h.textContent="x",p.addEventListener("click",(()=>function(){document.querySelector(".addtodo").style.display="flex",function(){if(function(){const t={title:document.getElementById("title").value,description:document.getElementById("description").value,date:document.getElementById("duedate").value,priority:document.getElementById("priority").value};i.push(t)}(),0!=i.length){const t=document.querySelector(".todosection");document.querySelectorAll(".task").forEach((e=>t.removeChild(e)))}localStorage.clear();for(const t of i){const e=document.createElement("div");e.setAttribute("id","taskrow"),e.setAttribute("class","task");const i=document.createElement("img");i.classList.add("taskremcontainer"),i.setAttribute("src","../src/delete.svg"),i.setAttribute("id","deletetaskimg"),i.addEventListener("click",(()=>s(i,t.title))),e.appendChild(n(t)),e.appendChild(d(t)),e.appendChild(o(t)),e.appendChild(c(t)),e.appendChild(i);const a=document.querySelector(".addtodo");document.querySelector(".todosection").insertBefore(e,a);let l=JSON.stringify(t);localStorage.setItem(`${t.title}`,l)}}();const e=document.querySelector(`.task${t}`);document.querySelector(".todosection").removeChild(e)}())),h.addEventListener("click",(()=>function(e){document.querySelector(".addtodo").style.display="flex";const n=e.parentElement;document.querySelector(".todosection").removeChild(n),t-=1}(h))),e.appendChild(p),e.appendChild(h),e}function n(t){const e=document.createElement("div");e.classList.add("tasktitle");const n=document.createElement("div");n.textContent="Title: ";const d=document.createElement("div");return d.textContent=`${t.title}`,n.classList.add("task-left"),d.classList.add("task-right"),e.appendChild(n),e.appendChild(d),e}function d(t){const e=document.createElement("div");e.classList.add("taskdescription");const n=document.createElement("div");n.textContent="Description: ";const d=document.createElement("div");return d.textContent=`${t.description}`,n.classList.add("task-left"),d.classList.add("task-right"),e.appendChild(n),e.appendChild(d),e}function o(t){const e=document.createElement("div");e.classList.add("taskduedate");const n=document.createElement("div");n.textContent="Due Date: ";const d=document.createElement("div");return d.textContent=`${t.date}`,n.classList.add("task-left"),d.classList.add("task-right"),e.appendChild(n),e.appendChild(d),e}function c(t){const e=document.createElement("div");e.classList.add("taskpriority");const n=document.createElement("div");n.textContent="Priority: ";const d=document.createElement("div");return d.textContent=`${t.priority}`,n.classList.add("task-left"),d.classList.add("task-right"),e.appendChild(n),e.appendChild(d),e}let i=[];function s(t,e){document.querySelector(".addtodo").style.display="flex";const n=t.parentElement;i.splice(Array.from(n.parentElement).indexOf(n)+1,1),localStorage.removeItem(e),document.querySelector(".todosection").removeChild(n)}!function(){if(0!=localStorage.length){let t=Object.keys(localStorage);for(let e=0;e<localStorage.length;e++){let n=JSON.parse(localStorage.getItem(`${t[e]}`));i.push(n)}}}();const a=document.querySelector(".content");let l=[];!function(){const t=document.createElement("div");t.classList.add("header");const e=document.createElement("div");e.classList.add("headertitle"),e.textContent="To-Do List";const n=document.createElement("img");n.setAttribute("src","../src/todolist.svg"),n.classList.add("headerimage"),t.appendChild(n),t.appendChild(e),a.appendChild(t)}(),function(){const t=document.createElement("div");t.classList.add("sidebar");const e=document.createElement("div");e.classList.add("homebar");const n=document.createElement("img");n.setAttribute("src","../src/home.svg"),n.classList.add("homeimage");const d=document.createElement("div");d.textContent="Home",e.appendChild(n),e.appendChild(d),t.appendChild(e),a.appendChild(t)}(),function(){document.querySelector(".homebar").style="border-bottom: 1px solid black;";const t=document.createElement("div");t.classList.add("todosection"),t.classList.add("homepage");const e=document.createElement("div");e.classList.add("addtodo");const n=document.createElement("img");n.setAttribute("src","../src/plus.svg"),n.setAttribute("id","addtodoimage");const d=document.createElement("div");d.setAttribute("id","addtodotext"),d.textContent="Add task",e.appendChild(n),e.appendChild(d),t.appendChild(e),a.appendChild(t)}(),function(){if(0!=localStorage.length){let t=Object.keys(localStorage);for(let e=0;e<localStorage.length;e++){let n=JSON.parse(localStorage.getItem(`${t[e]}`));l.push(n)}}}(),function(){if(0!=l.length)for(const t of l){const e=document.createElement("div");e.setAttribute("id","taskrow"),e.setAttribute("class","task");const i=document.createElement("img");i.classList.add("taskremcontainer"),i.setAttribute("src","../src/delete.svg"),i.setAttribute("id","deletetaskimg"),i.addEventListener("click",(()=>{s(i,t.title)})),e.appendChild(n(t)),e.appendChild(d(t)),e.appendChild(o(t)),e.appendChild(c(t)),e.appendChild(i);const a=document.querySelector(".addtodo");document.querySelector(".todosection").insertBefore(e,a)}}(),function(){const t=document.createElement("div");t.classList.add("footer"),t.textContent="@ Alin Ibadof",a.appendChild(t)}(),document.querySelector(".addtodo").addEventListener("click",(()=>function(){const t=document.querySelector(".todosection"),n=document.querySelector(".addtodo");t.insertBefore(e(),n),n.style.display="none"}()))})();