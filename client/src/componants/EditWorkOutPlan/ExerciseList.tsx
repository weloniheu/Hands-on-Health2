import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";

const ExerciseList = () => {
  // Get the context
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  // DELETE LATER, FOR TESTING
  setAvailableExercises(defaultAvaliableExercises);

  //TODO Function to load the current list of workouts from the Backend

  return (
    <ul className="list-availableExercises">
      {AvailableExercises.map((Exercise) => (
        <div className="exercise-box">
          <h2>{Exercise.name}</h2>
        </div>
      ))}
    </ul>
  );
};

export default ExerciseList;
