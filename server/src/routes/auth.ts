import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// Placeholder for an in-memory "database"
const users: { username: string; password: string }[] = [];

// Login route
router.post("/login", (req: Request, res: Response): void => {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400).json({ message: "Username and password are required" });
		return; // Stop further execution
	}

	const user = users.find(
		(user) => user.username === username && user.password === password,
	);

	if (user) {
		const token = "your-jwt-token";
		res.json({ message: "Login successful", token });
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

// Create account route
router.post("/create-account", (req: Request, res: Response): void => {
	console.log("Hit /create-account endpoint"); // Add this log to confirm route hit
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400).json({ message: "Username and password are required" });
		return;
	}

	const userExists = users.find((user) => user.username === username);
	if (userExists) {
		res.status(400).json({ message: "Username already exists" });
		return;
	}

	const newUser = { username, password };
	users.push(newUser);

	const token = "generated-token";
	res.json({ message: "Account created successfully", token });
});

export default router;
