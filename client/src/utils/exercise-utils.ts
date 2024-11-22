import { API_BASE_URL } from "../constants/Initial_consts";

// Function to create workout template in the backend. Method: POST
export async function createWorkoutTemplate(
    userId: string,
    planName: string,
    exerciseTypes: string[],
    duration: number,
    intensity: string
) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-template`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                planName,
                exerciseTypes,
                duration,
                intensity,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch workout template");
        }

        // Wait for the response to be parsed as JSON
        const jsonResponse = await response.json();
        console.log("Data from fetchWorkoutTemplate", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error in createWorkoutTemplate", error);
        throw error;
    }
}

// Function to get the current workout plan from the backend. Method: GET
export async function fetchCurrentPlan(userId: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/workout-plan`);
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
