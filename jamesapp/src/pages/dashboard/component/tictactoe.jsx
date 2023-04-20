import React, {useState} from 'react';
import '../styles/tictactoe.css'


function Tictactoe(){
    let word = "PRESS PLAY TO START GAME"
    const X = "X";
       
    const O = "O";
    let currentPlayer = 0;
 
    let restext = document.querySelector(".restext"); 
          
    let players = [

       {
          name: "PLAYER 1",
          symbol: X
       
       },
       
       {
          name: "PLAYER 2",
          symbol: O
       
       }
    ]

    

    function getCurrentPlayerName(){
        return players[currentPlayer].name;
     }    
     
     function resetCurrentPlayer(){
        currentPlayer++;
        if(currentPlayer === players.length) currentPlayer = 0;
     }
     
     function getCurrentSymbol(){
        return players[currentPlayer].symbol;
        
     }


    function checkForWinner(columns){

        let divArray = [];
        for (let i = 0; i < 9; i += 1) {
            divArray.push(columns[i].innerHTML);
            console.log(columns[i].innerHTML);
                   
            if(divArray[0] == X && divArray[1] == X && divArray[2] == X ||
                divArray[0] == O && divArray[1] == O && divArray[2] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;  
                        
            }
            
            if(divArray[0] == X && divArray[3] == X && divArray[6] == X ||
                divArray[0] == O && divArray[3] == O && divArray[6] == O ){
                word = ` ${getCurrentPlayerName()} won!!!`; 
                
            }
            
            if(divArray[0] == X && divArray[3] == X && divArray[6] == X ||
                divArray[0] == O && divArray[3] == O && divArray[6] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;
                
            }
            
            if(divArray[6] == X && divArray[7] == X && divArray[8] == X ||
                divArray[6] == O && divArray[7] == O && divArray[8] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;
            
            }
            
            if(divArray[2] == X && divArray[5] == X && divArray[8] == X ||
                divArray[2] == O && divArray[5] == O && divArray[8] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;
                
            }
            
            if(divArray[1] == X && divArray[4] == X && divArray[7] == X ||
                divArray[1] == O && divArray[4] == O && divArray[7] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;
                
            }
            
            
            if(divArray[0] == X && divArray[4] == X && divArray[8] == X || 
                divArray[0] == O && divArray[4] == O && divArray[8] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;
                
            }
            
            if(divArray[2] == X && divArray[4] == X && divArray[6] == X ||
                divArray[2] == O && divArray[4] == O && divArray[6] == O ){
                    word = ` ${getCurrentPlayerName()} won!!!`;
            
            }
    
    
            if(divArray[3] == X && divArray[4] == X && divArray[5] == X ||
                divArray[3] == O && divArray[4] == O && divArray[5] == O ){
                    word = `${getCurrentPlayerName()} won!!!`;  
                    
            }
          }
       }
     
    

    function handleClick(){

        let playButton = document.querySelector(".play");
        playButton.disable = true;
       
       let columns = document.querySelectorAll(".column");
       
       let restext = document.querySelector(".restext");


                
                document.querySelector(".restext").innerHTML = "START GAME!!!";
                columns.forEach(element => {
                   element.addEventListener("click", function(){
                    if (element.innerHTML == ".") {
                        element.innerHTML = getCurrentSymbol();
                         checkForWinner(columns)
                        restext.innerHTML = `${getCurrentPlayerName()} HAS PLAYED ( IT'S' YOUR TURN TO PLAY )`; 
                        resetCurrentPlayer();
                   }}); 
                }); 
    }


    function resetGame (){
        document.querySelector(".restext").innerHTML = "PRESS -> ( PLAY ) BUTTON TO START GAME!!";
        let columns = document.querySelectorAll(".column");
        let playButton = document.querySelector(".play");
        playButton.disable = false
        columns.forEach(element => {
            element.innerHTML = "."; 
            handleClick.disable = true
        
        });
    }




    return(
<body>
    <div class="maincontainer">

        <div className="gameBoard">
            <div className="row0">
                <div id="row0column0" className="column">.</div>
                <div id="row0column1" className="column">.</div>
                <div id="row0column2" className="column">.</div>
            </div>

            <div class="row1">
                <div id="row1column0" className="column">.</div>
                <div id="row1column1" className="column">.</div>
                <div id="row1column2" className="column">.</div>
            </div>

            <div class="row2">
                <div id="row2column0" className="column">.</div>
                <div id="row2column1" className="column">.</div>
                <div id="row2column2" className="column">.</div>
            </div>

        </div>

        <div className="resultBoard">

        <div className="result">
            <h3 className="restext">{word}</h3>
        </div>

        <div className="buttons">
            <button className="play" onClick={handleClick}>PLAY</button>
            <div className= "sign">Tic-Tac-Toe</div>
            <button className="exit" onClick={resetGame}>EXIT</button>
        </div>

        </div>
    </div>

    <script src="./tictactoe.js"></script>
</body>

    )
}

export default Tictactoe;