import React from "react";
import "./App.css";
import { defaultExercises } from "./constants/Initial_consts";
import { AppProvider } from "./contexts/AppContext";
<<<<<<< HEAD
import { EditWorkOutPlan } from "./views/EditWorkOutPlan";
=======
import { EditWorkOutPlan } from "./views/EditWorkOutPlan"
>>>>>>> main

function App() {
    const [exercises, setExercises] = React.useState(defaultExercises);
    const [show, setShow] = React.useState(false);
    const handleToggleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    // return (
    //     <AppProvider>
    //         <div className="App">
    //             <h1>Workout Planner</h1>
    //             <button onClick={handleToggleShow}>{show ? "Hide Plan" : "Show Plan"}</button>
    //
    //         </div>
    //     </AppProvider>
    // );
    return (
        <AppProvider>
            <div className="App">
                <h1>Workout Planner</h1>
<<<<<<< HEAD
                <button onClick={handleToggleShow}>{show ? "Hide Plan" : "Show Plan"}</button>
                {show && <EditWorkOutPlan/>}
=======
                <button onClick={handleToggleShow}>
                    {show ? "Hide Plan" : "Show Plan"}
                </button>
                {show && <EditWorkOutPlan/>} {/* Conditionally render ExerciseList */}
>>>>>>> main
            </div>
        </AppProvider>
    );
}

export default App;
