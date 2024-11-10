import React, { createContext, useContext, useState, ReactNode } from 'react';

type WorkoutContextType = {
  duration: number | null;
  focus: string | null;
  intensity: string | null;
  setDuration: (value: number) => void;
  setFocus: (value: string) => void;
  setIntensity: (value: string) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [duration, setDuration] = useState<number | null>(null);
  const [focus, setFocus] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<string | null>(null);

  return (
    <WorkoutContext.Provider value={{ duration, focus, intensity, setDuration, setFocus, setIntensity }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};
