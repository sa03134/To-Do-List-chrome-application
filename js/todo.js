const todoForm = document.querySelector("#todo-form");
const toDoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // console.log(toDos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  console.dir(event.target);
  li.remove();
  // localStorage.removeItem();
  // const todoNow = localStorage.getItem(TODOS_KEY);
  // console.log(todoNow);
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

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach(toDos.push);
  // console.log(toDos);
}

todoForm.addEventListener("submit", handleToDoSubmit);
