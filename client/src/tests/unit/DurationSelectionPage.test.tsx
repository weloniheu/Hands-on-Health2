import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DurationSelectionPage from "../../components/WorkOutPlan/DurationSelectionPage";
import { WorkoutProvider } from "../../contexts/WorkoutContext";
import HomePage from "../../components/HomePage";
import FocusMusclesView from "../../components/WorkOutPlan/FocusMuscles";
import "@testing-library/jest-dom";

test("renders DurationSelectionPage and selects duration", () => {
    render(
        <WorkoutProvider>
            <MemoryRouter initialEntries={["/select-duration"]}>
                <Routes>
                    <Route path="/select-duration" element={<DurationSelectionPage />} />
                </Routes>
            </MemoryRouter>
        </WorkoutProvider>
    );

    // Check that all duration buttons are present
    const durationButton30 = screen.getByText("30 min");
    expect(durationButton30).toBeInTheDocument();

    // Click on "30 min" and verify selection
    fireEvent.click(durationButton30);
    const nextButton = screen.getByText("Next");
    expect(nextButton).not.toBeDisabled();
});

// test("navigates to home page when Cancel button is clicked", () => {
//     render(
//         <WorkoutProvider>
//             <MemoryRouter initialEntries={["/select-duration"]}>
//                 <Routes>
//                     <Route path="/select-duration" element={<DurationSelectionPage />} />
//                     <Route path="/" element={<HomePage />} />
//                 </Routes>
//             </MemoryRouter>
//         </WorkoutProvider>
//     );

//     // Click the "Cancel" button
//     const cancelButton = screen.getByText("Cancel");
//     fireEvent.click(cancelButton);

//     // Check if navigated to the HomePage
//     expect(screen.getByText("Welcome to Hands on Health")).toBeInTheDocument();
// });

test("navigates to focus page when Next button is clicked", () => {
    render(
        <WorkoutProvider>
            <MemoryRouter initialEntries={["/select-duration"]}>
                <Routes>
                    <Route path="/select-duration" element={<DurationSelectionPage />} />
                    <Route path="/select-focus" element={<FocusMusclesView />} />
                </Routes>
            </MemoryRouter>
        </WorkoutProvider>
    );

    // Click on "30 min"
    const durationButton30 = screen.getByText("30 min");
    fireEvent.click(durationButton30);

    // Click the "Next" button
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    // Check if navigated to the Focus page
    expect(screen.getByText("Focus")).toBeInTheDocument();
});
