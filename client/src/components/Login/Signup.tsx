import React, { useState } from "react";
import { register } from "../../utils/auth-utils";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const { setToken } = useAuth();
    const navigate = useNavigate();

    async function handleSignup(event: any) {
        event.preventDefault();
        const data = await register(email, password, firstName, lastName);

        if (data.result) {
            setToken(data.token);
            localStorage.setItem("authToken", data.token);
            navigate("/home");
        } else {
            setError(data.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
    );
}

export default Signup;
