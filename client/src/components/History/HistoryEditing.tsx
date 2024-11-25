import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../WorkOutPlan/Header";
import "../WorkOutPlan/css/WorkoutTemplateOptions.css";
import "./HistoryEditing.css";

interface WorkoutPlan {
    _id: string;
    planName: string;
    duration: number;
    exerciseTypes: string[];
    intensity: string;
    createdAt: string;
}

const HistoryEditing: React.FC = () => {
    const navigate = useNavigate();
    // dummy data
    const [workoutHistory, setWorkoutHistory] = useState<WorkoutPlan[]>([
        {
            _id: "1",
            planName: "Morning Yoga",
            duration: 30,
            exerciseTypes: ["Yoga"],
            intensity: "Low",
            createdAt: "2024-11-23T14:20:02.000Z",
        },
        {
            _id: "2",
            planName: "Evening Cardio",
            duration: 45,
            exerciseTypes: ["Cardio"],
            intensity: "High",
            createdAt: "2024-11-22T18:15:30.000Z",
        },
    ]);
    const [isEditing, setIsEditing] = useState(false);

    const handleDeleteWorkout = (planId: string) => {
        setWorkoutHistory((prev) => prev.filter((plan) => plan._id !== planId));
    };

    return (
        <div className="duration-page-view">
            <Header />
            <div className="title-and-cancel">
                <h1 className="focus">History</h1>
                <button className="cancel-button" onClick={() => navigate("/home")}>
                    Cancel
                </button>
            </div>

            <div className="history-container">
                {workoutHistory.length > 0 ? (
                    workoutHistory.map((plan) => (
                        <div key={plan._id} className="workout-item">
                            <div className="workout-info">
                                <h3 className="workout-title">{plan.planName}</h3>
                                <p className="workout-details">
                                    Duration: {plan.duration} mins | Focus: {plan.exerciseTypes.join(", ")} | Intensity:{" "}
                                    {plan.intensity} | Date: {new Date(plan.createdAt).toLocaleString()}
                                </p>
                            </div>
                            {isEditing && (
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteWorkout(plan._id)}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="subtitle">No workout history found.</p>
                )}
            </div>

            <div className="navigation-buttons">
                {isEditing ? (
                    <button
                        className="next-button"
                        onClick={() => setIsEditing(false)}
                    >
                        Finish Editing
                    </button>
                ) : (
                    <button
                        className="next-button"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit History
                    </button>
                )}
            </div>
        </div>
    );
};

export default HistoryEditing;
