import React from 'react';
//  import '../styles/menstrualApp.css'
// import { Link } from 'react-router-dom';




function MenstrualApp(){
    
    
        return(

            
            <div>
                <div className='topnav1'>
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

            <li>
                <p>Sign In</p>
            </li>

            <li>
                <p className='signup'>Sign Up</p>
            </li>

        </div>


            <div className='mc'>

                    <div className='box1'>
                        <div className='buttonn'>

                            <p className='btnText'>
                                TRACK <br />
                                my pregnancy 
                            </p>

                            <div className='btnTwo'>
                                <p className='btnText2'>?</p>
                            </div>
                        </div>

                        <div className='pregbox'>
                            {/* <img src="../../../asset/image/pregnant1.jpg" alt="" /> */}
                        </div>
                    </div>

                 
               
               
                    <div className='innerContainer' id='holder'>
                        <div className='firstBox'>

                            <h2 className='tracktext'>TRACK <br />  
                               
                                fertility & period
                               
                           
                            </h2>
                        </div>

                        
                            <div className='buttonn'  onClick={() => {window.location.href ='page2'}}>
                                <p className='btnText'>
                                    TRACK <br />
                                    my period
                                </p>

                                <div className='btnTwo'>
                                    <p className='btnText2'>?</p>
                                </div>
                            </div>
                     
                       

                        < div className='lady1'> </div>

                       

                        <div className="center">
                                 <a href='attr'><span data-attr="Learn">Learn</span><span data-attr="More"></span></a>
                        </div>

                    </div>


                    <div className='box2'>
                    <div className='buttonn'>

                            <p className='btnText'>
                                TRACK <br />
                                my safe periods
                            </p>
                            <div className='btnTwo'>
                                <p className='btnText2'>?</p>
                            </div>
                            
                        </div>

                        <div className='buttonn' onClick={() => {window.location.href ='page3'}}>

                            <p className='btnText'>
                            TRACK <br />
                            my ovulation
                            </p>
                            <div className='btnTwo'>
                            <p className='btnText2'>?</p>
                            </div>

                        </div>


                        <div className='button'>

                            <p className='btnText'>
                            Find <br />
                            a gynecologists.
                            </p>
                            <div className='btnTwo'>
                            <p className='btnText2'>?</p>
                            </div>

                        </div>

                        <div className='button'>

                        <p className='btnText'>
                        Buy <br />
                        menstrual products
                        </p>
                        <div className='btnTwo'>
                        <p className='btnText2'>?</p>
                        </div>

                        </div>


                        
                      
                    </div>
            </div>
            </div>

            
        )
    
}

export default MenstrualApp; 