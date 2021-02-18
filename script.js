const progress = document.getElementById("progress");
const progress = document.getElementById("prev");
const progress = document.getElementById("next");
const circles = document.querySelectorAll(".circle")


let currentActive = 1 

next.addEventListener("click", () => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
})
next.addEventListener("click", () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
})

function update() {
    circles.forEach((circle, idx ) =>{
        if(idx < currentActive) {
            circle.classList.add("active")
        }else {
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active")
}