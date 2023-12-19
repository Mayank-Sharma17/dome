const navlinks = document.querySelectorAll(".nav-link");
const windowPathName = window.location.pathname;
const form = document.querySelector("form");
const inputField = document.querySelector(".task-input");
const taskList = document.querySelector(".list-group");
const mainSvg = document.querySelector(".main-svg");

// Active nav links
navlinks.forEach((navlink) => {
  const currPathName = new URL(navlink.href).pathname;

  if (windowPathName === currPathName) {
    navlink.classList.add("active");
  }
});

// remove image when a task is added
document.addEventListener("DOMContentLoaded", () => {
  let codeExecuted = false;

  function hideImages() {
    mainSvg.style.display = "none";
  }

  // Check if the task list has at least one item
  if (taskList.children.length > 0 && !codeExecuted) {
    hideImages();
    codeExecuted = true; // prevent repeated execution
  }
});
