import { Router } from "express";
import { Request, Response } from "express";
import { getAllWorkoutPlans, getCurrentWorkoutPlan } from "../controllers/workoutPlanController";
import { authenticate } from "../controllers/authController";

const router = Router();

// Get current (most recent) workout plan
router.get("/", authenticate, (req: Request, res: Response) => {
    getCurrentWorkoutPlan(req, res);
});

// Get all workout plans
router.get("/all", authenticate, (req: Request, res: Response) => {
    getAllWorkoutPlans(req, res);
})

export default router;