import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { fetchCurrentPlan } from "../utils/exercise-utils";
import Header from "./WorkOutPlan/Header";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { token, user, isGuest, isLoggedIn, firstName } = useAuth();
    const [hasCurrentWorkout, setHasCurrentWorkout] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                const data = await fetchCurrentPlan(token);
                if (data && data.notActive) {
                    setHasCurrentWorkout(false);
                } else {
                    setHasCurrentWorkout(true);
                }
            } else {
                setHasCurrentWorkout(false);
            }
        };

        if (token) {
            fetchData();
        } else {
            setHasCurrentWorkout(false);
        }
    }, [token]);

    function handleCurrentWorkout() {
        if (hasCurrentWorkout) {
            navigate("/current-workout");
        } else {
            alert("No active workout found!");
        }
    }

    function handleStartTemplate() {
        navigate("/select-duration");
    }

    function handleViewHistory() {
        navigate("/history");
    }

    return (
        <div className="home-page">
            <Header />
            <h1>Welcome {isGuest ? "to Hands on Health" : `back to Hands on Health, ${firstName}`}</h1>
            <h2>Start your workout journey here!</h2>
            <div className="buttons-group">
                <button className="new-plan-button" onClick={handleStartTemplate}>
                    New Plan
                </button>

                <button className="current-workout-button" onClick={handleCurrentWorkout} disabled={!hasCurrentWorkout}>
                    Current Workout
                </button>

            </div>
            {!isGuest && (
                <div className="history-button">
                    <button onClick={handleViewHistory}>History</button>
                </div>
            )}
        </div>
    );
};

export default HomePage;
