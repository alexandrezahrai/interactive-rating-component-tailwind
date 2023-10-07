// Elements
const ratings = document.querySelectorAll(".rating-item");
const submitBtn = document.getElementById("submit");
const stepOne = document.getElementById("card-1");
const stepTwo = document.getElementById("card-2");
const selected = document.getElementById("total");

// Event Listeners
ratings.forEach((rating) =>
  rating.addEventListener("click", () => handleActive(rating))
);
submitBtn.addEventListener("click", hideFirstStep);

// Functions
function clearAllRatings() {
  ratings.forEach((rating) => {
    rating.classList.remove("active", "hover:bg-orange");
  });
}

function handleActive(clickedRrating) {
  clearAllRatings();

  clickedRrating.classList.add("active", "hover:bg-orange");
  selected.textContent = clickedRrating.textContent;
}

function hideFirstStep() {
  let hasActive = false;
  ratings.forEach((rating) => {
    activeRating = rating.classList.contains("active");
    if (activeRating) {
      hasActive = true;
      return;
    }
  });

  if (hasActive) {
    stepOne.style.opacity = "0";
    stepTwo.classList.remove("hidden");
    stepTwo.classList.add("flex", "z-10");
  }
}
