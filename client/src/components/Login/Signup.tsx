// Signup.tsx
import React, { useState } from "react";

function Signup({ onSignupSuccess }: { onSignupSuccess: (token: string) => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        setError("");
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            console.log("Received response:", response); // Log response details

            if (response.ok) {
                const data = await response.json();
                console.log("Signup successful:", data); // Log success
                onSignupSuccess(data.token);
            } else {
                const errorData = await response.json();
                console.error("Error response data:", errorData); // Log error response body
                setError(errorData.message || "Signup failed");
            }
        } catch (error) {
            console.error("Error occurred during signup:", error); // Log unexpected errors
            setError("An error occurred during signup");
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Create Account</button>
        </div>
    );
}

export default Signup;
