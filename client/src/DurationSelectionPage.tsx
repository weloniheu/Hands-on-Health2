import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "./WorkoutContext";
import "./DurationSelectionPage.css";

const DurationSelectionPage: React.FC = () => {
    const { setDuration } = useWorkout();
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleSelect = (duration: number) => {
        setSelectedDuration(duration);
        setDuration(duration);
    };

    const handleNext = () => {
        if (selectedDuration !== null) {
            navigate("/focus");
        }
    };

    const handleCancel = () => {
        navigate("/"); // to Home Page
    };

    return (
        <div className="app">
            <header className="header">
                <h1 className="app-title">Hands on Health</h1>
                <img src="/path/to/logo.png" alt="Logo" className="app-logo" />
            </header>
            <div className="main-content">
                <div className="subtitle-row">
                    <h2 className="subtitle">Choose Your Workout Plan</h2>
                    <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
                <h3 className="duration-title">Duration</h3>
                <div className="duration-options">
                    {[30, 60, 90, 120].map((min) => (
                        <button
                            key={min}
                            className={`duration-button ${selectedDuration === min ? "selected" : ""}`}
                            onClick={() => handleSelect(min)}
                        >
                            {min} min
                        </button>
                    ))}
                </div>
                <button className="duration-next-button" onClick={handleNext} disabled={selectedDuration === null}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default DurationSelectionPage;
