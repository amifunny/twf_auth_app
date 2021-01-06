import {Link} from 'react-router-dom';
import React,{ Component } from 'react';
import './AuthBox.css';

import {firebase} from "./firebase";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            isEmailValid: false,
            password:"",
            isPasswordValid: false
        }
        
        // validation constants
        this.emailPattern = /^.+@.+\..+$/;
        this.passwordMinLength = 6;

        this.submitSignUp = this.submitSignUp.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    submitSignUp(){
        const {email,password} = this.state;

        if(this.state.isEmailValid && this.state.isPasswordValid){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in 
                // ...
                this.props.history.push('/edit-details');
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

        }
    }

    handleEmail(e){
        
        let isValid = false;
        if(this.emailPattern.test( e.target.value )){
            isValid = true
        }

        this.setState({
            isEmailValid: isValid,
            email: e.target.value
        });

    }

    handlePassword(e){

        let isValid = false;
        if( e.target.value.length>this.passwordMinLength ){
            isValid = true
        }

        this.setState({
            isPasswordValid: isValid,
            password: e.target.value
        });

    }

    render() { 
        return (  
            <div className="auth-box flex-center">
                <div className="auth-box-inner">
                    <div>
                        <input onInput={this.handleEmail} 
                        className="auth-input" placeholder="Email Address"></input>
                        <input onInput={this.handlePassword}
                        className="auth-input" placeholder="Password"></input>
                        <button onClick={this.submitSignUp}
                        className="auth-button">Sign Up Now</button>
                    </div>
                    <div>Already have an account?</div>
                    <Link to="/signin">
                        <button className="auth-button">Sign In using Email</button>
                    </Link>    
                </div>    
            </div>
        );
    }
}

 
class SignIn extends Component {
   
    constructor(props) {
        super(props);
        // References for inputs to get value
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();

        this.submitSignIn = this.submitSignIn.bind(this);

    }

    submitSignIn(){
        const email = this.emailInput.current.value;
        const password = this.passwordInput.current.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
            this.props.history.push('/edit-details');
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    render() { 
        return (  
            <div className="auth-box flex-center">
                <div className="auth-box-inner">
                    <div>
                        <input ref={this.emailInput}
                         className="auth-input" placeholder="Email Address"></input>
                        <input ref={this.passwordInput}
                        className="auth-input" placeholder="Password"></input>
                        <button onClick={this.submitSignIn}
                        className="auth-button">Sign In Now</button>
                    </div>
                    <div>Don't have an account? </div>
                    <Link to="/signup">
                        <button className="auth-button">Sign Up using Email</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export {SignUp,SignIn};