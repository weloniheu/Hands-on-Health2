import { Request, Response } from "express";
import client from "../config/db";

export async function getExercises(req: Request, res: Response) {
    try {
        const exercises = await client.db("main").collection("exercises").find().toArray();
        exercises.forEach((exercise) => {
            delete (exercise as any)._id;
            delete (exercise as any).priority;
        });

        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: "Error getting exercises", error });
    }
}
