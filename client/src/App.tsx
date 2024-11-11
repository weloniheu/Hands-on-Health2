import React from "react";
import "./App.css";
import { useState } from "react";
import { Exercise2 } from "./types/types";
import { defaultExercises } from "./constants/Initial_consts";
import { EditAddExercise } from "./views/AddExerciseView";
import { AppProvider } from "./contexts/AppContext";
import { CurrentWorkout } from "./views/CurrentWorkoutView";

// ALL TEMPORARY CODE - CAN BE DELETED
function App() {
  const [exercises, setExercises] =
    React.useState<Exercise2[]>(defaultExercises);
  //   const [show, setShow] = React.useState<boolean>(false); // Disabled for testing

  const [view, setView] = useState("currentWorkout")
  const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([]); // Track added exercises

  // Function to add an exercise to the current workout
  const addExerciseToWorkout = (exercise: Exercise2) => {
    // setCurrentWorkoutExercises((prevExercises) => [...prevExercises, exercise]);
  };


  const showAddExerciseView = () => setView("addExercise")
  const showCurrentWorkoutView = () => setView('currentWorkout');


  return (
    <AppProvider>
      <div className="App">
      {view === 'currentWorkout' ? (
        <CurrentWorkout onAddExercise={showAddExerciseView} />
      ) : (
        <EditAddExercise 
          onBack={showCurrentWorkoutView} 
          navigateToCurrentWorkout={showCurrentWorkoutView}/>
      )}
      </div>
    </AppProvider>
  );
}

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
