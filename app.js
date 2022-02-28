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

// title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
