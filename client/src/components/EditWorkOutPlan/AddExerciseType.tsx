import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { defaultAvaliableExercises } from "../../constants/Initial_consts";
import DeleteExercise from "./DeleteExerciseType";
import { Exercise2 } from "../../types/types";

const AddExerciseType = () => {
  // Get the context
  const {
    AvailableExercises,
    SearchedExercises,
    setSearchedExercises,
    setAvailableExercises,
  } = useContext(AppContext);

  const [newTypeWindowEnable, setNewTypeWindowEnable] = useState(false);
  const newTypeWindowSwitch = (OnOff: boolean) => {
    setNewTypeWindowEnable(OnOff);
  };

  const AddNewExerciseType = (NewExerciseType: Exercise2) => {
    setAvailableExercises(() => [...AvailableExercises, NewExerciseType]);
  };

  // When add button is clicked, retrieve the inputs and make a new Exercise2 object
  const handleAddNewExerciseType = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const exercise_name = event.currentTarget.input1.value;
    const category = event.currentTarget.input2.value;

    // Create new Exercise2 Object
    const newAvailableWorkout = {
      name: exercise_name,
      type: category,
      sets: [],
    };

    // Call functions
    AddNewExerciseType(newAvailableWorkout);
    newTypeWindowSwitch(false);
  };

  return (
    <div>
      <button
        className="new-button"
        onClick={() => newTypeWindowSwitch(true)}
      >
        New
      </button>
      {newTypeWindowEnable ? (
        <div className="overlay-AET">
          <div className="modal-AET">
            <h2>New Exercise</h2>
            <form onSubmit={(event) => handleAddNewExerciseType(event)}>
              <div className="input-fields-AET">
                <label htmlFor="Exercise-AET">Exercise:</label>
                <input
                  id="input1"
                  name="input2"
                  type="text"
                  placeholder="Enter Your Exercise Name"
                />
                <label htmlFor="Category-AET">Category:</label>
                <select
                  id="input2"
                  name="input2"
                  className="dropdown-AET"
                >
                  <option
                    value=""
                    disabled
                    selected
                  >
                    Select an option
                  </option>
                  <option value="cat1">Chest</option>
                  <option value="cat2">Legs</option>
                  <option value="cat3">Biceps</option>
                  <option value="cat4">Triceps</option>
                  <option value="cat5">Back</option>
                  <option value="cat6">Shoulders</option>
                  <option value="cat7">Default</option>
                </select>
              </div>
              <div className="button-container-AET">
                <button
                  type="submit"
                  className="modal-button-AET"
                >
                  Add
                </button>
                <button
                  className="modal-button-AET"
                  onClick={() => newTypeWindowSwitch(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddExerciseType;
