import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Exercise2 } from "../../types/types";

const AddExercise = () => {
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  const [exercise, setExercise] = useState<Exercise2>({
    name: "",
    type: "",
    sets: [],
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newExercise: Exercise2 = {
      name: "",
      type: "",
      sets: [],
    };
  };

  return (
    <div className="header-container">
      <h1 className="header-title">Add Exercise</h1>
      <button className="back-button">Back</button>
    </div>
  );
};

export default AddExercise;
