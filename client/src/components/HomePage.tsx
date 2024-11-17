import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	function handleStartTemplate() {
		navigate("/select-duration");
	}

	function handleViewHistory() {
		navigate("/history");
	}

	return (
		<div>
			<h1>Welcome to Hands on Health</h1>
			<p>Start your workout journey here!</p>
			<button onClick={handleStartTemplate}>
				Go to Workout Plan Template
			</button>
			<div style={{ margin: "16px 0" }}></div> {/* spacing */}
			<button onClick={handleViewHistory}>View Workout History</button>
		</div>
	);
};

export default HomePage;
