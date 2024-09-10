
let topLeft = document.getElementById("b-1");
let topMiddle = document.getElementById("b-2");
let topRight = document.getElementById("b-3");
let middleRight = document.getElementById("b-4");
let middleMiddle = document.getElementById("b-5");




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


let decideWinner = function(){
  let topRow = gameBoard.row1.join("");
   if (topRow === "XOX"){

   }
 
  }

  decideWinner();

  // let diagonal1 = gameBoard.row1[0]
  // let diagonal2 = gameBoard.row2[1]
  // let diagonal3 = gameBoard.row3[2]
  // let diagonal = [diagonal1, diagonal2 , diagonal3]
