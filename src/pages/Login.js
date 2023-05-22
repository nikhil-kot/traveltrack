import React from "react";
import { auth, provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login({setIsAuth}) {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    }
    
    return( 
        <div classname="loginPage">
            <p style={{textAlign: 'center', fontSize:50}}> TravelTrack Login </p>
            <p style={{textAlign: 'center', fontSize:25, marginBottom: 30}}> Ready to get tracking? Log into Google to access more TravelTrack features! </p>
            <button style={{marginLeft: 815}} className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    );
}

export default Login;