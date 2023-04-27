import React from 'react';
import '../styles/menstrualApp.css'





function MenstrualApp(){
    
    
        return(
            
            <div>
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

            <li>
                <p>Sign In</p>
            </li>

            <li>
                <p className='signup'>Sign Up</p>
            </li>

        </div>


            <div className='bg'>
                 
                < div className='lady1'></div>
               
                    <div className='innerContainer' id='holder'>
                        <div className='firstBox'>

                            <h2 className='tracktext'>TRACK <br />  
                               
                                fertility & period
                               
                           
                            </h2>
                        </div>

                        <div className='button' onClick={() => {window.location.href ='page2'}}>
                            <p className='btnText'>
                                TRACK <br />
                                my period
                            </p>

                            <div className='btnTwo'>
                                <p className='btnText2'>?</p>
                            </div>
                        </div>

                        <div className='button'>

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
                                TRACK <br />
                                my pregnancy 
                            </p>
                            <div className='btnTwo'>
                                <p className='btnText2'>?</p>
                            </div>
                            
                        </div>

                        <div class="center">
                                 <a href='attr'><span data-attr="Learn">Learn</span><span data-attr="More"></span></a>
                        </div>

                    </div>

                    
                   
                
            </div>
            </div>
        )
    
}

export default MenstrualApp; 