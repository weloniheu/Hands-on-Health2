import { Router } from "express";
import { createWorkoutTemplate } from "../controllers/workoutTemplateController";
import { Request, Response } from "express";

const router = Router();

// Get exercises by types
router.post("/", (req: Request, res: Response) => {
	createWorkoutTemplate(req, res);
});

export default router;
