import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";
import DeleteExercise from "./DeleteExerciseType";
import { Exercise2 } from "../../types/types";
import ExerciseModal from "./AddExerciseModal";
import AddExercise from "./AddExercise";

const ExerciseList = () => {
  // Get the context
  const {
    AvailableExercises,
    SearchedExercises,
    setSearchedExercises,
    setAvailableExercises,
    noSearchResult,
  } = useContext(AppContext);

  const [selectedExercise, setSelectedExercise] = useState<Exercise2|null>(null); // Track selected exercise for modal

  // EDIT LATER, FOR TESTING
  if (AvailableExercises.length === 0) {
    setAvailableExercises(defaultAvaliableExercises);
  }

  // Used to display everything in the available workout list at initial page load
  if (!noSearchResult && SearchedExercises.length === 0) {
    //If search input is not empty and the length is still 0, indicating no result
    console.log("here");
    setSearchedExercises(AvailableExercises);
  }

  // Used to reflect any new exercises types added
  useEffect(() => {
    //TODO Function to sort the AvailableExercises alphabetically before updating it;

    setSearchedExercises(AvailableExercises);
  }, [AvailableExercises]);

  // Gives a pop-up when an exercise item is clicked
  const handleExerciseClick = (exercise: Exercise2) => {
    setSelectedExercise(exercise);
  };

  // To close the pop
  const handleModalClose = () => {
    setSelectedExercise(null);
  };

  // To add the exerice with sets and reps chosen to Current Workout
  const handleAddExerciseToCW = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    const setsInput = document.getElementById('setsInput') as HTMLInputElement;
    const repsInput = document.getElementById('repsInput') as HTMLInputElement;

    const numSets = parseInt(setsInput?.value || '0');
    const numReps = parseInt(repsInput?.value || '0');

    if (selectedExercise){
    // Create new Exercise2 Object
      const newExerciseToAdd: Exercise2 = {
        name: selectedExercise.name,
        type: selectedExercise.type,
        sets: [{ weight: numSets, reps: numReps},
        ],
      };
      AddExercise(newExerciseToAdd);
    }

    handleModalClose();
  };


  //TODO Function to load the current list of workouts from the Backend

  return (
    <ul className="list-availableExercises">
      {SearchedExercises.map((Exercise) => (
        // Add onClick so that upon pressing, the exercise is added to current workout
        <div className="exercise-box" key={Exercise.name}>
          <h2>{Exercise.name}</h2>
          <button className="add-new-exType" onClick={() => handleExerciseClick(Exercise)}>Add</button>
          <DeleteExercise Exercise={Exercise} />
        </div> 
      ))}
      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={handleModalClose}
          onAdd={handleAddExerciseToCW}
        />
      )}
    </ul>
  );
};

export default ExerciseList;
