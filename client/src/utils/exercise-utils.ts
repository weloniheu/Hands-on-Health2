import { API_BASE_URL } from "../constants/Initial_consts";

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
