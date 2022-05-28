(()=>{"use strict";const t=document.querySelector(".content");!function(){const e=document.createElement("div");e.classList.add("header");const d=document.createElement("div");d.classList.add("headertitle"),d.textContent="To-Do List";const n=document.createElement("img");n.setAttribute("src","../src/todolist.svg"),n.classList.add("headerimage"),e.appendChild(n),e.appendChild(d),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("sidebar");const d=document.createElement("div");d.classList.add("homebar");const n=document.createElement("img");n.setAttribute("src","../src/home.svg"),n.classList.add("homeimage");const i=document.createElement("div");i.textContent="Home",d.appendChild(n),d.appendChild(i);const c=document.createElement("div");c.classList.add("projectbar");const s=document.createElement("img");s.setAttribute("src","../src/list.svg"),s.classList.add("projectimage");const a=document.createElement("div");a.classList.add("title"),a.textContent="Projects";const o=document.createElement("img");o.setAttribute("src","../src/plus.svg"),o.classList.add("addprojectimage");const l=document.createElement("div");l.classList.add("projects"),c.appendChild(s),c.appendChild(a),l.appendChild(o),c.appendChild(l),e.appendChild(d),e.appendChild(c),e.appendChild(l),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("todosection");const d=document.createElement("div");d.classList.add("addtodo");const n=document.createElement("img");n.setAttribute("src","../src/plus.svg"),n.setAttribute("id","addtodoimage");const i=document.createElement("div");i.setAttribute("id","addtodotext"),i.textContent="Add task",d.appendChild(n),d.appendChild(i),e.appendChild(d),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("footer"),e.textContent="@ Alin Ibadof",t.appendChild(e)}(),function(){const t=document.querySelector(".todosection"),e=document.querySelector(".addtodo"),d=document.createElement("div");d.setAttribute("id","taskrow");const n=document.createElement("form");n.setAttribute("id","form");const i=document.createElement("div");i.classList.add("tasktitle");const c=document.createElement("label");c.setAttribute("for","title"),c.textContent="Title:";const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","title"),s.setAttribute("name","title"),i.appendChild(c),i.appendChild(s),n.appendChild(i);const a=document.createElement("div");a.classList.add("taskdescription");const o=document.createElement("label");o.setAttribute("for","description"),o.textContent="Description:";const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","description"),l.setAttribute("name","description"),a.appendChild(o),a.appendChild(l),n.appendChild(a);const r=document.createElement("div");r.classList.add("taskduedate");const m=document.createElement("label");m.setAttribute("for","duedate"),m.textContent="Due Date:";const p=document.createElement("input");p.setAttribute("type","datetime-local"),p.setAttribute("id","duedate"),p.setAttribute("name","duedate"),r.appendChild(m),r.appendChild(p),n.appendChild(r);const u=document.createElement("div");u.classList.add("taskpriority");const C=document.createElement("label");C.setAttribute("for","priority"),C.textContent="Priority";const h=document.createElement("select");h.setAttribute("name","priority"),h.setAttribute("id","priority");const b=document.createElement("option");b.setAttribute("value","low"),b.textContent="Low";const E=document.createElement("option");E.setAttribute("value","medium"),E.textContent="Medium";const A=document.createElement("option");A.setAttribute("value","high"),A.textContent="High",h.appendChild(b),h.appendChild(E),h.appendChild(A),u.appendChild(C),u.appendChild(h),n.appendChild(u),d.appendChild(n);const v=document.createElement("div");v.classList.add("tasksubmit"),v.textContent="✓";const L=document.createElement("div");L.classList.add("taskcancel"),L.textContent="x",d.appendChild(v),d.appendChild(L),t.insertBefore(d,e)}()})();