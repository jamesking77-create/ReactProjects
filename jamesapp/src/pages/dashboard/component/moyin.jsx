import React, {useState} from 'react';

function Moyin() {
    // this
    let initialState = {
        institute: "",
        cohort: "",
        admissionYear: "",
        admissionMonth: "",
        firstName: "",
        lastName: "",
        email: "",
        age: 0
    }
    // and this
    const [data, setData] = useState(initialState);


    //is same as this
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail] = useState("");
    const [age, setAge]=useState(0);
    const [institute, setInstitute] = useState("");
    const [cohort, setCohort] = useState("");
    const [admissionYear, setAdmissionYear] = useState("");


    function handleChange(event){
        if(event.target.name === 'firstName') {
            setFirstName(event.target.value);
        }
        else if(event.target.name === 'lastName') {
            setLastName(event.target.value);
        }
        else if(event.target.name === 'email') {
            setEmail(event.target.value);
        }
        else if (event.target.name === 'age'){
            setAge(event.target.value);
        }
        else if (event.target.name === 'institute'){
            setInstitute(event.target.value);
        }
        else if (event.target.name === 'cohort'){
            setCohort(event.target.value);
        }
        else if (event.target.name === 'admissionYear'){
            setAdmissionYear(event.target.value);
        }
        
    }

        return (
            
            <div className='fresh'>
                <link rel="stylesheet" href="moyin.css" />


                {/* <div className="ptags">
                    <p className="one">First Name: {firstName}</p>
                    <p className="two">Last Name: {lastName}</p>
                    <p className="three">Email: {email}</p>
                    <p className="four">Age: {age}</p>
                    <p className="five">Institution: {institute}</p>
                    <p className="six">Cohort: {cohort}</p>
                    <p className="seven">Year of Admission: {data.admissionYear}</p>
                    <p className="eight">Month of Admission: {data.admissionMonth}</p>
                </div> */}


                <label htmlFor="firstName">
                    FirstName: <br />
                    <input type="text" name="firstName" id="firstName" value={firstName} onc={handleChange}/>
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
            </div>
        );
    }

export default Moyin;