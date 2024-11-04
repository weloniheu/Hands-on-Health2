import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DurationSelectionPage from "./DurationSelectionPage";
import FocusPage from "./FocusPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
                    <Route path="/select-duration" element={<DurationSelectionPage />} /> {/* Duration Selection Page */}
                    <Route path="/focus" element={<FocusPage />} /> {/* Focus Page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

