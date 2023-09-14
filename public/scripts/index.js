const checkboxes = document.querySelectorAll(".checkbox");

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
