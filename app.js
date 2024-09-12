
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
h1.innerHTML = "X's TURN"


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
            h1.innerHTML = "O's TURN"
             decideWinner();


          }else if (player2.playerTurn && gameBoard.row1[0] !== player2.symbol && gameBoard.row1[0] !== player1.symbol){
            displaytoDom(player2,topLeft);  
            gameBoard.row1[0] = player2.symbol;
            player2.playerTurn = false;
             player1.playerTurn = true;     
             h1.innerHTML = "X's TURN"

             decideWinner();


          }
      
  });



topMiddle.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row1[1] !== player2.symbol && gameBoard.row1[1] !== player1.symbol){
    displaytoDom(player1,topMiddle);
    gameBoard.row1[1] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
  h1.innerHTML = "O's TURN"
    decideWinner();


 }else if (player2.playerTurn && gameBoard.row1[1] !== player2.symbol && gameBoard.row1[1] !== player1.symbol){
   displaytoDom(player2,topMiddle);  
   gameBoard.row1[1] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
 h1.innerHTML = "X's TURN"
    decideWinner();


 }
    
      
  });

  topRight.addEventListener("click", function () {
    if(player1.playerTurn && gameBoard.row1[2] !== player2.symbol && gameBoard.row1[2] !== player1.symbol){
      displaytoDom(player1,topRight);
      gameBoard.row1[2] = player1.symbol;
      player1.playerTurn = false;
      player2.playerTurn = true;
      h1.innerHTML = "O's TURN"
      decideWinner();


   }else if (player2.playerTurn && gameBoard.row1[2] !== player2.symbol && gameBoard.row1[2] !== player1.symbol){
     displaytoDom(player2,topRight);  
     gameBoard.row1[2] = player2.symbol;
     player2.playerTurn = false;
      player1.playerTurn = true;     
      h1.innerHTML = "X's TURN"
      decideWinner();


 } });

 middleLeft.addEventListener("click", function () {

  if(player1.playerTurn && gameBoard.row2[0] !== player2.symbol && gameBoard.row2[0] !== player1.symbol){
    displaytoDom(player1,middleLeft);
    gameBoard.row2[0] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    h1.innerHTML = "O's TURN"
    decideWinner();
 


 }else if (player2.playerTurn && gameBoard.row2[0] !== player2.symbol && gameBoard.row2[0] !== player1.symbol){
   displaytoDom(player2,middleLeft);  
   gameBoard.row2[0] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    h1.innerHTML = "X's TURN"
    decideWinner();


} });



middleMiddle.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row2[1] !== player2.symbol && gameBoard.row2[1] !== player1.symbol){
    displaytoDom(player1,middleMiddle);
    gameBoard.row2[1] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    h1.innerHTML = "O's TURN"

    decideWinner();


 }else if (player2.playerTurn && gameBoard.row2[1] !== player2.symbol && gameBoard.row2[1] !== player1.symbol){
   displaytoDom(player2,middleMiddle);  
   gameBoard.row2[1] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    h1.innerHTML = "X's TURN"

    decideWinner();


} });


middleRight.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row2[2] !== player2.symbol && gameBoard.row2[2] !== player1.symbol){
    displaytoDom(player1,middleRight);
    gameBoard.row2[2] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    h1.innerHTML = "O's TURN"
    decideWinner();

 }else if (player2.playerTurn && gameBoard.row2[2] !== player2.symbol && gameBoard.row2[2] !== player1.symbol){
   displaytoDom(player2,middleRight);  
   gameBoard.row2[2] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     

    decideWinner();

    h1.innerHTML = "X's TURN"

} });






bottomLeft.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row3[0] !== player2.symbol && gameBoard.row3[0] !== player1.symbol){
    displaytoDom(player1,bottomLeft);
    gameBoard.row3[0] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    h1.innerHTML = "O's TURN"

    decideWinner();


 }else if (player2.playerTurn && gameBoard.row3[0] !== player2.symbol && gameBoard.row3[0] !== player1.symbol){
   displaytoDom(player2,bottomLeft);  
   gameBoard.row3[0] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    h1.innerHTML = "X's TURN"

    decideWinner();


} });




bottomMiddle.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row3[1] !== player2.symbol && gameBoard.row3[1] !== player1.symbol){
    displaytoDom(player1,bottomMiddle);
    gameBoard.row3[1] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    h1.innerHTML = "O's TURN"

    decideWinner();


 }else if (player2.playerTurn && gameBoard.row3[1] !== player2.symbol && gameBoard.row3[1] !== player1.symbol){
   displaytoDom(player2,bottomMiddle);  
   gameBoard.row3[1] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    h1.innerHTML = "X's TURN"

    decideWinner();


} });





bottomRight.addEventListener("click", function () {
  if(player1.playerTurn && gameBoard.row3[2] !== player2.symbol && gameBoard.row3[2] !== player1.symbol){
    displaytoDom(player1,bottomRight);
    gameBoard.row3[2] = player1.symbol;
    player1.playerTurn = false;
    player2.playerTurn = true;
    h1.innerHTML = "O's TURN"

    decideWinner();


 }else if (player2.playerTurn && gameBoard.row3[2] !== player2.symbol && gameBoard.row3[2] !== player1.symbol){
   displaytoDom(player2,bottomRight);  
   gameBoard.row3[2] = player2.symbol;
   player2.playerTurn = false;
    player1.playerTurn = true;     
    h1.innerHTML = "X's TURN"

    decideWinner();


} });



let decideWinner = function(){
  let diagonal1 = gameBoard.row1[0]
  let diagonal2 = gameBoard.row2[1]
  let diagonal3 = gameBoard.row3[2]
  let captureDiagonal = [diagonal1, diagonal2 , diagonal3]
  let diagonalTopLeftBottomRight =  captureDiagonal.join("")
  let column1Left = gameBoard.row1[0];
  let column2Left = gameBoard.row2[0];
  let column3Left = gameBoard.row3[0];
  let captureLeftColumn = [column1Left,column2Left,column3Left];
  let column1Middle = gameBoard.row1[1];
  let column2Middle = gameBoard.row2[1];
  let column3Middle = gameBoard.row3[1];
  let column1Right = gameBoard.row1[2];
  let column2Right = gameBoard.row2[2];
  let column3Right = gameBoard.row3[2];
  let captureMiddleColumn = [column1Middle,column2Middle,column3Middle];
  let captureRightColumn = [column1Right,column2Right,column3Right];
  let leftColumn = captureLeftColumn.join("")
  let rightColumn = captureRightColumn.join("")
  let middleColumn = captureMiddleColumn.join("")
  let topRow = gameBoard.row1.join("");
  let middleRow = gameBoard.row2.join("");
  let bottomRow = gameBoard.row3.join("")

   if (topRow === "XXX"){
      topLeft.style.backgroundColor = "LightGreen"
      topMiddle.style.backgroundColor = "LightGreen"
      topRight.style.backgroundColor = "LightGreen"

      h1.innerHTML = "X is the WINNER!"
      setTimeout(() => {
        resetValues();
  
      }, "2500");
 
   }else if (middleRow === "XXX") {
    middleLeft.style.backgroundColor = "LightGreen"
    middleMiddle.style.backgroundColor = "LightGreen"
    middleRight.style.backgroundColor = "LightGreen"
    h1.innerHTML = " X is the WINNER!"
    setTimeout(() => {
      resetValues();

    }, "2500");

   }
    else if (bottomRow === "XXX") {
      bottomLeft.style.backgroundColor = "LightGreen"
      bottomMiddle.style.backgroundColor = "LightGreen"
      bottomRight.style.backgroundColor = "LightGreen"
       h1.innerHTML = " X is the WINNER!"
       setTimeout(() => {
        resetValues();
  
      }, "2500");
 
    }
       else if (leftColumn === "XXX") {
        topLeft.style.backgroundColor = "LightGreen"
        middleLeft.style.backgroundColor = "LightGreen"
        bottomLeft.style.backgroundColor = "LightGreen"
         h1.innerHTML = " X is the WINNER!"
         setTimeout(() => {
          resetValues();
    
        }, "2500");
   
       }
         else if (middleColumn === "XXX") {
          topMiddle.style.backgroundColor = "LightGreen"
          middleMiddle.style.backgroundColor = "LightGreen"
          bottomMiddle.style.backgroundColor = "LightGreen"
           h1.innerHTML = "X is the WINNER!"
           setTimeout(() => {
            resetValues();
      
          }, "2500");
     
         }
           else if (rightColumn === "XXX") {
            topRight.style.backgroundColor = "LightGreen"
            middleRight.style.backgroundColor = "LightGreen"
            bottomRight.style.backgroundColor = "LightGreen"
             h1.innerHTML = "X is the WINNER!"
             setTimeout(() => {
              resetValues();
        
            }, "2500");
       
}else if (diagonalTopLeftBottomRight === "XXX") {
  topLeft.style.backgroundColor = "LightGreen"
  middleMiddle.style.backgroundColor = "LightGreen"
  bottomRight.style.backgroundColor = "LightGreen"
  setTimeout(() => {
    resetValues();

  }, "2500");

  h1.innerHTML = " X is the WINNER!"
}


  }

function resetValues(){
  player1.playerTurn = true; 
  player2.playerTurn = false;
  
  h1.innerHTML = ""

  topLeft.innerHTML = ""
  topMiddle.innerHTML = ""
  topRight.innerHTML = ""
  ////
  middleLeft.innerHTML = ""
  middleMiddle.innerHTML = ""
  middleRight.innerHTML = ""
  ////
  bottomLeft.innerHTML = ""
  bottomMiddle.innerHTML = ""
  bottomRight.innerHTML = ""
  ////
  topLeft.style.backgroundColor = ""
      topMiddle.style.backgroundColor = ""
      topRight.style.backgroundColor = ""
      ////
 
      middleLeft.style.backgroundColor = ""
      middleMiddle.style.backgroundColor = ""
      middleRight.style.backgroundColor = ""

      //

      bottomLeft.style.backgroundColor = ""
      bottomMiddle.style.backgroundColor = ""
      bottomRight.style.backgroundColor = ""
      //
  gameBoard = {
    row1 : [0,1,2],
    row2 : [0,1,2],
    row3 : [0,1,2]
}
}