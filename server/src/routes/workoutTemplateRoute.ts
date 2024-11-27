import { Router } from "express";
import { createWorkoutTemplate } from "../controllers/workoutTemplateController";
import { Request, Response } from "express";
import { authenticate } from "../controllers/authController";
import {getExercisesByTypes} from "../controllers/workoutTemplateController";

const router = Router();

// Create Workout Template
router.post("/", authenticate, (req: Request, res: Response) => {
	createWorkoutTemplate(req, res);
})

// New route to get exercises by types
router.get("/exercises", authenticate, (req: Request, res: Response) => {
	getExercisesByTypes(req, res);
});


export default router;
