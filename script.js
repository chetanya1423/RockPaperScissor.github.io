let com;
for(var i=0;i<3;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
     com = this.innerHTML;
pressedBtn(com);
    
  })
}
let a=0;
let b=1;
let c=2;
function pressedBtn(){
  if(com==0){
 clickButton(a);
  }
  else if(com==1){
    clickButton(b);
  }
  else if(com==2){
    clickButton(c);
  }
 
}






//this code is check the no. of press btn.


let randomNum;
function clickButton(classValue){
  var activeButton = document.querySelector(`.a${classValue}`);
  var sound = document.getElementById("myAudio");
  sound.play();
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  document.querySelector(".tie-head").innerHTML="Computer turn."
   randomNum = Math.floor(Math.random()*3);
   
   setTimeout(function(){
    computerCall(randomNum);
   },3000);
}



// Got to condition check.

function computerCall(pressHoldBtn){
  console.log(com)
console.log(randomNum);

var activeButton = document.querySelector(`.a${pressHoldBtn}`);
var sound1 = document.getElementById("myAudio");
  sound1.play();
activeButton.classList.add("pressed");
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
startGame(com,randomNum);
document.querySelector(".tie-head").innerHTML="Player Turn."
}







// condition check for win this game
let playerSum=0;
let computerSum=0;
function startGame(com,randomNum){


  var rock=0;
  var paper=1;
  var scissor = 2;
if( rock==com && paper==randomNum){
  console.log("Paper is win")
  computerSum +=1;
  console.log(computerSum);
  document.querySelector("#computerPoint").innerHTML=computerSum;
  document.querySelector(".win-ses").innerHTML="Computer is win."
  setTimeout(function() {
    document.querySelector(".win-ses").innerHTML="";
  }, 1000);

  //executeGame(0,1)
}
else if(paper==com && rock==randomNum){
  console.log("Paper is win")
  playerSum +=1;
  console.log(playerSum);
  document.querySelector("#playerPoints").innerHTML=playerSum;
  document.querySelector(".win-ses").innerHTML="Player is win."
  setTimeout(function() {
    document.querySelector(".win-ses").innerHTML="";
  }, 1000);
  //executeGame(1,0)
}
else if(rock==com && scissor==randomNum){
  console.log("rock is win")
  playerSum +=1;
  console.log(playerSum);
  document.querySelector("#playerPoints").innerHTML=playerSum;
  document.querySelector(".win-ses").innerHTML="Player is win."
  setTimeout(function() {
    document.querySelector(".win-ses").innerHTML="";
  }, 1000);
  //executeGame(0,2)
}
else if(scissor==com && rock==randomNum){
  console.log("rock is win")
  computerSum +=1;
  console.log(computerSum);
  document.querySelector("#computerPoint").innerHTML=computerSum;
  document.querySelector(".win-ses").innerHTML="Computer is win."
  setTimeout(function() {
    document.querySelector(".win-ses").innerHTML="";
  }, 1000);
  //executeGame(2,0)
}
else if(paper==com && scissor==randomNum){
  console.log("scissor is win")
  computerSum +=1;
  console.log(computerSum);
  document.querySelector("#computerPoint").innerHTML=computerSum;
  document.querySelector(".win-ses").innerHTML="Computer is win."
  setTimeout(function() {
    document.querySelector(".win-ses").innerHTML="";
  }, 1000);
  //executeGame(1,2)
}
else if(scissor==com && paper==randomNum){
  console.log("scissor is win")
  playerSum +=1;
  console.log(playerSum);
  document.querySelector("#playerPoints").innerHTML=playerSum;
  document.querySelector(".win-ses").innerHTML="Player is win."
  setTimeout(function() {
    document.querySelector(".win-ses").innerHTML="";
  }, 1000);
  //executeGame(2,1)
}
else{
  console.log("Game tie.");
  document.querySelector(".win-ses").innerHTML="Game tie. Please click the button to restart the Game."
}
}




// function executeGame(player,computer){
//  if(player==0 && computer==1){
//   console.log("Paper is win")
// }
// else if(player==1 && computer==0){
//   console.log("Paper is win")
// }
// else if(player==0 && computer==2){
//   console.log("rock is win")
// }
// else if(player==2 && computer==0){
//   console.log("rock is win")
// }
// else if(player==1 && computer==2){
//   console.log("scissor is win")
// }
// else if(player==2 && computer==1){
//   console.log("scissor is win")
// }
// else{
//   console.log("Game tie");
// }
// }






       
    
