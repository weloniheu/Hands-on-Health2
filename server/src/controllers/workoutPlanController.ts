import { Request, Response } from "express";
import client from "../config/db";

// Get the current (most recent) workout plan by user
export async function getCurrentWorkoutPlan(req: Request, res: Response) {
    const { userId } = req.params as { userId: string };
    if (!userId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const currentPlan = await client
            .db("main")
            .collection("plans")
            .findOne({ userId: userId }, { sort: { createdAt: -1 } });

        res.status(200).json(currentPlan);
    } catch (error) {
        res.status(500).json({ message: "Error fetching workout plan", error });
    }
}

// Get all workout plans by user
export async function getAllWorkoutPlans(req: Request, res: Response) {
    const { userId } = req.params as { userId: string };
    if (!userId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const allPlans = await client
            .db("main")
            .collection("plans")
            .find({ userId: userId })
            .sort({ createdAt: -1 })
            .toArray();

        res.status(200).json(allPlans);
    } catch (error) {
        res.status(500).json({ message: "Error fetching workout plans", error });
    }
}
