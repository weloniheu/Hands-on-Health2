import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";
import { Exercise2 } from "../../types/types";

type Props = {
  Exercise: Exercise2; // Set the Exercise variable to the Exercise2 Type
};

const DeleteExercise = (props: Props) => {
  //props is of type Props listed above

  // Get the context
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);
  const handleDeleteAvailableExercise = (exercise: Exercise2) => {
    //This function takes exercise as a param
    console.log(exercise.name);
    setAvailableExercises(() =>
      AvailableExercises.filter((ex) => {
        return ex.name !== exercise.name;
      })
    );
    // ADD BACKEND DELETE FUNCTION LATER
  };
  return (
    <div>
      <button onClick={() => handleDeleteAvailableExercise(props.Exercise)}>
        {/*Delete*/}
          X
      </button>
    </div>
  );
};

export default DeleteExercise;
