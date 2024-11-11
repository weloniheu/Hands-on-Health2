import React from "react";
import { useWorkout } from "./WorkoutContext";

const ReviewWorkoutPage: React.FC = () => {
    const { duration, focus, intensity } = useWorkout();

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Review Your Workout</h1>
            <p>Duration: {duration} mins</p>
            <p>Focus: {focus}</p>
            <p>Intensity: {intensity}</p>
            <button
                style={{
                    margin: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#4a90e2",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                Start Workout
            </button>
        </div>
    );
};

export default ReviewWorkoutPage;
