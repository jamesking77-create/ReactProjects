import React, {useState} from 'react';
function Manipulator(){
    let initialState = {
        numberOne: 0,
        numberTwo: 0,
        numberThree: 0,
        numberFour: 0
    }

    const [data, setData] = useState(initialState);

    const[ numberOne, setNumberOne] = useState(0);
    const[ numberTwo, setNumberTwo] = useState(0);
    const[ numberThree, setNumberThree] = useState(0);
    const[ numberFour, setNumberFour] = useState(0);

    function handleChange(event){
        if(event.target.name === 'numberOne'){
            setNumberOne(event.target.value);
        }
        if(event.target.name === 'numberTwo'){
            setNumberTwo(event.target.value);
        }
        if(event.target.name === 'numberThree'){
            setNumberThree(event.target.value);
        }
        if(event.target.name === 'numberFour'){
            setNumberFour(event.target.value);
        }
    }

    function handleNumber(event){
        if(event.target.name === 'submit1'){
            setNumberOne(event.target.value + 1);
        }

        if(event.target.name === 'submit2'){
            setNumberTwo(event.target.value + -1);
        }
        if(event.target.name === 'submit3'){
            setNumberThree(numberThree + numberThree);
        }
    }

    return(
        <div className='numbers'>
            <link rel="stylesheet" href="../numberMal.css" />
            {
                 <div className="ptags">
                 <p class="one">Number one: {numberOne}</p>
                 <p className="two">Number two: {numberTwo}</p>
                 <p className="three">Number three: {numberThree}</p>
                 <p className="four">Number four: {numberFour}</p>
                 </div>
                 }

                 <label htmlFor="numberOne">
                    NUMBER 1: <br />
                    <input type="number" name="numberOne" id="numberOne" value={numberOne} onChange={handleChange} />
                    <button className='submit1' type='submit' onClick={handleNumber} value={numberOne}> submit</button>
                 </label><br />

                 <label htmlFor="numberTwo">
                    NUMBER 2: <br />
                    <input type="number" name="numberTwo" id="numberTwo" value={numberTwo} onChange={handleChange} />
                    <button className='submit2' type='submit'onClick={handleNumber}> submit</button>
                 </label><br />

                 <label htmlFor="numberThree">
                    NUMBER 3: <br />
                    <input type="number" name="numberThree" id="numberThree" value={numberThree} onChange={handleChange} />
                    <button className='submit3' type='submit' onClick={handleNumber}> submit</button>
                 </label><br />

                 <label htmlFor="numberFour">
                    NUMBER 1: <br />
                    <input type="number" name="numberFour" id="numberFour" value={numberFour} onChange={handleChange} />
                    <button className='submit4' type='submit' onClick={handleNumber}> submit</button>
                 </label><br />
               </div>
            
         )
     }

     export default Manipulator;
        
     

