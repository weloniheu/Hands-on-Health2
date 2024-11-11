import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";
import DeleteExercise from "./DeleteExercise";
import DeleteSet from "./DeleteSet";
import { Exercise2 } from "../../types/types";

const ExerciseList = () => {
  // Get the context
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  // DELETE LATER, FOR TESTING
  if (AvailableExercises.length === 0) {
    setAvailableExercises(defaultAvaliableExercises);
  }

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
        {AvailableExercises.map((exercise) => (
            <div key={exercise.name} className="exercise-box">
              <h2>{exercise.name}</h2>
              <h3>Sets:</h3>
              <ul>
                {exercise.sets.map((set, index) => (
                    <li key={index}>
                      Set {index + 1}: Reps - {set.reps}, Weight - {set.weight}
                      <DeleteSet
                          exercise={exercise}
                          setIndex={index}
                          onUpdateExercise={handleUpdateExercise}
                      />
                    </li>
                ))}
              </ul>
              <DeleteExercise Exercise={exercise} />
            </div>
        ))}
      </ul>
  );
};

export default ExerciseList;
