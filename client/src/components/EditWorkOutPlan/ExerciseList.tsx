import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";
import DeleteExercise from "./DeleteExerciseType";
import { Exercise2 } from "../../types/types";

const ExerciseList = () => {
  // Get the context
  const {
    AvailableExercises,
    SearchedExercises,
    setSearchedExercises,
    setAvailableExercises,
    noSearchResult,
  } = useContext(AppContext);

  // EDIT LATER, FOR TESTING
  if (AvailableExercises.length === 0) {
    setAvailableExercises(defaultAvaliableExercises);
  }

  // Used to display everything in the available workout list at initial page load
  if (!noSearchResult && SearchedExercises.length === 0) {
    setSearchedExercises(AvailableExercises);
  }

  // Used to reflect any new exercises types added
  useEffect(() => {
    setSearchedExercises(AvailableExercises);
  }, [AvailableExercises]);

  //TODO Function to load the current list of workouts from the Backend

  return (
    <ul className="list-availableExercises">
      {SearchedExercises.map((Exercise) => (
        // Add onClick so that upon pressing, the exercise is added to current workout
        <div className="exercise-box" >
          <h2>{Exercise.name}</h2>
          <DeleteExercise Exercise={Exercise} />
        </div> 
      ))}
    </ul>
  );
};

export default ExerciseList;
