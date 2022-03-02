const todoForm = document.querySelector("#todo-form");
const toDoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", toDos);
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
  button.innerText = "X?";
  todoList.appendChild(li);

  // todoList.querySelector("li").appendChild(span);
  // localStorage.setItem("todo", newTodo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

if (localStorage.getItem("todo") === null) {
  // 상관없음
} else {
  // 불러와 줘야함.
  // for()
}

todoForm.addEventListener("submit", handleToDoSubmit);
