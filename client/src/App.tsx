import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "./WorkoutContext";
import HomePage from "./HomePage";
import DurationSelectionPage from "./DurationSelectionPage";
import FocusPage from "./FocusPage";
import IntensitySelectionPage from "./IntensitySelectionPage";
import ReviewWorkoutPage from "./ReviewWorkoutPage";
import "./App.css";
import { AppProvider } from "./contexts/AppContext";
import Login from "./componants/Login";
import Signup from "./componants/Signup";
import { Exercise2 } from "./types/types";
import { defaultExercises } from "./constants/Initial_consts";
import { CurrentWorkout } from "./views/CurrentWorkoutView";
import { EditAddExercise } from "./views/AddExerciseView";

// ALL TEMPORARY CODE - CAN BE DELETED
function App() {
	const [exercises, setExercises] = React.useState<Exercise2[]>(defaultExercises);
	//   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("token"),
	);
	const [showSignup, setShowSignup] = useState(false);

  
  const [view, setView] = useState("currentWorkout");
  const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState<Exercise2[]>([]);

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

  const addExerciseToWorkout = (exercise: Exercise2) => {
    // setCurrentWorkoutExercises((prevExercises) => [...prevExercises, exercise]);
  };

  const showAddExerciseView = () => setView("addExercise");
  const showCurrentWorkoutView = () => setView("currentWorkout");

  const deleteExerciseFromWorkout = (exerciseName: string) => {
    setCurrentWorkoutExercises((prevExercises) =>
      prevExercises.filter((exercise) => exercise.name !== exerciseName)
    );
  };

	// Render the login or signup page if the user is not logged in
	// if (!token) {
	// 	return (
	// 		<div>
	// 			{showSignup ? (
	// 				<Signup onSignupSuccess={handleLoginSuccess} />
	// 			) : (
	// 				<Login onLoginSuccess={handleLoginSuccess} />
	// 			)}
	// 			<button onClick={() => setShowSignup(!showSignup)}>
	// 				{showSignup
	// 					? "Already have an account? Login"
	// 					: "Don't have an account? Create Account"}
	// 			</button>
	// 		</div>
	// 	);
	// }

	// Render the main app view (e.g., EditWorkOutPlan) if the user is logged in
  return (
      <AppProvider>
          <div className="App">
              {view === "currentWorkout" ? (
                  <CurrentWorkout onAddExercise={showAddExerciseView} />
              ) : (
                  <EditAddExercise 
                    onBack={showCurrentWorkoutView} 
                    navigateToCurrentWorkout={showCurrentWorkoutView}
                  />
              )}
          </div>
      </AppProvider>
  );
}

export default App;

        
// Merge stuff from Rui Branch
// <!-- import { EditWorkOutPlan } from "./views/EditWorkOutPlan";
// import FocusMusclesView from "./views/FocusMuscles";
// import Header from './views/Header';

// const App: React.FC = () => {
//     return (
//         <WorkoutProvider>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/select-duration" element={<DurationSelectionPage />} />
//                     <Route path="/focus" element={<FocusPage />} />
//                     <Route path="/intensity" element={<IntensitySelectionPage />} />
//                     <Route path="/review-workout" element={<ReviewWorkoutPage />} />
//                     {/* <Route path="/" element={<EditWorkOutPlan />} /> */}
//                     <Route path="/focus-muscles" element={<FocusMusclesView duration={30} />} />
//                 </Routes>
//             </Router>
//         </WorkoutProvider>
//     );
// }; -->




// Merge from Vishnu branch

// // ALL TEMPORARY CODE - CAN BE DELETED
// function App() {
    // const [exercises, setExercises] = React.useState<Exercise2[]>(defaultExercises);
    // //   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing

    // const [view, setView] = useState("currentWorkout");
    // const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([]); // Track added exercises

    // // Function to add an exercise to the current workout
    // const addExerciseToWorkout = (exercise: Exercise2) => {
    //     // setCurrentWorkoutExercises((prevExercises) => [...prevExercises, exercise]);
    // };

    // const showAddExerciseView = () => setView("addExercise");
    // const showCurrentWorkoutView = () => setView("currentWorkout");

//     return (
//         <AppProvider>
//             <div className="App">
//                 {view === "currentWorkout" ? (
//                     <CurrentWorkout onAddExercise={showAddExerciseView} />
//                 ) : (
//                     <EditAddExercise onBack={showCurrentWorkoutView} />
//                 )}
//             </div>
//         </AppProvider>
//     );
// }
