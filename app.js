const title = document.querySelector(".hello h1");

// function handleTitleClick() {
//   console.log("Title was clicked");
// }

function handleMouseEnter() {
  title.style.color = "blue";
}

function handleMouseLeave() {
  title.style.color = "black";
}

const color = ["red", "purple", "orange", "blue", "green", "yellow"];
let colorIdx = 0;

function handleResize() {
  colorIdx++;
  loopIdx = colorIdx % 6;
  document.body.style.background = color[loopIdx];
  title.style.color = color[6 - loopIdx];
}

// title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("mouseover", handleResize);
