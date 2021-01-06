import './SignOutButton.css';
import {firebase} from './firebase';

const SignOutButton = () => {

    function signOut(params) {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.props.history.push('/signin')
        }).catch((error) => {
            // An error happened.
        });
    }

    return ( 
        <button onClick={signOut}
        className="sign-out-button">Sign Out</button>
    );
}
 
export default SignOutButton;