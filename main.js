let logoEl = document.querySelector(".logo");
let player1 = document.querySelector(".p1");
let player2 = document.querySelector(".p2");
let container = document.querySelector(".container");
let startBtn = document.getElementById("startBtn");



startBtn.addEventListener("click", function() {
    logoEl.style.visibility = "hidden";
    console.log("this should hide")
    container.style.display = "inline";

});

let posL1 = 0;
let posL2 = 0;



document.addEventListener("keydown", function(event) {
    // this checks that you pressed the spacebar, if using Mac OS & Chrome
    if (event.keyCode == 39) {
        //  let img = document.querySelector('img')
        posL1 += 20;
        console.log(posL1)
        player1.style.left = posL1 + "px"

        // if (player1.style.left >= '90px') {
        //     alert("Player 1 Won!")
        // }

    }
    if (event.keyCode == 100 || event.keyCode == 68) {
        //  let img = document.querySelector('img')
        posL2 += 20;
        console.log(posL2)
        player2.style.left = posL2 + "px"

    }

});

document.addEventListener("keyup", function(event) {
    // this checks that you pressed the spacebar, if using Mac OS & Chrome
    if (event.keyCode == 100 || event.keyCode == 68) {
        //  let img = document.querySelector('img')
        posL2 += 20;
        console.log(posL2)
        player2.style.left = posL2 + "px"

    }
})