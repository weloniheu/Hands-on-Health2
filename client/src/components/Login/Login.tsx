import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth-utils";

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
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate("/register")}>Register for account</button>
        </div>
    );
}

export default Login;
