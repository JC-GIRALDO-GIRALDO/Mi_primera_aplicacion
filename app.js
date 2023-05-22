document.getElementById("main").addEventListener("submit", savetask);

function savetask(e) {
   let title = document.getElementById("title").value;
   let description = document.getElementById("description").value;

 const task = {
    title,
    description
 };
 localStorage.setItem("tasks", JSON.stringify(task));

  e.preventDefault();
}