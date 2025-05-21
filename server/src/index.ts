import express, { Request, Response } from "express";
import cors from "cors";
import workoutTemplateRoute from "./routes/workoutTemplateRoute";
import workoutPlanRoute from "./routes/workoutPlanRoute";
import exerciseRoute from "./routes/exerciseRoute";
import authRoutes from "./routes/authRoute";
import path from "path";

const app = express();
const port = process.env.PORT || 8080; // Use Render's provided PORT

app.use(cors());
app.use(express.json());
app.use("/workout-template", workoutTemplateRoute);
app.use("/workout-plan", workoutPlanRoute);
app.use("/exercise", exerciseRoute);
app.use("/auth", authRoutes);
app.use("/exercises", workoutPlanRoute)

app.get("/test", (req, res) => {
	res.send("Test route working!");
});

// Serve static files from React
app.use(express.static(path.join(__dirname, "../../client/build")));

// Catch-all: send index.html for any unmatched route (for React Router)
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

// Start the server

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Root endpoint to get test if the server is running
app.get("/", (req: Request, res: Response) => {
	res.send({ data: "Hello, TypeScript Express!" });
	res.status(200);
});



export default app;