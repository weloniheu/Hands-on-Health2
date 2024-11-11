import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "./WorkoutContext";
import HomePage from "./HomePage";
import DurationSelectionPage from "./DurationSelectionPage";
import FocusPage from "./FocusPage";
import IntensitySelectionPage from "./IntensitySelectionPage";
import ReviewWorkoutPage from "./ReviewWorkoutPage";

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
                </Routes>
            </Router>
        </WorkoutProvider>
    );
};

export default App;



