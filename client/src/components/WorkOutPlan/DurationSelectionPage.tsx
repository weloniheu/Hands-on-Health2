import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "../../contexts/WorkoutContext";
import Header from "./Header";
import "./css/WorkoutTemplateOptions.css";

const DurationSelectionPage: React.FC = () => {
    const { setDuration } = useWorkout();
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleSelectDuration = (duration: number) => {
        setSelectedDuration(duration);
        setDuration(duration);
    };

    function handleCancelButton() {
        navigate("/");
    }

    const isDurationSelected = selectedDuration !== null;

    return (
        <div className="duration-page-view">
            <Header />
            <div className="content-container">
                <div className="title-and-cancel">
                    <h3 className="subtitle">Choose Your Workout Duration</h3>
                    <button className="cancel-button" onClick={handleCancelButton}>
                        Cancel
                    </button>
                </div>
                <h2 className="duration">Duration</h2>
                <div className="duration-group-container">
                    {[30, 60, 90, 120].map((duration) => (
                        <button
                            key={duration}
                            className={`duration-button ${selectedDuration === duration ? "selected" : ""}`}
                            onClick={() => handleSelectDuration(duration)}
                        >
                            {duration} min
                        </button>
                    ))}
                </div>
                <div className="navigation-buttons">
                    <button className="prev-button" onClick={handleCancelButton}>
                        Prev
                    </button>
                    <button
                        className="next-button"
                        onClick={() => navigate("/select-focus")}
                        disabled={!isDurationSelected}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DurationSelectionPage;
