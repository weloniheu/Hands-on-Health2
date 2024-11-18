import { useContext, useEffect, useState } from "react";
import "./css/CurrentWorkoutView.css";
import { AppContext } from "../contexts/AppContext";
import AddSet from "../components/EditWorkOutPlan/AddSet";
import DeleteSet from "../components/EditWorkOutPlan/DeleteSet";
import DeleteExerciseType from "../components/EditWorkOutPlan/DeleteExerciseType";
import { Exercise2 } from "../types/types";
import { fetchCurrentPlan } from "../utils/exercise-utils";

interface CurrentWorkoutProps {
    onAddExercise: () => void;
}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({
  onAddExercise,
}) => {
  const { currentWorkoutExercises, setCurrentWorkoutExercises, deleteExerciseFromCurrentWorkout, AvailableExercises } =
    useContext(AppContext);

  const [selectedExercises, setSelectedExercises] = useState(
    currentWorkoutExercises.map((exercise) => exercise.name)
  );
    
  // Get the current workout plan information from backend
  async function handleDataFetch() {
    const userId = "Tester";
    const data = await fetchCurrentPlan(userId);

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

     console.log(transformedExercises);
     setCurrentWorkoutExercises(transformedExercises);
  }

  useEffect(() => {
     handleDataFetch();
  }, []);

  // Function to handle updating exercise sets
  const handleUpdateExercise = (updatedExercise: Exercise2) => {
    const updatedExercises = currentWorkoutExercises.map((exercise) =>
      exercise.name === updatedExercise.name ? updatedExercise : exercise
    );
    setCurrentWorkoutExercises(updatedExercises);
  };

  const handleDeleteExercise = (exToDelete: String) => {
    deleteExerciseFromCurrentWorkout(exToDelete);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedName = event.target.value;
    const updatedSelectedExercises = [...selectedExercises];
    updatedSelectedExercises[index] = selectedName;
    setSelectedExercises(updatedSelectedExercises);
  };

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Current Workout</h1>
        <button className="finish-exercise">Finish Workout</button>
      </div>
      <div className="exercise-list-container">
        {currentWorkoutExercises.map((exercise, index) => (
          <div
            key={index}
            className="exercise-card"
          >
            <div className="exercise-header">
              <h2 className="exercise-title">
              {/*selectedExercises[index] || "Select an exercise"*/}
                <select 
                  className="dropdown-icon" 
                  value={selectedExercises[index] || ""} 
                  onChange={(event) => handleSelectChange(event, index)}
                  >
                  {AvailableExercises.map((exercise, index) => (
                    <option key={index} value={exercise.name}>
                      {exercise.name}
                    </option>
                  ))}
                  </select>
                  {/* <span className="dropdown-arrow">▼</span> */}
              </h2>
              <div className="exercise-controls">
                <AddSet
                  exercise={exercise}
                  onAddSet={handleUpdateExercise}
                />
                <button className="control-button">Demo</button>
                <button className="control-button" onClick={() => handleDeleteExercise(exercise.name)}>Delete</button>
              </div>
             </div>

             <div className="exercise-content">
                <div className="set-list">
                    {exercise.sets.map((set, setIndex) => (
                        <div key={setIndex} className="set-item">
                            <label>Weight:</label>
                            <input type="number" defaultValue={set.weight} className="set-input" />
                            <label>Reps:</label>
                            <input type="number" defaultValue={set.reps} className="set-input" />
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
                    <textarea className="notes-input" placeholder="Add any notes here..." />
                </div>
            </div>
        </div>
    ))}
            </div>
            <div>
                <button className="add-exercise-button" onClick={onAddExercise}>
                    Add Exercise
                </button>
            </div>
        </div>
    );
};
