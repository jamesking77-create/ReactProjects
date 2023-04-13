import React, {Component} from 'react';

class FooterT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            institute: "",
            cohort: ""
        }
    }
    // handleFirstName= (e)=>{
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleLastName= (e)=>{
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleAge= (e)=>{
    //     this.setState({
    //         age: event.target.value
    //     })
    // }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    // OR SINGLE FUNCTION FOR ALL
        render(){
            return(
                <div className="container">
                    <p className="firstName">This is my first name: {this.state.firstName}</p>
                    <p className="lastName">This is my last name: {this.state.lastName}</p>
                    <p className="age">This is my age: {this.state.age}</p><br/>
                    <p className='institute'>This is ny institute: {this.state.institute}</p>
                    <p className='cohort'>This is ny cohort: {this.state.cohort}</p>

                    <label htmlFor="" className="fName">
                        First name: <input type="text" name="firstName" id="firstName" placeholder="enter your firstName"
                        // value={this.state.firstName} onChange={this.handleFirstName}/>
                        value={this.state.firstName} onChange={this.handleChange}/>
                    </label><br/><br/>

                    <label htmlFor="" className="lName">
                        Last name: <input type="text" name="lastName" id="lastName" placeholder="enter your lastName"
                        // value={this.state.lastName} onChange={this.handleLastName}/>
                        value={this.state.lastName} onChange={this.handleChange}/>
                    </label><br/><br/>

                    <label htmlFor="" className="age">
                        Age: <input type="text" name="age" id="age" placeholder="enter your age"
                        // value={this.state.age} onChange={this.handleAge}/>
                        value={this.state.age} onChange={this.handleChange}/>
                    </label><br/><br/>

                    <label htmlFor="" className="institute">
                    institute: <input type="text" name="institute" id="institute" placeholder="enter your institute"
                        // value={this.state.age} onChange={this.handleAge}/>
                        value={this.state.institute} onChange={this.handleChange}/>
                    </label><br/><br/>


                    <label htmlFor="" className="cohort">
                    institute: <input type="text" name="cohort" id="cohort" placeholder="enter your cohort"
                        // value={this.state.age} onChange={this.handleAge}/>
                        value={this.state.cohort} onChange={this.handleChange}/>
                    </label><br/><br/>

                </div>
            );
        }
}
                export default FooterT;