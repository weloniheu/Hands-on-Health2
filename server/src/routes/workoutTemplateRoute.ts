import { Router } from "express";
import { getWorkoutTemplate } from "../controllers/workoutTemplateController";
import { Request, Response } from "express";

const router = Router();

// Get exercises by types
router.get("/", (req: Request, res: Response) => {
	getWorkoutTemplate(req, res);
});

export default router;
