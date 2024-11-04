import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";

const DeleteExercise = (ExerciseName: string) => {
  // Get the context
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  return (
    <div>
      <button onClick={() => handleDeleteAvailableExercise(ExerciseName)}>
        x
      </button>
    </div>
  );
};

export default DeleteExercise;
