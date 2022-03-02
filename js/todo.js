const todoForm = document.querySelector("#todo-form");
const input = document.querySelector("#todo-form input");

const todoList = document.querySelector("#todo-list");

function handleSubmit(event) {
  event.preventDefault();
  const todoItem = document.createElement("li");
  const inputValue = input.value;
  todoItem.innerText = inputValue;
  todoList.appendChild(todoItem);
}

todoForm.addEventListener("submit", handleSubmit);
