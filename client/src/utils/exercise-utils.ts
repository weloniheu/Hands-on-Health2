// Function to create workout template in the backend. Method: POST
export async function createWorkoutTemplate(userId: string, planName: string, exerciseTypes: string[], duration: number, intensity: string) {
    try {
        const response = await fetch(`http://localhost:8080/workout-template`, {
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
        console.log("data in fetchWorkoutTemplate", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error in createWorkoutTemplate", error);
        throw error;
    }
}
