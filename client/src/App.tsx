import React, { useState } from "react";
import "./App.css";
import { fetchWorkoutTemplate } from "./utils/exercise-utils";
import { Exercise, Exercise2 } from "./types/types";
import { defaultExercises } from "./constants/Initial_consts";
import { EditWorkOutPlan } from "./views/EditWorkOutPlan";
import { AppProvider } from "./contexts/AppContext";
import Login from "./componants/Login";
import Signup from "./componants/Signup";

// ALL TEMPORARY CODE - CAN BE DELETED
function App() {
	const [exercises, setExercises] =
		React.useState<Exercise2[]>(defaultExercises);
	//   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("token"),
	);
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
	if (!token) {
		return (
			<div>
				{showSignup ? (
					<Signup onSignupSuccess={handleLoginSuccess} />
				) : (
					<Login onLoginSuccess={handleLoginSuccess} />
				)}
				<button onClick={() => setShowSignup(!showSignup)}>
					{showSignup
						? "Already have an account? Login"
						: "Don't have an account? Create Account"}
				</button>
			</div>
		);
	}

	// Render the main app view (e.g., EditWorkOutPlan) if the user is logged in
	return (
		<AppProvider>
			<div className="App">
				<button onClick={handleLogout}>Logout</button>
				<EditWorkOutPlan /> {/* Show the main workout plan component */}
			</div>
		</AppProvider>
	);
}

export default App;
