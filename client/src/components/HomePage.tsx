import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "./WorkOutPlan/Header"
import "./HomePage.css";

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	function handleStartTemplate() {
		navigate("/select-duration");
	}

	function handleViewHistory() {
		navigate("/history");
	}

	return (
		<div className="home-page">
			<Header />
			<h1>Welcome to Hands on Health</h1>
			<h2>Start your workout journey here!</h2>
			<div className="buttons-group">
				<button className="new-plan-button" onClick={handleStartTemplate}>
					New Plan
				</button>

				<button className="current-workout-button">Current Workout</button>
			</div>
			<div className="history-button">
				<button onClick={handleViewHistory}>History</button>
			</div>
		</div >
	);
};

export default HomePage;
