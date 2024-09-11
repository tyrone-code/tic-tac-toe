
let topLeft = document.getElementById("b-1");
let topMiddle = document.getElementById("b-2");
let topRight = document.getElementById("b-3");
let middleLeft = document.getElementById("b-4");
let middleMiddle = document.getElementById("b-5");
let middleRight = document.getElementById("b-6");
let bottomLeft = document.getElementById("b-7");
let bottomMiddle = document.getElementById("b-8");
let bottomRight = document.getElementById("b-9");

let h1 = document.getElementById("decideWinner");




let gameBoard = {
    row1 : [0,1,2],
    row2 : [0,1,2],
    row3 : [0,1,2]
}





function playerSymbol(symbol,playerTurn){
    return {
        symbol:symbol,
        playerTurn:playerTurn,

    }
}

let player1 = playerSymbol("X",true);
let player2 = playerSymbol("O",false);


let displaytoDom = function(player,position){
  let para = document.createElement("p")
      para.textContent = player.symbol;
      position.append(para);
  }



topLeft.addEventListener("click", function () {
          if(player1.playerTurn && gameBoard.row1[0] !== player2.symbol && gameBoard.row1[0] !== player1.symbol){
             displaytoDom(player1,topLeft);
             gameBoard.row1[0] = player1.symbol;
             player1.playerTurn = false;
             player2.playerTurn = true;
             console.log(player1)
             console.log(player2)
             console.log(gameBoard)
             decideWinner();


          }else if (player2.playerTurn && gameBoard.row1[0] !== player2.symbol && gameBoard.row1[0] !== player1.symbol){
            displaytoDom(player2,topLeft);  
            gameBoard.row1[0] = player2.symbol;
            player2.playerTurn = false;
             player1.playerTurn = true;     
             console.log(player1)
             console.log(player2)
             console.log(gameBoard)
             decideWinner();


          }
      
  });



topMiddle.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row1[1] !== player2.symbol && gameBoard.row1[1] !== player1.symbol){
    displaytoDom(player1,topMiddle);
    gameBoard.row1[1] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row1[1] !== player2.symbol && gameBoard.row1[1] !== player1.symbol){
   displaytoDom(player2,topMiddle);  
   gameBoard.row1[1] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }
    
      
  });

  topRight.addEventListener("click", function () {
    if(player1.playerTurn && gameBoard.row1[2] !== player2.symbol && gameBoard.row1[2] !== player1.symbol){
      displaytoDom(player1,topRight);
      gameBoard.row1[2] = player1.symbol;
      player1.playerTurn = false;
      player2.playerTurn = true;
      console.log(player1)
      console.log(player2)
      console.log(gameBoard)
      decideWinner();


   }else if (player2.playerTurn && gameBoard.row1[2] !== player2.symbol && gameBoard.row1[2] !== player1.symbol){
     displaytoDom(player2,topRight);  
     gameBoard.row1[2] = player2.symbol;
     player2.playerTurn = false;
      player1.playerTurn = true;     
      console.log(player1)
      console.log(player2)
      console.log(gameBoard)
      decideWinner();


 } });

 middleLeft.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row2[0] !== player2.symbol && gameBoard.row2[0] !== player1.symbol){
    displaytoDom(player1,middleLeft);
    gameBoard.row2[0] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row2[0] !== player2.symbol && gameBoard.row2[0] !== player1.symbol){
   displaytoDom(player2,middleLeft);  
   gameBoard.row2[0] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


} });



middleMiddle.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row2[1] !== player2.symbol && gameBoard.row2[1] !== player1.symbol){
    displaytoDom(player1,middleMiddle);
    gameBoard.row2[1] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row2[1] !== player2.symbol && gameBoard.row2[1] !== player1.symbol){
   displaytoDom(player2,middleMiddle);  
   gameBoard.row2[1] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


} });


middleRight.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row2[2] !== player2.symbol && gameBoard.row2[2] !== player1.symbol){
    displaytoDom(player1,middleRight);
    gameBoard.row2[2] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row2[2] !== player2.symbol && gameBoard.row2[2] !== player1.symbol){
   displaytoDom(player2,middleRight);  
   gameBoard.row2[2] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


} });






bottomLeft.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row3[0] !== player2.symbol && gameBoard.row3[0] !== player1.symbol){
    displaytoDom(player1,bottomLeft);
    gameBoard.row3[0] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row3[0] !== player2.symbol && gameBoard.row3[0] !== player1.symbol){
   displaytoDom(player2,bottomLeft);  
   gameBoard.row3[0] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


} });




bottomMiddle.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row3[1] !== player2.symbol && gameBoard.row3[1] !== player1.symbol){
    displaytoDom(player1,bottomMiddle);
    gameBoard.row3[1] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row3[1] !== player2.symbol && gameBoard.row3[1] !== player1.symbol){
   displaytoDom(player2,bottomMiddle);  
   gameBoard.row3[1] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


} });





bottomRight.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row3[2] !== player2.symbol && gameBoard.row3[2] !== player1.symbol){
    displaytoDom(player1,bottomRight);
    gameBoard.row3[2] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row3[2] !== player2.symbol && gameBoard.row3[2] !== player1.symbol){
   displaytoDom(player2,bottomRight);  
   gameBoard.row3[2] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    console.log(player1)
    console.log(player2)
    console.log(gameBoard)
    decideWinner();


} });











let decideWinner = function(){
  let topRow = gameBoard.row1.join("");
  let middleRow = gameBoard.row2.join("");

   if (topRow === "XXX"){
      topLeft.style.backgroundColor = "LightGreen"
      topMiddle.style.backgroundColor = "LightGreen"
      topRight.style.backgroundColor = "LightGreen"

      h1.innerHTML = " X is the WINNER!"
  
   }else if (middleRow === "XXX") {
    middleLeft.style.backgroundColor = "LightGreen"
    middleMiddle.style.backgroundColor = "LightGreen"
    middleRight.style.backgroundColor = "LightGreen"
    

  }else if (gameBoard.row1 === gameBoard.row1) {
    h1.innerHTML = "draw!";
}

 
  }

  // let diagonal1 = gameBoard.row1[0]
  // let diagonal2 = gameBoard.row2[1]
  // let diagonal3 = gameBoard.row3[2]
  // let diagonal = [diagonal1, diagonal2 , diagonal3]
