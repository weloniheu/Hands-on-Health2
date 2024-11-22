import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "./contexts/WorkoutContext";
import HomePage from "./components/HomePage";
import DurationSelectionPage from "./components/WorkOutPlan/DurationSelectionPage";
import IntensitySelectionPage from "./components/WorkOutPlan/IntensitySelectionPage";
import "./App.css";
import { AppProvider } from "./contexts/AppContext";
import Login from "./components//Login/Login";
import Signup from "./components/Login/Signup";
import FocusMusclesView from "./components/WorkOutPlan/FocusMuscles";
import Review from "./components/WorkOutPlan/review";
import CurrentWorkout_AddExercise_Combined from "./views/CurrentWorkOut_AddExercise_CombinedView";
import HistoryPage from "./components/HistoryPage";

function App() {
  return (
    <AppProvider>
      <WorkoutProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/select-duration"
              element={<DurationSelectionPage />}
            />
            <Route
              path="/select-focus"
              element={<FocusMusclesView />}
            />
            <Route
              path="/select-intensity"
              element={<IntensitySelectionPage />}
            />
            <Route
              path="/review-plan"
              element={<Review />}
            />
            {/* <Route path="/review-workout" element={<ReviewWorkoutPage />} /> */}
            <Route
              path="/current-workout"
              element={<CurrentWorkout_AddExercise_Combined />}
            />
            <Route
              path="/history"
              element={<HistoryPage />}
            />
            {/* <Route path="/focus" element={<FocusPage />} /> */}
          </Routes>
        </Router>
      </WorkoutProvider>
    </AppProvider>
  );
}

// function App() {
//     return (
//         <div className="App">
//             <main>
//                 <CurrentWorkout_AddExercise_Combined/>
//             </main>
//         </div>
//     );
// }

export default App;
