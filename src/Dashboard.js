import SignOutButton from './SignOutButton';
import './Dashboard.css';
import {Link} from 'react-router-dom';
import {firebase,db} from './firebase';
import { Component } from 'react';

class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            uid: "",
            details: {}
         }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( (user)=> {
            console.log("Asdjahskd")
            if (user) {
                db.collection('users').doc(user.uid).get().then((doc) => {
                    this.setState({
                        uid: user.uid,
                        details: doc.data()
                    });
                });
            } else {
              this.props.history.push('/signup');
            }
        });
    }


    render(){
        if(this.state.uid=="")
            return( <div>Loading...</div> );
        else{
            return ( 
                <div>
                    <div className="dashboard-nav">
                        <Link to='/edit-details'>
                            <button className="edit-button">Edit Profile</button>
                        </Link>
                        <SignOutButton />
                    </div>
                    <ShowDetails details={this.state.details} />
                </div>   
            );
        }
    }
    
}

const ShowDetails = (props) => {

    if(props.details){
        var {dob,placeBirth,favShow} = props.details;
    }else{
        var dob ="";
        var placeBirth ="";
        var favShow ="";
    }

    return ( 
        <div className="flex-center">
            <div>
                <div>
                    <h2>Your Details</h2>
                </div>
                <div>
                    <div className="detail-show">
                        <label>DOB -></label>
                        <span className="detail-value">
                            { dob=="" ? "Not Mentioned":dob}
                        </span>
                    </div>
                    <div className="detail-show">
                        <label>Place of Birth -></label>
                        <span className="detail-value">
                            { placeBirth=="" ? "Not Mentioned":placeBirth}
                        </span>
                    </div>
                    <div className="detail-show">
                        <label>Favourite Show -></label>
                        <span className="detail-value">
                            { favShow=="" ? "Not Mentioned":favShow}
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;