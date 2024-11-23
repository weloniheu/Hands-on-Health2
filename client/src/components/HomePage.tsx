import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "./WorkOutPlan/Header";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    function handleStartTemplate() {
        navigate("/select-duration");
    }

    function handleCurrentWorkout() {
        navigate("/current-workout");
    }

    function handleViewHistory() {
        navigate("/history");
    }

    function handleQuickWorkouts() {
        navigate("/quick-workouts");
    }

    function handleLogout() {
        logout();
        navigate("/login");
    }

    const { user, isGuest, logout } = useAuth();

    return (
        <div className="home-page">
            <Header />
            <h1>Welcome {isGuest ? "to Hands on Health" : `back to Hands on Health, ${user}`}</h1>
            <h2>Start your workout journey here!</h2>
            <div className="buttons-group">
                <button className="new-plan-button" onClick={handleStartTemplate}>
                    New Plan
                </button>

                <button className="current-workout-button" onClick={handleCurrentWorkout}>
                    Current Workout
                </button>

                <button className="quick-workouts-button" onClick={handleQuickWorkouts}>
                    Quick Workouts
                </button>
            </div>
            {!isGuest && (
                <div className="history-button">
                    <button onClick={handleViewHistory}>History</button>
                </div>
            )}
            <button className="logout-button" onClick={handleLogout}>
                {isGuest ? "Exit Guest" : "Log Out"}
            </button>
        </div>
    );
};

export default HomePage;
