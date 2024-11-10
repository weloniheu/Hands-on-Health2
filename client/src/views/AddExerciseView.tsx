import AddExerciseType from "../components/EditWorkOutPlan/AddExerciseType";
import ExerciseList from "../components/EditWorkOutPlan/ExerciseList";
import SearchBar from "../components/EditWorkOutPlan/SearchBar";
import "./css/AddExerciseView.css";

interface EditAddExerciseProps {
  onBack: () => void
}

export const EditAddExercise: React.FC<EditAddExerciseProps> = ({ onBack }) => {

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Add Exercise</h1>
        <button className="back-button" onClick={onBack}>Back</button>
      </div>
      <div>
        <SearchBar />
        <AddExerciseType />
      </div>
      <div className="exercise-list-container">
        <ExerciseList />
      </div>
    </div>
  );
};
