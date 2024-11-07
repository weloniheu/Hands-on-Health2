import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
	const { username, password } = req.body;

	// Replace this with actual authentication logic
	if (username === "testuser" && password === "password123") {
		res.json({ message: "Login successful", token: "your-jwt-token" });
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

export default router;
