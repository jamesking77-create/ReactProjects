import React, {useReducer} from 'react';

function StateMgtWitReducer() {
    // this
    let initialValue = {
        institute: "",
        cohort: "",
        admissionYear: "",
        admissionMonth: "",
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        buttonColor: ""
    }


    function reducer(state, action ){
        switch(action, type){
            case 'handleInput':
                return{
                    ...state,
                    [action.field]: action.payload,
                }

                default:
                     break;
        }

    }

    const[state, dispatch] = useReducer(reducer, initialValue);


    function handleButtonChange(e){
        dispatch({
            type: 'handleButton',
            field: e.target.name,
            payload:'green'
        })
    }

        return (
            
            <div className='fresh'>
            
                <div className="ptags">
                    <p className="one">First Name: {firstName}</p>
                    <p className="two">Last Name: {lastName}</p>
                    <p className="three">Email: {email}</p>
                    <p className="four">Age: {age}</p>
                    <p className="five">Institution: {institute}</p>
                    <p className="six">Cohort: {cohort}</p>
                    <p className="seven">Year of Admission: {data.admissionYear}</p>
                    <p className="eight">Month of Admission: {data.admissionMonth}</p>
                </div>


                <label htmlFor="firstName">
                    FirstName: <br />
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleChange}/>
                </label><br/><br/>
                <label htmlFor="lastName">
                   LastName: <br />
                   <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleChange}/>
                </label><br/><br/>
                <label htmlFor="email">
                    Email: <br />
                    <input type="text" name="email" id="email" value={email} onChange={handleChange}/>
                </label><br/><br/>
                <label htmlFor="age">
                    Age: <br />
                    <input type="text" name="age" id="age" value={age} onChange={handleChange}/>
                </label><br/><br/>
                <label htmlFor="institute">
                    institute: <br />
                    <input type="text" name="institute" id="institute" value={institute} onChange={handleChange}/>
                </label><br/><br/>
                <label htmlFor="cohort">
                    cohort: <br />
                    <input type="text" name="cohort" id="cohort" value={cohort} onChange={handleChange}/>
                </label><br/><br/>
                <label htmlFor="admissionYear">
                    admissionYear: <br />
                    <input type="text" name="admissionYear" id="admissionYear"/>
                </label><br/><br/>
                <label htmlFor="admissionMonth">
                    admissionMonth: <br /> 
                    <input type="text" name="admissionMonth" id="admissionMonth"/>
                </label><br/><br/>

                <button
                type='submit'
                name='button color'
                onClick={handleButtonChange}
                style={{
                    backgroundColor : state.buttonColor
                }}
                >

                </button>
            </div>
        );
    }

export default StateMgtWitReducer;