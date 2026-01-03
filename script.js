let background_box = document.querySelector(".background_box");
let toggle_box = document.querySelector(".toggle_box");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");
let music = document.getElementById("background-music");

toggle_box.onclick = function() {
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    circle.style.transform = "translateX(23px)";
    circle.style.backgroundColor = "#000";
    toggle_box.style.backgroundColor = "#fff";

    music.play();
  } else {
    circle.style.transform = "translateX(0px)";
    circle.style.backgroundColor = "#fff";
    toggle_box.style.backgroundColor = "#000";

    music.pause();
  }
};

const emojis = document.querySelectorAll(".emoji");
const submitBtn = document.querySelector(".submit:nth-child(1)");
const clearBtn = document.querySelector(".submit:nth-child(2)");
const nameInput = document.querySelector(".textarea");
const recommendInput = document.querySelector(".textarea-1");

let selectedRating = ""; 

emojis.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    emojis.forEach(e => e.style.backgroundColor = "transparent");
        selectedRating = emoji.querySelector("p").innerText;
  });
});

submitBtn.addEventListener("click", () => {
  const userName = nameInput.value.trim();
  const recommendations = recommendInput.value.trim();

  if (!selectedRating) {
    alert("Please select a rating emoji!");
    return;
  }

    if (!userName) {
    alert("Please enter your name!");
    return;
  }

    const feedbackData = {
    name: userName,
    rating: selectedRating,
    suggestions: recommendations
  };
  console.log("Feedback Submitted:", feedbackData);
  alert("Thank you for your feedback, " + userName + "!");

  clearForm();
});

function clearForm() {
  nameInput.value = "";
  recommendInput.value = "";
  selectedRating = "";
  emojis.forEach(e => e.style.backgroundColor = "transparent");
}


