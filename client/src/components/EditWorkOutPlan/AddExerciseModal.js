import React, { useState } from "react";


const ExerciseModal = ({ exercise, onClose, onAdd }) => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleAdd = () => {
    onAdd({ exercise, sets, reps });
    onClose(); // Close the modal after adding
  };

  return (
    <div className="overlay-AET">
      <div className="modal-AET">
        <h2>{exercise.name}</h2>
        <p className="exType">Exercise Type: {exercise.type}</p>
        <div className="input-fields-AddExInfo">
          <label>
            Sets:
            <input
              id="setsInput"
              name="inputSetsNo"
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              placeholder="Enter number of sets"
            />
          </label>
          <label>
            Reps:
            <input
              id="repsInput"
              name="inputRepsNo"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="Enter number of reps"
            />
          </label>
        </div>
        <div className="button-container-AET">
          <button onClick={handleAdd} className="modal-button-AET">Add</button>
          <button onClick={onClose} className="modal-button-AET">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;