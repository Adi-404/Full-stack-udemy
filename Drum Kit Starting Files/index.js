var numberOfdrumButtons=document.querySelectorAll(".drum").length;
for (var i =0; i<numberOfdrumButtons; i++){

document.querySelectorAll("button")[i].addEventListener("click",function () {
   
    //what to do when click detected.

    this.style.color = "white";


   
} );
}

// var audio = new Audio('sounds/tom-1.mp3')
// audio.play();
