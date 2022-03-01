const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleLink(event) {
  event.preventDefault();
  console.dir(event);

  // document.body.classList.add("trick");
  // document.body.style.cursor = "none";
}

const linkAnchor = document.querySelector("a");
linkAnchor.addEventListener("click", handleLink);

const fakeCursor = document.querySelector("img");

document.addEventListener("click", function (event) {
  document.body.requestPointerLock();
  fakeCursor.classList.toggle("display");
});
document.addEventListener("mousemove", function (event) {
  console.log(event);
  // console.log(String(event.x));

  let xValue = fakeCursor.style.left;
  xValue.replace("px", "");
  console.log(xValue);
  // fakeCursor.style.left += String(event.movementX) + "px";
  // fakeCursor.style.top += String(event.clientY) + "px";

  // console.log(fakeCursor.style.left);
  // console.log(fakeCursor.style.top);
  // console.log(event.movementX);
  // console.log(event.movementY);
});

document.body.addEventListener("pointerlockchange", function (event) {
  if (document.pointerLockElement === document.body) {
  }
});
