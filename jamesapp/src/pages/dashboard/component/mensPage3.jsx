import React from 'react';
// import '../styles/mensPage3.css'

function MensPage3(){

    

   


    function clearText(event){
        event.target.value = " "
    }


  
    function getFutureDates(){
        let periodLenghts = document.querySelector(".periodLength");
        if(periodLenghts > 7){
            document.querySelector(".rp").innerHTML = "oops! there was a mistake "; 
        }
        let lpd = document.querySelector(".lastPeriodDay").value;
        let lastDate = new Date(lpd);
        let nextFlowDate = lastDate;
        nextFlowDate.setDate(lastDate.getDate() + 14)
        const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }
        let nextDate = nextFlowDate.toLocaleDateString('en-US', dateOptions)
        document.querySelector(".rp").innerHTML = "Your next ovulation starts: " + nextDate;
        console.log(document.querySelector(".rp"));
        console.log(nextFlowDate);     
        
    }

    function getNextDate(){
        let cycleLengths = parseInt(document.querySelector(".cycleLength").value);
        let lpd = document.querySelector(".rp").innerHTML;
        let lastDate = new Date(lpd);
        let nextFlowDate = lastDate;
        nextFlowDate.setDate(lastDate.getDate() + cycleLengths+1)
        const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }
        let nextDate = nextFlowDate.toLocaleDateString('en-US', dateOptions)
        document.querySelector(".rp").innerHTML = "Your next ovulation starts: " + nextDate;

        console.log(document.querySelector(".rp"));
        console.log(nextFlowDate); 
        
    }





    return(
        <div className="mcc">
             <div className='topnav'>
                <div className='back' onClick={() => {window.location.href ='/'}}>
                    BACK
                </div>
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
                    {/* <p className='pclass'>When was your last day of period:  </p>    */}
                        <input className="lastPeriodDay" type = "date"  onClick={clearText} placeholder=''></input>
                    </label>

                    <label htmlFor="periodLength">
                        <input className="periodLength" type = "text" onClick={clearText} placeholder='What is your period length' ></input>
                    </label>
                
                    <label htmlFor="cycleLength">
                    <input className="cycleLength" type='text'  onClick={clearText} placeholder='what is your cycle length'></input>

                    </label>
                
                <div className="submit" onClick={getFutureDates}> <p className='sub'>Submit</p> </div>
                </div>
            </div>
            <div className="results">
                <div className="result"> <h2 className='rp'>RESULTS</h2> </div>
                
                <div className='button' onClick={getNextDate}>
                    <p className='btnText'>
                    NEXT
                    </p>
                    <div className='btnTwo'>
                    <p className='btnText2'>OVL</p>
                </div>

                </div>

            </div>
        </div>

        </div>
        
    )
}
export default MensPage3;