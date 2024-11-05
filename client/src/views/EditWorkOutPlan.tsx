import React from "react";
import ExerciseList from "../componants/EditWorkOutPlan/ExerciseList";
import { useNavigate } from "react-router-dom";

export const EditWorkOutPlan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Add Exercise</h1>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="exercise-list-container">
        <ExerciseList />
      </div>
      <button onClick={() => navigate('/focus-muscles')}>Edit Workout Plan</button> {/* New Button */}
    </div>
  );
};