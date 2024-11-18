import { useState } from "react";
import { createWorkoutTemplate } from "../../utils/exercise-utils";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "../../contexts/WorkoutContext";

function Review() {
    const { duration, focus, intensity } = useWorkout();
    const navigate = useNavigate();
    const [planName, setPlanName] = useState("Workout 1");
    const [editPlanName, setEditPlanName] = useState(false);
    const userId = "Tester";

    async function handleStartWorkout() {
        const data = await createWorkoutTemplate(userId, planName, focus, duration, intensity);
        console.log(data);

        navigate("/current-workout");
    }

    // Navigate to the prevous page
    function handlePrevious() {
        navigate("/select-intensity");
    }

    // Cancel the workout template creation
    function handleCancel() {
        navigate("/");
    }

    return (
        <div>
            <div className="navbar-space"></div> {/* Placeholder space for future navbar */}
            <div className="top-nav-buttons">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            <div className="workout-plan-container">
                <div className="plan-detail-container">
                    <p className="plan-detail">
                        Name:{" "}
                        {editPlanName ? (
                            <input
                                type="text"
                                value={planName}
                                className="plan-name-input"
                                onChange={(e) => setPlanName(e.target.value)}
                            />
                        ) : (
                            <strong>{planName}</strong>
                        )}
                    </p>
                    <p className="plan-detail">Duration: {duration}</p>
                    <p className="plan-detail">Focus: {focus}</p>
                    <p className="plan-detail">Intensity: {intensity}</p>
                </div>
                <div className="edit-buttons">
                    <button onClick={() => setEditPlanName(!editPlanName)}>
                        {editPlanName ? "Save Name" : "Edit Name"}
                    </button>
                    <button onClick={handleStartWorkout}>Start Workout</button>
                </div>
            </div>
        </div>
    );
}

export default Review;
