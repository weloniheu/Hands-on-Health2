import { useContext } from "react";
import "./css/CurrentWorkoutView.css";
import { AppContext } from "../contexts/AppContext";

interface CurrentWorkoutProps {
    onAddExercise: () => void
}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({ onAddExercise }) => {
  const { currentWorkoutExercises } = useContext(AppContext);

    return (
      <div>
        <div className="header-container">
          <h1 className="header-title">Current Workout</h1>
          <button className="finish-exercise" >Finish Exercise</button>
        </div>
        <div className="exercise-list-container">
        {currentWorkoutExercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <h2>{exercise.name}</h2>
            {exercise.sets.map((set, setIndex) => (
              <div key={setIndex}>
                <p>Weight: {set.weight}</p>
                <p>Reps: {set.reps}</p>
              </div>
            ))}
          </div>
        ))}
        </div>
        <div>
        <button className="add-exercise-button" onClick={onAddExercise}>Add Exercise</button>        
        </div>
      </div>
    ); 
}