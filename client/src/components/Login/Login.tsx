import React, { useState } from "react";

const Login = ({ onLoginSuccess }: { onLoginSuccess: (token: string) => void }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            console.log("Received response:", response); // Log response details

            if (response.ok) {
                console.log("YES");
                const data = await response.json();
                console.log(data);
                onLoginSuccess(data.token); // Pass the token to App component or save it
            } else {
                console.log("NO");
                const errorData = await response.json();
                setError(errorData.message || "Login failed");
            }
        } catch (err) {
            setError("Error occurred during login");
        }
    };

    return (
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
    );
};

export default Login;
