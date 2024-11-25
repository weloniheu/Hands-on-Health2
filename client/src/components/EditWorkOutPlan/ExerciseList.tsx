import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { fetchExercises } from "../../utils/exercise-utils";
import { Exercise2 } from "../../types/types";
import ExerciseModal from "./AddExerciseModal";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ExerciseListProps {
  navigateToCurrentWorkout: () => void;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ navigateToCurrentWorkout }) => {
  const {
    AvailableExercises,
    SearchedExercises,
    setSearchedExercises,
    setAvailableExercises,
    noSearchResult,
    addExerciseToCurrentWorkout,
  } = useContext(AppContext);

  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const [selectedExercise, setSelectedExercise] = useState<Exercise2 | null>(null);

  async function handleExercisesFetch(){
    const exercises = await fetchExercises(token);

    if (exercises.logout) {
      logout();
      navigate("/login");
    }

    if (exercises.notActive) {
      navigate("/home");
    }

    setAvailableExercises(exercises);
  }

  useEffect(() => {
    if (token) {
        handleExercisesFetch();
    }
  }, [token]);

  useEffect(() => {
    if (!noSearchResult && SearchedExercises.length === 0) {
      setSearchedExercises(AvailableExercises);
    }
  }, [AvailableExercises, noSearchResult, SearchedExercises.length, setSearchedExercises]);

  const handleExerciseClick = (exercise: Exercise2) => {
    setSelectedExercise(exercise);
  };

  const handleModalClose = () => {
    setSelectedExercise(null);
  };

  const handleAddExerciseToCW = (event: React.FormEvent<HTMLFormElement>) => {
    const setsInput = document.getElementById("setsInput") as HTMLInputElement;
    const repsInput = document.getElementById("repsInput") as HTMLInputElement;

    const numSets = parseInt(setsInput?.value || "0");
    const numReps = parseInt(repsInput?.value || "0");

    if (selectedExercise) {
      const newExerciseToAdd: Exercise2 = {
        name: selectedExercise.name,
        type: selectedExercise.type,
        sets: [{ weight: numSets, reps: numReps }],
      };
      addExerciseToCurrentWorkout(newExerciseToAdd);
    }

    handleModalClose();
    navigateToCurrentWorkout();
  };

  return (
    <ul className="list-availableExercises">
      {SearchedExercises.map((Exercise) => (
        <div className="exercise-box" key={Exercise.name}>
          <h2>{Exercise.name}</h2>
          <div className="add-exercise-button-box">
            <button
              className="add-new-exType"
              onClick={() => handleExerciseClick(Exercise)}
            >
              Add
            </button>
          </div>
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
