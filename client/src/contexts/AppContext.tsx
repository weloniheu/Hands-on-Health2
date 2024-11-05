import { Exercise2 } from "../types/types";
import { useState, createContext } from "react";

interface AppContextType {
  AvailableExercises: Exercise2[];
  setAvailableExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
  SearchedExercises: Exercise2[];
  setSearchedExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
}

const initialState: AppContextType = {
  AvailableExercises: [], //Need to change this later to load the user's saved Exercise types
  setAvailableExercises: () => {},
  SearchedExercises: [],
  setSearchedExercises: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [AvailableExercises, setAvailableExercises] = useState<Exercise2[]>(
    initialState.AvailableExercises
  );

  const [SearchedExercises, setSearchedExercises] = useState<Exercise2[]>(
    initialState.SearchedExercises
  );
  return (
    <AppContext.Provider
      value={{
        AvailableExercises: AvailableExercises,
        setAvailableExercises: setAvailableExercises,
        SearchedExercises: SearchedExercises,
        setSearchedExercises: setSearchedExercises,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
