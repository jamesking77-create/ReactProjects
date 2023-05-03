import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName,setLastName, setPhoneNumber } from "../../../store/userDetails";
import "../styles/userDetailsComponent.css"

function UserDetailsComponent(){
    const name = useSelector((state)=>state.userDetails.name);
    const occupation = useSelector((state) => state.userDetails.occupation);
    const phoneNumber = useSelector((state) => state.userDetails.phoneNumber);
    const  dispatch = useDispatch();


    function generateNext(){
        dispatch(setName + 1)
    }

    return(
        <div className="mainContainer">
            <div className="innerContainer">
                <div className="innerContainer2">
                    <div className="profileBox">
                        <div className="userPic"></div>
                            <div className="userInfo">
                                <label htmlFor="name">
                                    <p>name</p>
                                    <div className="name" onClick={()=> dispatch(setName("JAMES"))} >{name}</div>
                                </label>
                                <label htmlFor="occupation">
                                    <p>occupation</p>
                                    <div className = "occupation">{occupation} </div>
                                </label>
                                <label htmlFor="firstName">
                                    <p>PhoneNumber</p>  
                                <div className="PhoneNumber" onClick={generateNext} >{phoneNumber}</div>
                                </label>

                                <section className='buttons' >
                                    
                                    NEXT
                                 
                                </section>
                            </div>
                    </div>
                 </div>
            </div> 
        </div>
    )

}

export default UserDetailsComponent;