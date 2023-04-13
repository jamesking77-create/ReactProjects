
import React from "react";
import Link from "react-router-dom"
import '../styles/topNav.css';

class TopNav extends React.Component{
    constructor(){
        super();

        this.TopNav = TopNav;
    }

    render(){
       return (
        <div className="topnav" style={{ display: 'flex' }} >
            <div className="titlenav" style={{ color: 'white' }}>
                <h3>king production TM.</h3>
            </div>

            <nav className="nav1"  style={{ display: 'flex', justifyContent: 'space-between', gap: '20%' }} >

        
                <li id="n1"> 
                    <a 
                        href="https://google.com/" 
                        style={{ color: 'white' }}
                    >
                        HOME
                    </a>
                </li>


                <li id="n2">
                    <a
                     href="https://www.oracle.com/"
                      style={{ color: 'white' }}
                      >
                        FAQ
                    </a>


                </li>
                <li id="n3">
                     <a 
                     href="https://www.instagram.com/_jamess_kingg/"
                      style={{ color: 'white' }}
                      >ABOUT
                      </a>
                </li>


                <li id="n4"> 
                    <a 
                        href="https://google.com/"
                        style={{ color: 'white' }}
                    >
                        OPTICS
                    </a>
                </li>


                <div className="subcribe">
                    <p style={{ color: 'white', marginRight:'auto'  }}>
                        subcribe
                    </p>
                </div>


            </nav>
        </div>
       )
        
    }
}

export default TopNav;