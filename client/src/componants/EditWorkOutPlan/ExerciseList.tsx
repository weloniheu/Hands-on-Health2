import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";
import DeleteExercise from "./DeleteExercise";
import { Exercise2 } from "../../types/types";

const ExerciseList = () => {
  // Get the context
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  // DELETE LATER, FOR TESTING
  if (AvailableExercises.length === 0) {
    setAvailableExercises(defaultAvaliableExercises);
  }

  //TODO Function to load the current list of workouts from the Backend

  return (
    <ul className="list-availableExercises">
      {AvailableExercises.map((Exercise) => (
        <div className="exercise-box">
          <h2>{Exercise.name}</h2>
          <DeleteExercise Exercise={Exercise} />
        </div>
      ))}
    </ul>
  );
};

export default ExerciseList;
