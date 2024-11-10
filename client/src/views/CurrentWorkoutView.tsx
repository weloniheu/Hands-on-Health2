import "./css/AddExerciseView.css";

interface CurrentWorkoutProps {
    onAddExercise: () => void
}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({ onAddExercise }) => {

    return (
      <div>
        <div className="header-container">
          <h1 className="header-title">Current Workout</h1>
          <button className="back-button" >Finish Exercise</button>
        </div>
        <div className="exercise-list-container">

        </div>
        <div>
        <button className="add-exercise-button" onClick={onAddExercise}>Add Exercise</button>        
        </div>
      </div>
    ); 
}