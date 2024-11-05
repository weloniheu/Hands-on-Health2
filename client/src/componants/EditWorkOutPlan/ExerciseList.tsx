import { useContext } from "react";
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
  } = useContext(AppContext);

  // EDIT LATER, FOR TESTING
  if (AvailableExercises.length === 0) {
    setAvailableExercises(defaultAvaliableExercises);
  }

  //TODO Function to load the current list of workouts from the Backend

  return (
    <ul className="list-availableExercises">
      {SearchedExercises.map((Exercise) => (
        <div className="exercise-box">
          <h2>{Exercise.name}</h2>
          <DeleteExercise Exercise={Exercise} />
        </div>
      ))}
    </ul>
  );
};

export default ExerciseList;
