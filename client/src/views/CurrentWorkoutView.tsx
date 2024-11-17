import { useContext } from "react";
import "./css/CurrentWorkoutView.css";
import { AppContext } from "../contexts/AppContext";
import AddSet from "../components/EditWorkOutPlan/AddSet";

interface CurrentWorkoutProps {
  onAddExercise: () => void;
}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({
  onAddExercise,
}) => {
  const { currentWorkoutExercises, addExerciseToCurrentWorkout } =
    useContext(AppContext);

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
            className="exercise-item-container"
          >
            <div className="exercise-type-container">
              <h1>{exercise.type + ":"}</h1>
            </div>
            <div className="exercise-item">
              <div className="exercise-name-buttons-container">
                <h2>{exercise.name}</h2>
                <div className="exercise-button-holder">
                  <AddSet
                    exercise={exercise}
                    onAddSet={onAddSet}
                  />
                  <button className="delete-exercise-item">Delete</button>
                  <button className="demo-button">Demo</button>
                  <button className="edit-exercise-item">Edit</button>
                </div>
              </div>
              {exercise.sets.map((set, setIndex) => (
                <div key={setIndex}>
                  <div className="display-sets">
                    <p>Weight: {set.weight}</p>
                    <p>Reps: {set.reps}</p>
                  </div>
                </div>
              ))}
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
