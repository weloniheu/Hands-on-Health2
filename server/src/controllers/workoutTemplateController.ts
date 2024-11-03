import { Request, Response } from "express";
import client from "../config/db";

// JSON from frontend
// {
//     types: ["Chest", "Back"],
//     duration: "30",
//     intensity: "normal"
// }

function generateWorkout(exercises: any[], numberOfTypes: number, duration: string, intensity: string) {
    // Determine the number of sets based on intensity
    let setsPerExercise;
    switch (intensity) {
        case "low":
            setsPerExercise = 2;
            break;
        case "normal":
            setsPerExercise = 3;
            break;
        case "high":
            setsPerExercise = 4;
            break;
        case "extreme":
            setsPerExercise = 5;
            break;
        default:
            throw new Error("Invalid intensity");
    }

    // Determine the number of total exercises based on duration
    let totalExercisesNeeded;
    switch (duration) {
        case "30":
            totalExercisesNeeded = 3;
            break;
        case "60":
            totalExercisesNeeded = 6;
            break;
        case "90":
            totalExercisesNeeded = 9;
            break;
        case "120":
            totalExercisesNeeded = 12;
            break;
        default:
            throw new Error("Invalid duration");
    }

    // Determine the number of exercises per type
    let exercisesPerType: number[] = [];
    switch (numberOfTypes) {
        case 1:
            exercisesPerType = [totalExercisesNeeded];
            break;
        case 2:
            exercisesPerType = [Math.ceil(totalExercisesNeeded / 2), Math.floor(totalExercisesNeeded / 2)];
            break;
        case 3:
            exercisesPerType = [
                Math.ceil(totalExercisesNeeded / 3),
                Math.floor(totalExercisesNeeded / 3),
                Math.floor(totalExercisesNeeded / 3),
            ];
            break;
        case 4:
            exercisesPerType =
                totalExercisesNeeded === 6 ? [2, 2, 1, 1] : totalExercisesNeeded === 9 ? [3, 2, 2, 2] : [3, 3, 3, 3];
            break;
        case 5:
            exercisesPerType =
                totalExercisesNeeded === 6
                    ? [2, 1, 1, 1, 1]
                    : totalExercisesNeeded === 9
                    ? [2, 2, 2, 2, 1]
                    : [3, 3, 2, 2, 2];
            break;
        case 6:
            exercisesPerType =
                totalExercisesNeeded === 6
                    ? [1, 1, 1, 1, 1, 1]
                    : totalExercisesNeeded === 9
                    ? [2, 2, 2, 1, 1, 1]
                    : [2, 2, 2, 2, 2, 2];
            break;
        default:
            throw new Error("Invalid number of types");
    }

    const workoutPlan: any[] = [];
    const typeGroups: { [key: string]: any[] } = {};

    // Group exercises by type
    exercises.forEach((exercise) => {
        if (!typeGroups[exercise.type]) {
            typeGroups[exercise.type] = [];
        }
        typeGroups[exercise.type].push(exercise);
    });

    // Generate the Workout Plan by selecting exercises from each type
    exercisesPerType.forEach((countNeeded, index) => {
        const type = Object.keys(typeGroups)[index]; // Get the type
        const exercisesOfType = typeGroups[type]; // Get the exercises of that type

        // Seperate the exercises by priority
        const priority1Exercises = exercisesOfType.filter((exercise) => exercise.priority === 1);
        const priority2Exercises = exercisesOfType.filter((exercise) => exercise.priority === 2);

        // Loop through the count needed and select exercises
        for (let i = 0; i < countNeeded; i++) {
            let selectedExercise;

            if (i < 3) {
                // Choose from priority 1 first
                const randomIndex = Math.floor(Math.random() * priority1Exercises.length);
                selectedExercise = priority1Exercises[randomIndex];
                priority1Exercises.splice(randomIndex, 1); // Remove the selected exercise
            } else {
                // If we need more, choose from priority 2
                const randomIndex = Math.floor(Math.random() * priority2Exercises.length);
                selectedExercise = priority2Exercises[randomIndex];
                priority2Exercises.splice(randomIndex, 1); // Remove the selected exercise
            }

            // For the selected exercise, set the number of sets based on intensity
            if (selectedExercise) {
                selectedExercise.sets = setsPerExercise;
                delete selectedExercise.priority; // Remove the priority field
                workoutPlan.push(selectedExercise);
            }
        }
    });

    return workoutPlan;
}

// Get workout template by getting from database and generating the workout
export async function getWorkoutTemplate(req: Request, res: Response) {
    const types = req.query.types as String;
    const duration = req.query.duration as string;
    const intensity = req.query.intensity as string;
    if (!types || !duration || !intensity) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const typesArray = types.split(",");

    try {
        const exercises = await client
            .db("main")
            .collection("exercises")
            .find({ type: { $in: typesArray } })
            .toArray();

        // Generate the workout
        const workoutPlan = generateWorkout(exercises, typesArray.length, duration, intensity);

        // Send the workout plan as a response
        res.status(200).json(workoutPlan);
    } catch (error) {
        res.status(500).json({ message: "Error fetching exercises", error });
    }
}
