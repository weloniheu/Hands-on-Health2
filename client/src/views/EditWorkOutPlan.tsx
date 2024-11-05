import React, { useState } from "react";
import ExerciseList from "../componants/EditWorkOutPlan/ExerciseList";
import EditFocusGroups from "../componants/EditWorkOutPlan/EditFocusGroups";
// import "./css/EditWorkOutPlan.css";

export const EditWorkOutPlan = () => {
  const [duration, setDuration] = useState(30); // Example 30 mins

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Add Exercise</h1>
        <button className="back-button">Back</button>
      </div>
      <div className="exercise-list-container">
        <ExerciseList />
        <EditFocusGroups duration={duration} setDuration={setDuration} />  {/* Add the EditFocusGroups component */}
      </div>
    </div>
  );
};
