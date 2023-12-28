const navlinks = document.querySelectorAll(".nav-link");
const windowPathName = window.location.pathname;
const form = document.querySelector("form");
const inputField = document.querySelector(".task-input");
const taskList = document.querySelector(".list-group");
const mainSvg = document.querySelector(".main-svg");
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const taskId = this.getAttribute("data-task-id");
    const newStatus = this.checked;

    fetch(`${windowPathName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        status: newStatus,
        currtaskid: taskId,
      }),
    })
      .then((response) => {
        console.log("Raw server response:", response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });
});

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
