import React, { useState } from "react";
import { Exercise2 } from "./types/types";
import { defaultExercises } from "./constants/Initial_consts";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import { AppProvider } from "./contexts/AppContext";

function Start() {
    const [exercises, setExercises] = React.useState<Exercise2[]>(defaultExercises);
    //   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [showSignup, setShowSignup] = useState(false);

    const handleSetToken = (newToken: string | null) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }
    };
    const handleLoginSuccess = (newToken: string) => {
        setToken(newToken);
        localStorage.setItem("token", newToken); // Save token to persist login
    };
    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    // Render the login or signup page if the user is not logged in
    return (
        <div>
            {showSignup ? (
                <Signup onSignupSuccess={handleLoginSuccess} />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
            <button onClick={() => setShowSignup(!showSignup)}>
                {showSignup ? "Already have an account? Login" : "Don't have an account? Create Account"}
            </button>
        </div>
    );
}
export default Start;
