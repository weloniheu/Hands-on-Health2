import React from "react";
import "./App.css";
import { defaultExercises } from "./constants/Initial_consts";
import { AppProvider } from "./contexts/AppContext";

function App() {
    const [exercises, setExercises] = React.useState(defaultExercises);
    const [show, setShow] = React.useState(false);

    const handleToggleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <AppProvider>
            <div className="App">
                <h1>Workout Planne</h1>
                <button onClick={handleToggleShow}>{show ? "Hide Plan" : "Show Plan"}</button>
            </div>
        </AppProvider>
    );
}

export default App;
