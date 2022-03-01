const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

if (localStorage.getItem("username")) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

function handleSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  greeting.innerText = `HELLO! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", handleSubmit);
