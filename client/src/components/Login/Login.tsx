import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth-utils";
import Header from "../WorkOutPlan/Header";
import "./css/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setToken } = useAuth();
    const navigate = useNavigate();

    async function handleLogin(event: any) {
        event.preventDefault();
        const data = await login(email, password);

        if (data.result) {
            setToken(data.token);
            localStorage.setItem("authToken", data.token);
            navigate("/home");
        } else {
            setError(data.message);
        }
    }

    return (
        <div className="login">
            <Header />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="form-group">
                    <h2>Username:</h2>
                    <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <h2>Password:</h2>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <p onClick={() => navigate("/register")} className="register-button">Register for account</p>
                </div>
                <div className="form-group submit"><button type="submit">Login</button></div>
                <div className="form-group guest">
                    <p onClick={() => navigate("/guest")} className="guest-login">Continue as guest</p>
                </div>
            </form>
        </div>
    );
}

export default Login;
