var randomNumber1 = Math.floor(Math.random() *6 )+1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"
var player1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var title = document.getElementById("title");
if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 wins!"
} else if (randomNumber2 > randomNumber1){
    title.innerHTML = "Player 2 wins! 🚩"
}else {
    title.innerHTML = "Draw!"
}

var btn = document.querySelector("btn");
btn.addEventListener("click",() => {
    btn.setAttribute("a", "./index.html")
});