const navlinks = document.querySelectorAll(".nav-link");
const windowPathName = window.location.pathname;
const form = document.querySelector("form");
const inputField = document.querySelector(".task-input");
const taskList = document.querySelector(".list-group");
const mainSvg = document.querySelector(".main-svg");
const checkboxes = document.querySelectorAll(".checkbox");
const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".list-item");

// Active nav links
navlinks.forEach((navlink) => {
  const currPathName = new URL(navlink.href).pathname;

  if (windowPathName === currPathName) {
    navlink.classList.add("active");
  }
});

// send asyc req to update the status of the checkbox
function handleCheckboxStatus() {
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
  }).catch((err) => console.log(err));
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", handleCheckboxStatus);
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

// Sortable list
items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Adding dragging class to item after a delay
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  // Removing dragging class from item on dragend event
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  // Getting all items except currently dragging and making array of them
  let siblings = [
    ...sortableList.querySelectorAll(".list-item:not(.dragging)"),
  ];

  // Finding the sibling after which the dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Inserting the dragging item before the found sibling
  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
