import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    function handleStartTemplate() {
        navigate("/select-duration");
    }

    return (
        <div>
            <h1>Welcome to Hands on Health</h1>
            <p>Start your workout journey here!</p>
            <button onClick={handleStartTemplate}>Go to Workout Plan Template</button>
        </div>
    );
};

export default HomePage;
