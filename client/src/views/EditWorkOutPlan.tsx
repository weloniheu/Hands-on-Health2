import AddExerciseType from "../componants/EditWorkOutPlan/AddExerciseType";
import ExerciseList from "../componants/EditWorkOutPlan/ExerciseList";
import SearchBar from "../componants/EditWorkOutPlan/SearchBar";
import "./css/EditWorkOutPlan.css";

export const EditWorkOutPlan = () => {
  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Add Exercise</h1>
        <button className="back-button">Back</button>
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
