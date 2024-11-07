import React, { useState } from "react";

interface LoginProps {
	setToken: (token: string | null) => void;
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const response = await fetch(
				"http://localhost:8080/api/auth/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password }),
				},
			);
			const data = await response.json();
			if (data.token) {
				setToken(data.token); // Call the prop to set the token
				alert("Login successful");
			} else {
				alert(data.message || "Login failed");
			}
		} catch (error) {
			console.error("Error logging in:", error);
			alert("An error occurred. Please try again.");
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
