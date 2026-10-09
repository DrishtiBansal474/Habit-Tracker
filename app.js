const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");

function addHabit() {
  const habitName = habitInput.value.trim();

  if (habitName === "") {
    alert("Please enter a habit!");
    return;
  }
  const habitItem = document.createElement("li");

  const habitText = document.createElement("span");
  habitText.textContent = habitName;

  habitText.addEventListener("click", () => {
    habitItem.classList.toggle("completed");
  });
