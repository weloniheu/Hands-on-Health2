import { Router } from "express";
import { Request, Response } from "express";
import { getAllWorkoutPlans, getCurrentWorkoutPlan } from "../controllers/workoutPlanController";

const router = Router();

// Get current (most recent) workout plan
router.get("/:userId", (req: Request, res: Response) => {
    getCurrentWorkoutPlan(req, res);
});

// Get all workout plans
router.get("/all/:userId", (req: Request, res: Response) => {
    getAllWorkoutPlans(req, res);
})

export default router;