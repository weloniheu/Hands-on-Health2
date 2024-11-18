import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "../../contexts/WorkoutContext";
import Header from "./Header";
import "./css/WorkoutTemplateOptions.css";

const IntensitySelectionPage: React.FC = () => {
    const { setIntensity } = useWorkout();
    const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSelectIntensity = (intensity: string) => {
        setSelectedIntensity(intensity);
        setIntensity(intensity);
    };

    const isIntensitySelected = selectedIntensity !== null;

    function handleCancelButton() {
        navigate("/");
    }

    return (
        <div className="intensity-page-view">
            <Header />
            <div className="content-container">
                <div className="title-and-cancel">
                    <h3 className="subtitle">Choose Your Workout Intensity</h3>
                    <button className="cancel-button" onClick={handleCancelButton}>
                        Cancel
                    </button>
                </div>
                <h2 className="intensity">Intensity</h2>
                <div className="intensity-group-container">
                    {["Low", "Normal", "High", "EXTREME"].map((intensity) => (
                        <button
                            key={intensity}
                            className={`intensity-button ${selectedIntensity === intensity ? "selected" : ""}`}
                            onClick={() => handleSelectIntensity(intensity)}
                        >
                            {intensity}
                        </button>
                    ))}
                </div>
                <div className="navigation-buttons">
                    <button className="prev-button" onClick={() => navigate("/select-focus")}>
                        Prev
                    </button>
                    <button
                        className="next-button"
                        onClick={() => navigate("/review-plan")}
                        disabled={!isIntensitySelected}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntensitySelectionPage;
