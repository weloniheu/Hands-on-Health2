import { Router } from "express";
import { createWorkoutTemplate } from "../controllers/workoutTemplateController";
import { Request, Response } from "express";

const router = Router();

// Create Workout Template
router.post("/", (req: Request, res: Response) => {
	createWorkoutTemplate(req, res);
});

export default router;
