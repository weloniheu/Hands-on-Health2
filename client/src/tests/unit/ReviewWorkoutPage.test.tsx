import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReviewWorkoutPage from "../../components/WorkOutPlan/ReviewWorkoutPage";
import { WorkoutProvider } from "../../contexts/WorkoutContext";

test("renders ReviewWorkoutPage with correct data", () => {
    render(
        <WorkoutProvider>
            <BrowserRouter>
                <ReviewWorkoutPage />
            </BrowserRouter>
        </WorkoutProvider>
    );

    const reviewTitle = screen.getByText(/Review Your Workout/i);
    expect(reviewTitle).toBeInTheDocument();
});
