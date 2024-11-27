import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import IntensitySelectionPage from "../../components/WorkOutPlan/IntensitySelectionPage";
import { WorkoutProvider } from "../../contexts/WorkoutContext";
import HomePage from "../../components/HomePage";
import Review from "../../components/WorkOutPlan/review";
import "@testing-library/jest-dom";

// test("renders IntensitySelectionPage and selects intensity", () => {
//     render(
//         <WorkoutProvider>
//             <MemoryRouter initialEntries={["/select-intensity"]}>
//                 <Routes>
//                     <Route path="/select-intensity" element={<IntensitySelectionPage />} />
//                 </Routes>
//             </MemoryRouter>
//         </WorkoutProvider>
//     );

//     // Check that "Low" button is present
//     const lowIntensityButton = screen.getByText("Low");
//     expect(lowIntensityButton).toBeInTheDocument();

//     // Click "Low" intensity button
//     fireEvent.click(lowIntensityButton);
//     const nextButton = screen.getByText("Next");
//     expect(nextButton).not.toBeDisabled();
// });

// test("navigates to home page when Cancel button is clicked", () => {
//     render(
//         <WorkoutProvider>
//             <MemoryRouter initialEntries={["/select-intensity"]}>
//                 <Routes>
//                     <Route path="/select-intensity" element={<IntensitySelectionPage />} />
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

// test("navigates to Review Workout page when Next button is clicked and intensity is selected", () => {
//     render(
//         <WorkoutProvider>
//             <MemoryRouter initialEntries={["/select-intensity"]}>
//                 <Routes>
//                     <Route path="/select-intensity" element={<IntensitySelectionPage />} />
//                     <Route path="/review-workout" element={<Review />} />
//                 </Routes>
//             </MemoryRouter>
//         </WorkoutProvider>
//     );

//     // Click on an intensity button
//     const intensityButton = screen.getByText("Low");
//     fireEvent.click(intensityButton);

//     // Click the "Next" button
//     const nextButton = screen.getByText("Next");
//     fireEvent.click(nextButton);

//     // Check if navigated to the Review Workout page
//     expect(screen.getByText(/Name:/)).toBeInTheDocument();
// });
