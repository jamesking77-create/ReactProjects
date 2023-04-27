import React, {useState} from 'react';
import '../styles/menspage2.css'

function MensPage2(){

    let initialState = {
        lastPeriodDay: "When was your last day of period: ",
        periodLength: "How many days does your period last",
        cycleLength: "what is your cycle length",  
    }



    const [lastPeriodDay, setLastPeriodDay] = useState(initialState.lastPeriodDay);
    const [periodLength, setPeriodLength] = useState(initialState.periodLength);
    const [cycleLength, setCycleLength] = useState(initialState.cycleLength);

    
    function handleChange(event){
        if(event.target.name === 'lastPeriodDay') {
            setLastPeriodDay(event.target.value);
        }
        else if(event.target.name === 'periodLength') {
            setPeriodLength(event.target.value);
        }
        else if(event.target.name === 'cyclelength') {
            setCycleLength(event.target.value);
        }
    }

    function clearText(event){
        event.target.value = " "
    }






    return(
        <div className="bg">
             <div className='topnav'>
            <div>
                <p className='flo'>FLow-her</p>
            </div>

            <li>
                <p>FAQ</p>
            </li>

            <li>
                <p>TIps & Advice</p>
            </li>

            <li>
                <p>Contact Us</p>
            </li>

    

        </div>

        <div className="innercontainer">
            <div className="input">
                <div className="inputimg">
                    <h4 className="question">Please answer the following questions below </h4>
                    <label htmlFor="lastPeriodDay">     
                        <input name="lastPeriodDay" type = "text" value={lastPeriodDay} onChange={handleChange} onClick={clearText}></input>
                    </label>

                    <label htmlFor="periodLength">
                        <input name="periodLength" type = "text" value= {periodLength} onChange={handleChange}onClick={clearText}></input>
                    </label>
                
                    <label htmlFor="cycleLength">
                    <input className="cycleLength" value={cycleLength} onChange={handleChange}onClick={clearText}></input>

                    </label>
                
                <div className="submit">Submit</div>
                </div>
            </div>
            <div className="results">
                <div className=" result"></div>
                
                <div className='button'>
                    <p className='btnText'>
                    NEXT
                    </p>
                    <div className='btnTwo'>
                    <p className='btnText2'>Flow</p>
                </div>

                </div>

            </div>
        </div>

        </div>
        
    )
}
export default MensPage2;