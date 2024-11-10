import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import IntensitySelectionPage from "./IntensitySelectionPage";
import { WorkoutProvider } from "./WorkoutContext";

test("renders IntensitySelectionPage and selects intensity", () => {
  render(
    <WorkoutProvider>
      <BrowserRouter>
        <IntensitySelectionPage />
      </BrowserRouter>
    </WorkoutProvider>
  );

  // Check that "Low" button is present
  const lowIntensityButton = screen.getByText("Low");
  expect(lowIntensityButton).toBeInTheDocument();

  // Click "Low" intensity button
  fireEvent.click(lowIntensityButton);
  const nextButton = screen.getByText("Next");
  expect(nextButton).not.toBeDisabled();
});
