import { API_BASE_URL } from "../constants/Initial_consts";
import { Exercise2 } from "../types/types";

// Function to create workout template in the backend. Method: POST
export async function createWorkoutTemplate(
    token: string | null,
    planName: string,
    exerciseTypes: string[],
    duration: number,
    intensity: string
) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-template`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                planName,
                exerciseTypes,
                duration,
                intensity,
            }),
        });

        if (response.status === 401) {
            return { logout: true };
        }

        if (!response.ok) {
            throw new Error("Failed to fetch workout template");
        }

        // Wait for the response to be parsed as JSON
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error("Error in createWorkoutTemplate", error);
        throw error;
    }
}

// Function to get the current workout plan from the backend. Method: GET
export async function fetchCurrentPlan(token: string | null) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-plan`, { headers: { Authorization: `Bearer ${token}` } });

        if (response.status === 401) {
            return { logout: true };
        }

        if (response.status == 204) {
            return { notActive: true };
        }

        if (!response.ok) {
            throw new Error("Failed to fetch current plan");
        }

        const jsonResponse = await response.json();
        console.log("Data from fetchCurrentPlan", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error in fetchCurrentPlan", error);
        throw error;
    }
}

export async function finishCurrentWorkout(token: string | null) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-plan/deactivate`, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 401) {
            return { logout: true };
        }

        if (!response.ok) {
            throw new Error("Failed to finish workout");
        }

        return { logout: false };
    } catch (error) {
        console.log("Error in finishCurrentWorkout", error);
        throw error;
    }
}

// Function to fetch all exercises from the backend
export async function fetchExercises(token: string | null) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-plan/exercises`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 401) {
            return { logout: true };
        }

        if (!response.ok) {
            throw new Error("Failed to fetch exercises");
        }
        
        const exercises = await response.json();
        return exercises;
    } catch (error) {
        console.error("Error in fetchExercises", error);
        throw error;
    }
}

// Function to add new exercise to database
export async function addExerciseToDatabase(token: string | null, name: string, type: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-plan/exercises`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ name, type }),
        });

        if (response.status === 401) {
            return { logout: true };
        }

        if (!response.ok) {
            throw new Error("Failed to add exercise");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error adding exercise to the database", error);
        throw error;
    }
}

// Function to save current workout
export async function saveCurrentWorkout(token: string | null, exercises: Exercise2[]) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-plan/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ exercises }),
        });

        if (!response.ok) {
            throw new Error("Failed to save current workout");
        }

        const result = await response.json();
        console.log("Current workout saved successfully", result);
    } catch (error) {
        console.error("Error saving current workout", error);
    }
}