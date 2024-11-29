import { Request, Response } from "express";
import client from "../config/db";
import { ObjectId } from "mongodb";

// Get the current (most recent) workout plan
export async function getCurrentWorkoutPlan(req: Request, res: Response) {
    const { userId } = req.body.user as { userId: string };

    try {
        // Check if there is an active workout plan
        const user = await client
            .db("main")
            .collection("users")
            .findOne({ _id: new ObjectId(userId) });
        // Return if no active workout
        if (!user || !user.activeWorkout) {
            return res.status(204).send();
        }

        const currentPlan = await client
            .db("main")
            .collection("plans")
            .findOne({ userId: userId }, { sort: { createdAt: -1 } });

        res.status(200).json(currentPlan);
    } catch (error) {
        res.status(500).json({ message: "Error fetching workout plan", error });
    }
}

// Save the current (most recent) workout plan
export async function saveCurrentWorkoutPlan(req: Request, res: Response) {
    const { userId } = req.body.user as { userId: string };
    const { workoutPlan } = req.body;

    try {
        await client
            .db("main")
            .collection("plans")
            .findOneAndUpdate({ userId: userId }, { $set: { workoutPlan: workoutPlan } }, { sort: { createdAt: -1 } });
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: "Error saving workout plan", error });
    }
}

// Function to make active workout to false
export async function finishCurrentWorkout(req: Request, res: Response) {
    const { userId } = req.body.user as { userId: string };

    try {
        await client
            .db("main")
            .collection("users")
            .updateOne({ _id: new ObjectId(userId) }, { $set: { activeWorkout: false } });
        res.status(200).send();
    } catch (error) {
        res.status(500).send();
    }
}

// Get all workout plans by user
export async function getAllWorkoutPlans(req: Request, res: Response) {
    const { userId } = req.body.user as { userId: string };

    try {
        const allPlans = await client
            .db("main")
            .collection("plans")
            .find({ userId: userId })
            .sort({ createdAt: -1 })
            .toArray();
        if (!allPlans) {
            return res.status(204).send();
        }

        res.status(200).json(allPlans);
    } catch (error) {
        res.status(500).json({ message: "Error fetching workout plans", error });
    }
}

// Get all exercises available to be added to current workout
export async function getAllExercises(req: Request, res: Response) {
    try {
        const exercises = await client
            .db("main")
            .collection("exercises")
            .find()
            .toArray();

        res.status(200).json(exercises);
    } catch (error) {
        console.error("Error fetching exercises", error);
        res.status(500).json({ message: "Error fetching exercises", error });
    }
}

// Add a new exercise to the database
export async function addNewExercise(req: Request, res: Response) {
    const { name, type } = req.body;

    if (!name || !type) {
        return res.status(400).json({ message: "Name and type are required" });
    }

    try {
        await client
            .db("main")
            .collection("exercises")
            .insertOne({ name, type });

        res.status(200).json({ success: true, message: "Exercise added successfully" });
    } catch (error) {
        console.error("Error adding new exercise:", error);
        res.status(500).json({ message: "Error adding exercise", error });
    }
}

// Save exercises in current workout
export async function saveCurrentWorkout(req: Request, res: Response) {
    const { exercises } = req.body;
    const { userId } = req.body.user as { userId: string }

    try {
        // Save to user's profile (in your database)
        await client
            .db("main")
            .collection("users")
            .updateOne({ userId }, { $set: { currentWorkout: exercises } }
        );

        res.status(200).json({ message: "Workout plan saved successfully" });
    } catch (error) {
        console.error("Error saving workout plan", error);
        res.status(500).json({ message: "Failed to save workout plan" });
    }
}