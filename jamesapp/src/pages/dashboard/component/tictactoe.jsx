import React, {useState} from 'react';
import '../styles/tictactoe.css'


function Tictactoe(){

    let initialState = {
        row0column0: "",
        row0column1: "",
        row0column2: "",
        row1column0: "",
        row1column1: "",
        row1column2: "",
        row2column0: "",
        row2column1: "",
        row2column2: "",
     
    }
    // and this
    const [data, setData] = useState(initialState);


    //is same as this
    const [ row0column0, setRow0column0] = useState("");
    const [ row0column1, setRow0column1] = useState("");
    const [ row0column2, setRow0column2] = useState("");
    const [ row1column0, setRow1column0] = useState("");
    const [ row1column1, setRow1column1] = useState("");
    const [ row1column2, setRow1column2] = useState("");
    const [ row2column0, setRow2column0] = useState("");
    const [ row2column1, setRow2column1] = useState("");
    const [ row2column2, setRow2column2] = useState("");

    function handleOnClick(event){

        for(let i = 0; i < 9; i++){
            if(i == 0){
                if( event.target.value == 1){
                    setRow0column0('X');
                }
                 else if( event.target.value == 2){
                    setRow0column1('X');
                }
                else if( event.target.value == 3){
                    setRow0column2('X');
                }
                else if(event.target.value == 4){
                    setRow1column0('X');
                }
                 else if(event.target.value == 5){
                    setRow1column1('X');
                }
                else if( event.target.value == 6){
                    setRow1column2('X');
                }
                else if( event.target.value == 7){
                    setRow2column0('X');
                }
                else if( event.target.value == 8){
                    setRow2column1('X');
                }
                else if( event.target.value == 9){
                    setRow2column2('X');
                }
            }
            if(i == 1){
                if( event.target.value == 1){
                    setRow0column0('O');
                }
                 else if( event.target.value == 2){
                    setRow0column1('O');
                }
                else if( event.target.value == 3){
                    setRow0column2('O');
                }
                else if( event.target.value == 4){
                    setRow1column0('O');
                }
                 else if(event.target.value == 5){
                    setRow1column1('O');
                }
                else if( event.target.value == 6){
                    setRow1column2('O');
                }
                else if( event.target.value == 7){
                    setRow2column0('O');
                }
                else if( event.target.value == 8){
                    setRow2column1('O');
                }
                else if( event.target.value == 9){
                    setRow2column2('O');
                }
            }

            if(i == 2){
                i = 0;
            }
        }
       
    }
    



    return(
<body>
    <div class="maincontainer">

        <div className="gameBoard">
            <div className="row0">
                <div className="row0column0" id="column1">.</div>
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
            <p className="restext">PRESS PLAY TO START GAME</p>
        </div>

        <div className="buttons">
            <button className="play" onClick={handleOnClick}>PLAY</button>
            <label htmlFor="input">
                <input className= "input" value={'Enter a number here '} id='input'> </input>
            </label>
            <button className="exit">EXIT</button>
        </div>

        </div>
    </div>

    <script src="./tictactoe.js"></script>
</body>

    )
}

export default Tictactoe;