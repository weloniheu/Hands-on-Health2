import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Exercise2 } from "../../types/types";
import { EditAddExercise } from "../../views/AddExerciseView";

const AddExercise = () => {
  const { AvailableExercises, setAvailableExercises } = useContext(AppContext);

  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [sets, setSets] = useState([])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newExercise: Exercise2 = {
      name,
      type,
      sets,
    };
  };

  return (
    <div className="header-container">
      
    </div>
  );
};

export default AddExercise;
