var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
 
// first dice
 
var randomNumber1 = Math.floor(Math.random() * 6);
 
var firstImage = images[randomNumber1];
 
document.querySelector(".img1").setAttribute("src", firstImage);
 
// second dice
 
var randomNumber2 = Math.floor(Math.random() * 6);
 
var secondImage = images[randomNumber2];
 
document.querySelector(".img2").setAttribute("src", secondImage);
function competition(){

    if (randomNumber1 > randomNumber2){
    
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
    
    }else if (randomNumber1 < randomNumber2){
    
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    
    }else {
    
    document.querySelector("h1").innerHTML = "Draw!";
    
    }
    
    }
    
    competition();