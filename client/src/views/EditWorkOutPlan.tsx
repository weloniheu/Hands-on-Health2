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
      <SearchBar />
      <div className="exercise-list-container">
        <ExerciseList />
      </div>
    </div>
  );
};
