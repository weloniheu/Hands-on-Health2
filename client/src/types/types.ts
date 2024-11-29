export type Exercise = {
  name: string;
  type: string;
  sets: number;
  reps: number;
};

export type Exercise2 = {
  name: string;
  type: string;
  sets: Set[];
  notes: string;
};

export type Set = {
  // sets: number
  reps: number;
  weight: number;
};

export type FocusMuscles = {
  id: number;
  name: string;
  selected: boolean;
};
