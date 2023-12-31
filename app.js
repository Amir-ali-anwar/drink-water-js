const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
smallCups.forEach((cup, id) => {
  cup.addEventListener("click", () => highLightedCup(id));
});

function highLightedCup(id) {
  if (
    smallCups[id]?.classList?.contains("full") &&
    !smallCups[id]?.nextElementSibling?.classList?.contains("full")
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
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.textContent = `${(fullCups / totalCups) * 100}%`;
    liters.innerText = `${ 2- (250 * fullCups) / 1000}L`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = "0";
  }
}
