const navlinks = document.querySelectorAll(".nav-link");
const windowPathName = window.location.pathname;
const checkboxes = document.querySelectorAll(".checkbox");
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

// line through when the checkbox is checked
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function (event) {
    const taskText = checkbox.parentElement.querySelector(".task-text");

    if (event.target.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  });
});

// remove image when a task is added
document.addEventListener("DOMContentLoaded", () => {
  function hideMainSvg() {
    mainSvg.classList.add("animate-svg");
    setTimeout(() => {
      mainSvg.style.display = "none";
    }, 500);
  }

  form.addEventListener("submit", () => {
    hideMainSvg();
  });

  // Check if the task list has at least one item
  if (taskList.children.length > 1) {
    hideMainSvg();
  }
});
