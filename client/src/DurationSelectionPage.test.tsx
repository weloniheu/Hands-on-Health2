import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DurationSelectionPage from "./DurationSelectionPage";
import { WorkoutProvider } from "./WorkoutContext";

test("renders DurationSelectionPage and selects duration", () => {
  render(
    <WorkoutProvider>
      <BrowserRouter>
        <DurationSelectionPage />
      </BrowserRouter>
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
