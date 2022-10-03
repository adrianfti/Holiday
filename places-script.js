// places page ------------->

const destinationsEl = document.querySelectorAll(".location");
const destinationClickedEl = document.querySelector(".destination-clicked");
const imageEl = document.querySelector(".details");

const closeDetails = function () {
  destinationClickedEl.classList.add("hidden");
};
const showDetails = function () {
  destinationClickedEl.classList.remove("hidden");
};

for (let i = 0; i < destinationsEl.length; i++) {
  destinationsEl[i].addEventListener("click", showDetails);
  destinationsEl[i].addEventListener("click", function () {
    imageEl.src = `images/${[i]}.jpg`;
  });
}
destinationClickedEl.addEventListener("click", closeDetails);
document.addEventListener("keydown", function (k) {
  if (k.key === "Escape") {
    closeDetails();
  }
});
