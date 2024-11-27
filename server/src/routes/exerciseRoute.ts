import { Router } from "express";
import { Request, Response } from "express";
import { getExercises } from "../controllers/exerciseController";

const router = Router();

// Get default exercises
router.get("/", (req: Request, res: Response) => {
    getExercises(req, res);
});

export default router;
