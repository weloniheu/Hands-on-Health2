import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Hands on Health</h1>
            <p>Start your workout journey here!</p>
            <Link to="/select-duration">
                <button>Go to Workout Plan Template</button>
            </Link>
        </div>
    );
};

export default HomePage;

