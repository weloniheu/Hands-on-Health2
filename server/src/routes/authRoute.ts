import express, { Request, Response, Router } from "express";
import { register, login } from "../controllers/authController";

const router: Router = express.Router();

// Register route
router.post("/register", (req: Request, res: Response) => {
    register(req, res);
});

// Login route
router.post("/login", (req: Request, res: Response): void => {
    login(req, res);
});

export default router;
