import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "./WorkoutContext";
import HomePage from "./HomePage";
import DurationSelectionPage from "./DurationSelectionPage";
import FocusPage from "./FocusPage";
import IntensitySelectionPage from "./IntensitySelectionPage";
import ReviewWorkoutPage from "./ReviewWorkoutPage";
import "./App.css";
import { AppProvider } from "./contexts/AppContext";
import { EditWorkOutPlan } from "./views/EditWorkOutPlan";
import FocusMusclesView from "./views/FocusMuscles";
import Header from './views/Header';

const App: React.FC = () => {
    return (
        <WorkoutProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/select-duration" element={<DurationSelectionPage />} />
                    <Route path="/focus" element={<FocusPage />} />
                    <Route path="/intensity" element={<IntensitySelectionPage />} />
                    <Route path="/review-workout" element={<ReviewWorkoutPage />} />
                    {/* <Route path="/" element={<EditWorkOutPlan />} /> */}
                    <Route path="/focus-muscles" element={<FocusMusclesView duration={30} />} />
                </Routes>
            </Router>
        </WorkoutProvider>
    );
};

export default App;




// Merge from Vishnu branch
// import "./App.css";
// import { useState } from "react";
// import { Exercise2 } from "./types/types";
// import { defaultExercises } from "./constants/Initial_consts";
// import { EditAddExercise } from "./views/AddExerciseView";
// import { AppProvider } from "./contexts/AppContext";
// import { CurrentWorkout } from "./views/CurrentWorkoutView";

// // ALL TEMPORARY CODE - CAN BE DELETED
// function App() {
//     const [exercises, setExercises] = React.useState<Exercise2[]>(defaultExercises);
//     //   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing

//     const [view, setView] = useState("currentWorkout");
//     const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([]); // Track added exercises

//     // Function to add an exercise to the current workout
//     const addExerciseToWorkout = (exercise: Exercise2) => {
//         // setCurrentWorkoutExercises((prevExercises) => [...prevExercises, exercise]);
//     };

//     const showAddExerciseView = () => setView("addExercise");
//     const showCurrentWorkoutView = () => setView("currentWorkout");

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
