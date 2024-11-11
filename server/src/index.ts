import express, { Request, Response } from "express";
import cors from "cors";
import workoutTemplateRoute from "./routes/workoutTemplateRoute";
import authRoutes from "./routes/auth";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/workout-template", workoutTemplateRoute);
app.use("/api/auth", authRoutes);

app.get("/test", (req, res) => {
	res.send("Test route working!");
});

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// Root endpoint to get test if the server is running
app.get("/", (req: Request, res: Response) => {
	res.send({ data: "Hello, TypeScript Express!" });
	res.status(200);
});

export default app;