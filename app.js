

let gameBoard = {
    row1 : [0,1,2],
    row2 : [3,4,5],
    row3 : [6,7,8]
}



function displayBlock(){
    let oneToEight = prompt("enter number from 0 to 8");
   if (oneToEight === "1"){
    gameBoard.row1[0] = "x"
   }else {
    console.log("1 wasn't pressed!")
   }
   console.log(gameBoard)
}

 function createPlayer(name,symbol){
        
}


displayBlock();