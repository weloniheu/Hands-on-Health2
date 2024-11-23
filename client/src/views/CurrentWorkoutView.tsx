import { useContext, useEffect, useState } from "react";
import "./css/CurrentWorkoutView.css";
import { AppContext } from "../contexts/AppContext";
import AddSet from "../components/EditWorkOutPlan/AddSet";
import DeleteSet from "../components/EditWorkOutPlan/DeleteSet";
import { Exercise2 } from "../types/types";
import { fetchCurrentPlan } from "../utils/exercise-utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/WorkOutPlan/Header";

interface CurrentWorkoutProps {
    onAddExercise: () => void;
}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({ onAddExercise }) => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const {
        currentWorkoutExercises,
        setCurrentWorkoutExercises,
        deleteExerciseFromCurrentWorkout,
        AvailableExercises,
    } = useContext(AppContext);

    const [selectedExercises, setSelectedExercises] = useState(
        currentWorkoutExercises.map((exercise) => exercise.name)
    );

    // Fetch workout data from backend
    async function handleDataFetch() {
        const data = await fetchCurrentPlan(token);

        if (data.logout) {
            logout();
            navigate("/login");
        }

        const transformedExercises: Exercise2[] = data.workoutPlan.map((exercise: any) => {
            const setsArray = Array.from({ length: exercise.sets }, () => ({
                weight: null,
                reps: null,
            }));

            return {
                name: exercise.name,
                type: exercise.type,
                sets: setsArray,
            };
        });

        setCurrentWorkoutExercises(transformedExercises);
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    // Update exercise sets
    const handleUpdateExercise = (updatedExercise: Exercise2) => {
        const updatedExercises = currentWorkoutExercises.map((exercise) =>
            exercise.name === updatedExercise.name ? updatedExercise : exercise
        );
        setCurrentWorkoutExercises(updatedExercises);
    };

    // Delete an exercise
    const handleDeleteExercise = (exerciseName: string) => {
        deleteExerciseFromCurrentWorkout(exerciseName);
    };

    // Update selected exercises
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const selectedName = event.target.value;
        const updatedSelectedExercises = [...selectedExercises];
        updatedSelectedExercises[index] = selectedName;
        setSelectedExercises(updatedSelectedExercises);
    };

    // Navigation functions
    const navigateHome = () => navigate("/");
    const navigateToDemo = (exerciseName: string) => navigate(`/workout-demo/${exerciseName}`);

    return (
        <div className="page--current-workout">
            <Header />
            <div className="container--header-action">
                <h1 className="text--header-title">Current Workout</h1>
                <button className="button--action-finish" onClick={navigateHome}>
                    Finish Workout
                </button>
                <button className="button--action-home" onClick={navigateHome}>
                    Home
                </button>
            </div>
            <div className="container--exercise-list">
                {currentWorkoutExercises.map((exercise, index) => (
                    <div key={index} className="card--exercise">
                        <div className="container--exercise-header">
                            <h2 className="text--exercise-name">
                                <select
                                    className="select--dropdown"
                                    value={selectedExercises[index] || ""}
                                    onChange={(event) => handleSelectChange(event, index)}
                                >
                                    {AvailableExercises.map((exerciseOption, idx) => (
                                        <option key={idx} value={exerciseOption.name}>
                                            {exerciseOption.name}
                                        </option>
                                    ))}
                                </select>
                            </h2>
                            <div className="container--controls">
                                <AddSet exercise={exercise} onAddSet={handleUpdateExercise} />
                                <button
                                    className="button--control"
                                    onClick={() => navigateToDemo(exercise.name)}
                                >
                                    Demo
                                </button>
                                <button
                                    className="button--control"
                                    onClick={() => handleDeleteExercise(exercise.name)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className="container--exercise-content">
                            <div className="container--set-list">
                                {exercise.sets.map((set, setIndex) => (
                                    <div key={setIndex} className="item--set">
                                        <label>Weight:</label>
                                        <input
                                            type="number"
                                            defaultValue={set.weight}
                                            className="input--set"
                                        />
                                        <label>Reps:</label>
                                        <input
                                            type="number"
                                            defaultValue={set.reps}
                                            className="input--set"
                                        />
                                        <DeleteSet
                                            exercise={exercise}
                                            setIndex={setIndex}
                                            onUpdateExercise={handleUpdateExercise}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="container--notes">
                                <label>Notes:</label>
                                <textarea
                                    className="input--notes"
                                    placeholder="Add any notes here..."
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button className="button--add-exercise" onClick={onAddExercise}>
                    Add Exercise
                </button>
            </div>
        </div>
    );
};
