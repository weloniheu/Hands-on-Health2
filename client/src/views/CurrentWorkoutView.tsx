import { useContext } from "react";
import "./css/CurrentWorkoutView.css";
import { AppContext } from "../contexts/AppContext";
import AddSet from "../components/EditWorkOutPlan/AddSet";
import DeleteSet from "../components/EditWorkOutPlan/DeleteSet";
import DeleteExerciseType from "../components/EditWorkOutPlan/DeleteExerciseType";
import { Exercise2 } from "../types/types";

interface CurrentWorkoutProps {
  onAddExercise: () => void;
}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({
  onAddExercise,
}) => {
  const { currentWorkoutExercises, setCurrentWorkoutExercises } =
    useContext(AppContext);

  // Function to handle updating exercise sets
  const handleUpdateExercise = (updatedExercise: Exercise2) => {
    const updatedExercises = currentWorkoutExercises.map((exercise) =>
      exercise.name === updatedExercise.name ? updatedExercise : exercise
    );
    setCurrentWorkoutExercises(updatedExercises);
  };

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Current Workout</h1>
        <button className="finish-exercise">Finish Exercise</button>
      </div>
      <div className="exercise-list-container">
        {currentWorkoutExercises.map((exercise, index) => (
          <div
            key={index}
            className="exercise-card"
          >
            <div className="exercise-header">
              <h2 className="exercise-title">
                {exercise.name} {/*<span className="dropdown-icon">▼</span>*/}
              </h2>
              <div className="exercise-controls">
                <AddSet
                  exercise={exercise}
                  onAddSet={handleUpdateExercise}
                />
                <button className="control-button">Demo</button>
                <button className="control-button">Delete</button>
              </div>
            </div>

            <div className="exercise-content">
              <div className="set-list">
                {exercise.sets.map((set, setIndex) => (
                  <div
                    key={setIndex}
                    className="set-item"
                  >
                    <label>Weight:</label>
                    <input
                      type="number"
                      defaultValue={set.weight}
                      className="set-input"
                    />
                    <label>Reps:</label>
                    <input
                      type="number"
                      defaultValue={set.reps}
                      className="set-input"
                    />
                    <DeleteSet
                      exercise={exercise}
                      setIndex={setIndex}
                      onUpdateExercise={handleUpdateExercise}
                    />
                  </div>
                ))}
              </div>
              <div className="notes-section">
                <label>Notes:</label>
                <textarea
                  className="notes-input"
                  placeholder="Add any notes here..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="add-exercise-button"
          onClick={onAddExercise}
        >
          Add Exercise
        </button>
      </div>
    </div>
  );
};
