(()=>{"use strict";const t=document.querySelector(".content");let e=0;function d(){const t=document.createElement("div");t.setAttribute("id","taskrow"),t.setAttribute("class",`task${e}`);const d=document.createElement("form");d.setAttribute("id","form");const o=function(){const t=document.createElement("div");t.classList.add("tasktitle");const e=document.createElement("label");e.setAttribute("for","title"),e.textContent="Title: ";const d=document.createElement("input");return d.setAttribute("type","text"),d.setAttribute("id","title"),d.setAttribute("name","title"),t.appendChild(e),t.appendChild(d),t}();d.appendChild(o);const s=function(){const t=document.createElement("div");t.classList.add("taskdescription");const e=document.createElement("label");e.setAttribute("for","description"),e.textContent="Description: ";const d=document.createElement("input");return d.setAttribute("type","text"),d.setAttribute("id","description"),d.setAttribute("name","description"),t.appendChild(e),t.appendChild(d),t}();d.appendChild(s);const i=function(){const t=document.createElement("div");t.classList.add("taskduedate");const e=document.createElement("label");e.setAttribute("for","duedate"),e.textContent="Due date: ";const d=document.createElement("input");return d.setAttribute("type","datetime-local"),d.setAttribute("id","duedate"),d.setAttribute("name","duedate"),t.appendChild(e),t.appendChild(d),t}();d.appendChild(i);const a=function(){const t=document.createElement("div");t.classList.add("taskpriority");const e=document.createElement("label");e.setAttribute("for","priority"),e.textContent="Priority: ";const d=document.createElement("select");d.setAttribute("name","priority"),d.setAttribute("id","priority");const n=document.createElement("option");n.setAttribute("value","low"),n.textContent="Low";const c=document.createElement("option");c.setAttribute("value","medium"),c.textContent="Medium";const o=document.createElement("option");return o.setAttribute("value","high"),o.textContent="High",d.appendChild(n),d.appendChild(c),d.appendChild(o),t.appendChild(e),t.appendChild(d),t}();d.appendChild(a),t.appendChild(d);const l=document.createElement("div");l.classList.add("tasksubmit"),l.textContent="✓";const r=document.createElement("div");return r.classList.add("taskcancel"),r.textContent="x",l.addEventListener("click",(()=>function(){document.querySelector(".addtodo").style.display="flex",function(){if(function(){const t={title:document.getElementById("title").value,description:document.getElementById("description").value,date:document.getElementById("duedate").value,priority:document.getElementById("priority").value};n.push(t)}(),0!=n.length){const t=document.querySelector(".todosection");document.querySelectorAll(".task").forEach((e=>t.removeChild(e)))}let t=0;localStorage.clear();for(const e of n){const d=document.createElement("div");d.setAttribute("id","taskrow"),d.setAttribute("class","task");const n=document.createElement("div");n.classList.add("tasktitle");const o=document.createElement("div");o.textContent="Title: ";const s=document.createElement("div");s.textContent=`${e.title}`,o.classList.add("task-left"),s.classList.add("task-right"),n.appendChild(o),n.appendChild(s);const i=document.createElement("div");i.classList.add("taskdescription");const a=document.createElement("div");a.textContent="Description: ";const l=document.createElement("div");l.textContent=`${e.description}`,a.classList.add("task-left"),l.classList.add("task-right"),i.appendChild(a),i.appendChild(l);const r=document.createElement("div");r.classList.add("taskduedate");const m=document.createElement("div");m.textContent="Due Date: ";const u=document.createElement("div");u.textContent=`${e.date}`,m.classList.add("task-left"),u.classList.add("task-right"),r.appendChild(m),r.appendChild(u);const p=document.createElement("div");p.classList.add("taskpriority");const C=document.createElement("div");C.textContent="Priority: ";const h=document.createElement("div");h.textContent=`${e.priority}`,C.classList.add("task-left"),h.classList.add("task-right"),p.appendChild(C),p.appendChild(h);const E=document.createElement("img");E.classList.add("taskremcontainer"),E.setAttribute("src","../src/delete.svg"),E.setAttribute("id","deletetaskimg"),E.addEventListener("click",(()=>c(E))),d.appendChild(n),d.appendChild(i),d.appendChild(r),d.appendChild(p),d.appendChild(E);const v=document.querySelector(".addtodo");document.querySelector(".todosection").insertBefore(d,v);let b=JSON.stringify(e);localStorage.setItem(`${t}`,b),t+=1}}();const t=document.querySelector(`.task${e}`);document.querySelector(".todosection").removeChild(t)}())),r.addEventListener("click",(()=>function(t){document.querySelector(".addtodo").style.display="flex";const d=t.parentElement;document.querySelector(".todosection").removeChild(d),e-=1}(r))),t.appendChild(l),t.appendChild(r),t}let n=[];function c(t){document.querySelector(".addtodo").style.display="flex";const e=t.parentElement;n.splice(Array.from(e.parentElement).indexOf(e)+1,1),localStorage.removeItem(`${Array.from(e.parentElement).indexOf(e)+1}`),document.querySelector(".todosection").removeChild(e)}!function(){const e=document.createElement("div");e.classList.add("header");const d=document.createElement("div");d.classList.add("headertitle"),d.textContent="To-Do List";const n=document.createElement("img");n.setAttribute("src","../src/todolist.svg"),n.classList.add("headerimage"),e.appendChild(n),e.appendChild(d),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("sidebar");const d=document.createElement("div");d.classList.add("homebar");const n=document.createElement("img");n.setAttribute("src","../src/home.svg"),n.classList.add("homeimage");const c=document.createElement("div");c.textContent="Home",d.appendChild(n),d.appendChild(c);const o=document.createElement("div");o.classList.add("projectbar");const s=document.createElement("img");s.setAttribute("src","../src/list.svg"),s.classList.add("projectimage");const i=document.createElement("div");i.classList.add("title"),i.textContent="Projects";const a=document.createElement("img");a.setAttribute("src","../src/plus.svg"),a.classList.add("addprojectimage");const l=document.createElement("div");l.classList.add("projects"),o.appendChild(s),o.appendChild(i),l.appendChild(a),o.appendChild(l),e.appendChild(d),e.appendChild(o),e.appendChild(l),t.appendChild(e)}(),function(){document.querySelector(".homebar").style="border-bottom: 1px solid black;";const e=document.createElement("div");e.classList.add("todosection"),e.classList.add("homepage");const d=document.createElement("div");d.classList.add("addtodo");const n=document.createElement("img");n.setAttribute("src","../src/plus.svg"),n.setAttribute("id","addtodoimage");const c=document.createElement("div");c.setAttribute("id","addtodotext"),c.textContent="Add task",d.appendChild(n),d.appendChild(c),e.appendChild(d),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("footer"),e.textContent="@ Alin Ibadof",t.appendChild(e)}(),document.querySelector(".addtodo").addEventListener("click",(()=>function(){const t=document.querySelector(".todosection"),e=document.querySelector(".addtodo");t.insertBefore(d(),e),e.style.display="none"}()))})();