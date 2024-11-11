import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";
import DeleteExercise from "./DeleteExercise";
import AddSet from "./AddSet"; // Import AddSet component
import DeleteSet from "./DeleteSet";
import { Exercise2 } from "../../types/types";

const ExerciseList = () => {
  // Get the context
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  // DELETE LATER, FOR TESTING
  if (AvailableExercises.length === 0) {
    setAvailableExercises(defaultAvaliableExercises);
  }

  const handleAddSetToExercise = (updatedExercise: Exercise2) => {
    const updatedExercises = AvailableExercises.map((ex) =>
        ex.name === updatedExercise.name ? updatedExercise : ex
    );
    setAvailableExercises(updatedExercises);
  };

  //TODO Function to load the current list of workouts from the Backend

  // return (
  //   <ul className="list-availableExercises">
  //     {AvailableExercises.map((Exercise) => (
  //       <div className="exercise-box">
  //         <h2>{Exercise.name}</h2>
  //         <DeleteExercise Exercise={Exercise} />
  //       </div>
  //     ))}
  //   </ul>
  // );

  const handleUpdateExercise = (updatedExercise: Exercise2) => {
    const updatedExercises = AvailableExercises.map((ex) =>
        ex.name === updatedExercise.name ? updatedExercise : ex
    );
    setAvailableExercises(updatedExercises);
  };

  return (
      <ul className="list-availableExercises">
        {AvailableExercises.map((Exercise) => (
            <div key={Exercise.name} className="exercise-box">
              <h2>{Exercise.name}</h2>
              <h3>Sets:</h3>
              <ul>
                {Exercise.sets.map((set, index) => (
                    <li key={index}>
                      Set {index + 1}: Reps - {set.reps}, Weight - {set.weight}
                      <DeleteSet
                          exercise={Exercise}
                          setIndex={index}
                          onUpdateExercise={handleUpdateExercise}
                      />
                    </li>
                ))}
              </ul>
              <AddSet exercise={Exercise} onAddSet={handleAddSetToExercise} />
            </div>
        ))}
      </ul>
  );
};

export default ExerciseList;
