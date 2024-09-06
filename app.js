

let gameBoard = {
    row1 : [0,1,2],
    row2 : [0,1,2],
    row3 : [0,1,2]
}





function createPlayer(symbol){
    return {
        symbol:symbol,
    }
}

function choosePlayer(){
    let player1Symbol = prompt(" Player 1 enter either X or O")
           
     if (player1Symbol === "X") {
          player2Symbol = "O"
     }else {
        player1Symbol = "O";
        player2Symbol = "X";
     }

    player1 = createPlayer(player1Symbol)
    player2 = createPlayer(player2Symbol)



}

function player1turn(){
    let oneToEight = prompt(" player 1 enter number from 0 to 8");
    if (oneToEight === "0"){
        gameBoard.row1[0] = player1.symbol
    
       }else if (oneToEight === "1"){
        gameBoard.row1[1] = player1.symbol
       }
       else if (oneToEight === "2"){
        gameBoard.row1[2] = player1.symbol
       }
       else if (oneToEight === "3"){
        gameBoard.row2[0] = player1.symbol
       }
       else if (oneToEight === "4"){
        gameBoard.row2[1] = player1.symbol
       }
       else if (oneToEight === "5"){
        gameBoard.row2[2] = player1.symbol
       }
       else if (oneToEight === "6"){
        gameBoard.row3[0] = player1.symbol
       }
       else if (oneToEight === "7"){
        gameBoard.row3[1] = player1.symbol
       }
       else if (oneToEight === "8"){
        gameBoard.row3[2] = player1.symbol
       }
       console.log(gameBoard)
    }






    function player2turn(){
        let oneToEight = prompt(" player 2 enter number from 0 to 8");
        if (oneToEight === "0"){
            gameBoard.row1[0] = player2.symbol
        
           }else if (oneToEight === "1"){
            gameBoard.row1[1] = player2.symbol
           }
           else if (oneToEight === "2"){
            gameBoard.row1[2] = player2.symbol
           }
           else if (oneToEight === "3"){
            gameBoard.row2[0] = player2.symbol
           }
           else if (oneToEight === "4"){
            gameBoard.row2[1] = player2.symbol
           }
           else if (oneToEight === "5"){
            gameBoard.row2[2] = player2.symbol
           }
           else if (oneToEight === "6"){
            gameBoard.row3[0] = player2.symbol
           }
           else if (oneToEight === "7"){
            gameBoard.row3[1] = player2.symbol
           }
           else if (oneToEight === "8"){
            gameBoard.row3[2] = player2.symbol
           }
           console.log(gameBoard)
        }
    
    
        function playGame(){
           player1turn();
           player2turn();
           player1turn();
           player2turn();
           player1turn();
           player2turn();
           player1turn();
           player2turn();
           player2turn();
        }
        












  



choosePlayer()


playGame();