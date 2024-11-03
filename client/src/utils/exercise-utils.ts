import { Exercise } from "../types/types";

// Temporary Hardcoded data
const exerciseTypes = {
    types: ["Chest", "Back", "Legs"],
};
const duration = "90";
const intensity = "normal";

// Function to get workout template from the backend. Method: GET
export const fetchWorkoutTemplate = async (): Promise<Exercise[]> => {
    const response = await fetch(
        `http://localhost:8080/workout-template?types=${exerciseTypes.types}&duration=${duration}&intensity=${intensity}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workout template");
    }

    // Wait for the response to be parsed as JSON
    const jsonResponse = await response.json(); // Use await here
    console.log("data in fetchWorkoutTemplate", jsonResponse);
    return jsonResponse; // Return the data directly
};
