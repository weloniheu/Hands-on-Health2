import React, { useState } from "react";
import "./App.css";
import { fetchWorkoutTemplate } from "./utils/exercise-utils";
import { Exercise, Exercise2 } from "./types/types";
import { defaultExercises } from "./constants/Initial_consts";
import { EditWorkOutPlan } from "./views/EditWorkOutPlan";
import { AppProvider } from "./contexts/AppContext";
import Login from "./componants/Login";

// ALL TEMPORARY CODE - CAN BE DELETED
function App() {
	const [exercises, setExercises] =
		React.useState<Exercise2[]>(defaultExercises);
	//   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("token"),
	);

	const handleSetToken = (newToken: string | null) => {
		setToken(newToken);
		if (newToken) {
			localStorage.setItem("token", newToken);
		} else {
			localStorage.removeItem("token");
		}
	};

	// Render the login page if the user is not logged in
	if (!token) {
		return <Login setToken={handleSetToken} />;
	}

	return (
		<AppProvider>
			<div className="App">
				<button onClick={() => handleSetToken(null)}>Logout</button>
				<EditWorkOutPlan />
			</div>
		</AppProvider>
	);
}

export default App;
