var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomInageSource2 = "images/dice" + randomNumber2 + ".png";


document.querySelectorAll("img")[1].setAttribute("src", randomInageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 wins";
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else {
    document.querySelector("h1").innerHTML = "Its a draw, try again !!";
}