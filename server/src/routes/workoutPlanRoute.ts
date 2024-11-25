import { Router } from "express";
import { Request, Response } from "express";
import { finishCurrentWorkout, getAllWorkoutPlans, getCurrentWorkoutPlan } from "../controllers/workoutPlanController";
import { authenticate } from "../controllers/authController";

const router = Router();

// Get current (most recent) workout plan
router.get("/", authenticate, (req: Request, res: Response) => {
    getCurrentWorkoutPlan(req, res);
});

router.patch("/deactivate", authenticate, (req: Request, res: Response) => {
    finishCurrentWorkout(req, res);
});

// Get all workout plans: history
router.get("/all", authenticate, (req: Request, res: Response) => {
    getAllWorkoutPlans(req, res);
});

export default router;
