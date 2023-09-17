const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
smallCups.forEach((cup, id) => {
  console.log({ id });
  cup.addEventListener("click", () => highLightedCup(id));
});

function highLightedCup(id) {
  if (
    smallCups[id].classList.contains("full") &&
    !smallCups[id].nextElementSibling.classList.contains("full")
  ) {
    id--;
  }
  smallCups.forEach((cup, index) => {
    if (index <= id) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
