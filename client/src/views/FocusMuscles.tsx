import React, { useState } from "react";
import { FocusMuscles } from "../types/types";
import { useNavigate } from "react-router-dom";
import "./FocusMuscles.css";
import { useWorkout } from "../contexts/WorkoutContext";

const initialFocusMuscles: FocusMuscles[] = [
    { id: 1, name: "Chest", selected: false },
    { id: 2, name: "Legs", selected: false },
    { id: 3, name: "Back", selected: false },
    { id: 4, name: "Arms", selected: false },
    { id: 5, name: "Cardio", selected: false },
    { id: 6, name: "Abs", selected: false },
];

const FocusMusclesView: React.FC = () => {
    // Now accepts duration as a prop
    const { duration, setFocus } = useWorkout();
    const [muscleGroups, setMuscleGroups] = useState<FocusMuscles[]>(initialFocusMuscles);
    const navigate = useNavigate();

    const toggleMuscleGroup = (id: number) => {
        const updatedMuscleGroups = muscleGroups.map((group) => ({
            ...group,
            selected: group.id === id ? !group.selected : group.selected,
        }));

        setMuscleGroups(updatedMuscleGroups);

        // Update Focus
        const selectedFocuses = updatedMuscleGroups.filter((group) => group.selected).map((group) => group.name);

        setFocus(selectedFocuses);

        if (duration === 30 && selectedFocuses.length > 3) {
            alert("Only 3 muscle groups can be selected for a 30-minute workout.");
            setMuscleGroups(muscleGroups);
            setFocus(muscleGroups.filter((group) => group.selected).map((group) => group.name));
            return;
        }
    };

    return (
        <div className="focus-muscles-view">
            <div className="header-container">
                <h1>Choose Your Workout Plan</h1>
                <button className="cancel-button" onClick={() => navigate(-1)}>
                    Cancel
                </button>
            </div>
            <h2>Focus</h2>
            <div className="muscle-group-container">
                {muscleGroups.map((group) => (
                    <button
                        key={group.id}
                        onClick={() => toggleMuscleGroup(group.id)}
                        className={`muscle-group-button ${group.selected ? "selected" : ""}`}
                    >
                        {group.name}
                    </button>
                ))}
            </div>
            <div className="navigation-buttons">
                <button className="prev-button" onClick={() => navigate("/select-duration")}>
                    Prev
                </button>
                <button className="next-button" onClick={() => navigate("/select-intensity")}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default FocusMusclesView;
