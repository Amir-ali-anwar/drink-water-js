const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


smallCups.forEach((cup,id)=>{
    cup.addEventListener("click",()=>highLightedCup(id))
})

function highLightedCup(id){
    console.log(id);
}