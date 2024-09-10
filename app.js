
let topLeft = document.getElementById("b-1");
let topMiddle = document.getElementById("b-2");

let topRight = document.getElementById("b-3");
// let topMiddle = document.getElementById("b-4");


// let topLeft = document.getElementById("b-5");
// let topMiddle = document.getElementById("b-6");


// let topLeft = document.getElementById("b-7");
// let topMiddle = document.getElementById("b-8");
// let topMiddle = document.getElementById("b-9");


topLeft.addEventListener("click", function () {

    if(positions.player1Turn){
        topLeft.innerHTML = player1.symbol;
        gameBoard.row1[0] = "X"
        console.log(gameBoard)
        positions.player1Turn = false;
        positions.player2Turn = true;

    }else {
        topLeft.innerHTML = player2.symbol;
        gameBoard.row1[0] = "O"
        console.log(gameBoard)
        positions.player1Turn = true;
        positions.player2Turn = false;
    }
      
  });



topMiddle.addEventListener("click", function () {

    if(positions.player1Turn){
        topMiddle.innerHTML = player1.symbol;
        gameBoard.row1[1] = "X"
        console.log(gameBoard)
        positions.player1Turn = false;
        positions.player2Turn = true;

    }else {
        topMiddle.innerHTML = player2.symbol;
        gameBoard.row1[1] = "O"
        console.log(gameBoard)
        positions.player1Turn = true;
        positions.player2Turn = false;
    }
      
  });

  topRight.addEventListener("click", function () {

    if(positions.player1Turn){
        topRight.innerHTML = player1.symbol;
        gameBoard.row1[2] = "X"
        console.log(gameBoard)
        positions.player1Turn = false;
        positions.player2Turn = true;

    }else {
        topRight.innerHTML = player2.symbol;
        gameBoard.row1[2] = "O"
        console.log(gameBoard)
        positions.player1Turn = true;
        positions.player2Turn = false;
    }
      
  });



let gameBoard = {
    row1 : [0,1,2],
    row2 : [0,1,2],
    row3 : [0,1,2]
}




let player1 =  {
    symbol : "x",

}


let player2 =  {
    symbol : "o",

}

console.log(player1.symbol)


let positions = {
   player1Turn : true,
   player2Turn : false,
}

