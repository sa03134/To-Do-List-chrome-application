const title = document.querySelector(".hello h1");

const defaultClass = title.className;
function handleClick() {
  // const clickedClass = "clicked";
  // if (title.classList.contains(clickedClass)) {
  //   title.classList.remove(clickedClass);
  // } else {
  //   title.classList.add(clickedClass);
  // }

  title.classList.toggle("clicked");
}
title.addEventListener("click", handleClick);
