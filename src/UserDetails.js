import SignOutButton from './SignOutButton';
import './UserDetails.css';
import {Link} from 'react-router-dom';
import {firebase,db} from './firebase';
import React, { Component } from 'react';

class UserDetails extends Component {
    
    constructor(props){
        super(props)
        this.dobInput = React.createRef();
        this.placeInput = React.createRef();
        this.showInput = React.createRef();
        this.submitDetails = this.submitDetails.bind(this);
        this.state={
            uid: ""
        }
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged( (user)=> {
            if (user) {
                this.setState({
                    uid:user.uid
                })
            } else {
              this.props.history.push('/signup');
            }
        });
    }

    submitDetails(e){
        e.preventDefault();
        firebase.auth().onAuthStateChanged( (user)=> {
            if (user) {
                db.collection("users").doc(user.uid).set({
                    dob:this.dobInput.current.value,
                    placeBirth: this.placeInput.current.value,
                    favShow : this.showInput.current.value
                });
            } else {
                // Some error occured
            }
        });
        
    }

    render (){
        if(this.state.uid==""){
            return( <div>Loading...</div> );
        }else{
            return ( 
                <div>
                    <div className="dashboard-nav">
                        <Link to='/'>
                            <button className="dash-button">Go to Dashboard</button>
                        </Link>
                        <SignOutButton />
                    </div>
                    <div className="details-outer flex-center">
                        <form onSubmit={this.submitDetails}>
                            <div>
                                <div className="detail-field">
                                    <label>DOB</label>
                                    <input ref={this.dobInput} name="dob" type="date" />
                                </div>
                                <div className="detail-field">
                                    <label>Place of Birth</label>
                                    <input ref={this.placeInput} name="place_of_birth" type="string" />
                                </div>
                                <div className="detail-field">
                                    <label>Favourite Show</label>
                                    <input ref={this.showInput} name="fav_show" type="string" />
                                </div>
                            </div>
                            <button className="save-button" type="submit">Save</button>
                        </form>
                    </div>    
                </div>   
                
            );
        }
    }
}
 
export default UserDetails;