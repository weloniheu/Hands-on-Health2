import { Router } from "express";
import { Request, Response } from "express";
import { getCurrentWorkoutPlan } from "../controllers/workoutPlanController";

const router = Router();

// Get workout plan
router.get("/:userId", (req: Request, res: Response) => {
    getCurrentWorkoutPlan(req, res);
});

export default router;
