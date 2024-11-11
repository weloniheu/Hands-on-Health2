import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "./WorkoutContext";
import "./IntensitySelectionPage.css";

const IntensitySelectionPage: React.FC = () => {
    const { setIntensity } = useWorkout();
    const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSelect = (intensity: string) => {
        setSelectedIntensity(intensity);
        setIntensity(intensity);
    };

    const handleNext = () => {
        if (selectedIntensity !== null) {
            navigate("/review-workout");
        }
    };

    const handlePrev = () => {
        navigate("/focus");
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="app">
            <header className="header">
                <h1 className="app-title">Hands on Health</h1>
                <img src="/path/to/logo.png" alt="Logo" className="app-logo" />
            </header>
            <div className="main-content">
                <div className="subtitle-row">
                    <h2 className="app-subtitle">Choose Your Intensity Level</h2>
                    <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
                <h3 className="intensity-title">Intensity</h3>
                <div className="intensity-options">
                    {["Low", "Normal", "High", "EXTREME"].map((level) => (
                        <button
                            key={level}
                            className={`intensity-button ${selectedIntensity === level ? "selected" : ""}`}
                            onClick={() => handleSelect(level)}
                        >
                            {level}
                        </button>
                    ))}
                    <button className="intensity-prev-button" onClick={handlePrev}>Prev</button>
                    <button
                        className="intensity-next-button"
                        onClick={handleNext}
                        disabled={selectedIntensity === null}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntensitySelectionPage;
