function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var todoList = document.getElementById("todoList");
  
  if (todoInput.value === "") {
    alert("Please enter a todo!");
    return;
  }
  
  var li = document.createElement("li");
  li.textContent = todoInput.value;
  
  var deleteButton = document.createElement("span");
  deleteButton.textContent = "❌";
  deleteButton.className = "delete";
  deleteButton.onclick = function() {
    li.remove();
  };
  
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  
  todoInput.value = "";
}
