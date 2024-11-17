import { Exercise2 } from "../types/types";
import { useState, createContext, ReactNode } from "react";

interface AppContextType {
    AvailableExercises: Exercise2[];
    setAvailableExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
    SearchedExercises: Exercise2[];
    setSearchedExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>;
    noSearchResult: boolean;
    setNoSearchResult: React.Dispatch<React.SetStateAction<boolean>>;
    currentWorkoutExercises: Exercise2[];
    setCurrentWorkoutExercises: React.Dispatch<React.SetStateAction<Exercise2[]>>; // Added here
    addExerciseToCurrentWorkout: (exercise: Exercise2) => void;
}

const initialState: AppContextType = {
    AvailableExercises: [],
    setAvailableExercises: () => {},
    SearchedExercises: [],
    setSearchedExercises: () => {},
    noSearchResult: false,
    setNoSearchResult: () => {},
    currentWorkoutExercises: [],
    setCurrentWorkoutExercises: () => {}, // Added here
    addExerciseToCurrentWorkout: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = (props: AppProviderProps) => {
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
                AvailableExercises,
                setAvailableExercises,
                SearchedExercises,
                setSearchedExercises,
                noSearchResult,
                setNoSearchResult,
                currentWorkoutExercises,
                setCurrentWorkoutExercises, // Provided here
                addExerciseToCurrentWorkout,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
