import { Exercise2 } from "../types/types";
import { useState, createContext } from "react";

interface AppContextType {
  AvailableExercises: Exercise2[];
  setAvailableExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
  SearchedExercises: Exercise2[];
  setSearchedExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
  noSearchResult: boolean;
  setNoSearchResult: React.Dispatch<React.SetStateAction<boolean>>;
  currentWorkoutExercises: Exercise2[];
  addExerciseToCurrentWorkout: (exercise: Exercise2) => void;
}

const initialState: AppContextType = {
  AvailableExercises: [], //Need to change this later to load the user's saved Exercise types
  setAvailableExercises: () => {},
  SearchedExercises: [],
  setSearchedExercises: () => {},
  noSearchResult: false,
  setNoSearchResult: () => {},
  currentWorkoutExercises: [],
  addExerciseToCurrentWorkout: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [AvailableExercises, setAvailableExercises] = useState<Exercise2[]>(
    initialState.AvailableExercises
  );

  const [SearchedExercises, setSearchedExercises] = useState<Exercise2[]>(
    initialState.SearchedExercises
  );

  const [noSearchResult, setNoSearchResult] = useState<boolean>(
    initialState.noSearchResult
  );

  const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState<Exercise2[]>([]);
  const addExerciseToCurrentWorkout = (exercise: Exercise2) => {
    setCurrentWorkoutExercises((prevExercises) => [...prevExercises, exercise]);
  };


  return (
    <AppContext.Provider
      value={{
        AvailableExercises: AvailableExercises,
        setAvailableExercises: setAvailableExercises,
        SearchedExercises: SearchedExercises,
        setSearchedExercises: setSearchedExercises,
        noSearchResult: noSearchResult,
        setNoSearchResult: setNoSearchResult,
        currentWorkoutExercises,
        addExerciseToCurrentWorkout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
