import React from "react";
import "./App.css";
import { defaultExercises } from "./constants/Initial_consts";
import { AppProvider } from "./contexts/AppContext";
import { EditWorkOutPlan } from "./views/EditWorkOutPlan"

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
                <button onClick={handleToggleShow}>
                    {show ? "Hide Plan" : "Show Plan"}
                </button>
                {show && <EditWorkOutPlan/>} {/* Conditionally render ExerciseList */}
            </div>
        </AppProvider>
    );
}

export default App;
