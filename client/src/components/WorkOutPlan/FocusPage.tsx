import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "../../contexts/WorkoutContext";

const FocusPage: React.FC = () => {
    const { setFocus } = useWorkout();
    const [selectedFocus, setSelectedFocus] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSelect = (focus: string) => {
        setSelectedFocus(focus);
        // setFocus(focus);
    };

    const handleNext = () => {
        if (selectedFocus !== null) {
            navigate("/intensity");
        }
    };

    const handlePrev = () => {
        navigate("/select-duration");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Focus</h1>
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => handleSelect("Cardio")}>Cardio</button>
                <button onClick={() => handleSelect("Strength")}>Strength</button>
                <div style={{ marginTop: "20px" }}>
                    <button onClick={handlePrev} style={buttonStyle}>
                        Prev
                    </button>
                    <button
                        onClick={handleNext}
                        style={{ ...buttonStyle, marginLeft: "10px" }}
                        disabled={selectedFocus === null}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4a90e2",
    color: "white",
    transition: "background-color 0.3s",
};

export default FocusPage;
