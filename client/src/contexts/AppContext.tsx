import { Exercise2 } from "../types/types";
import { useState, createContext } from "react";

interface AppContextType {
  AvailableExercises: Exercise2[];
  setAvailableExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
}

const initialState: AppContextType = {
  AvailableExercises: [], //Need to change this later to load the user's saved Exercise types
  setAvailableExercises: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [AvailableExercises, setAvailableExercises] = useState<Exercise2[]>(
    initialState.AvailableExercises
  );
  return (
    <AppContext.Provider
      value={{
        AvailableExercises: AvailableExercises,
        setAvailableExercises: setAvailableExercises,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
