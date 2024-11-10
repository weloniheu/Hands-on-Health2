import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { AppProvider } from "./contexts/AppContext";

describe("App Component", () => {
    test("renders Workout Planner heading", () => {
        render(
            <AppProvider>
                <App />
            </AppProvider>
        );
        expect(screen.getByText("Workout Planner")).toBeInTheDocument();
    });

    test("renders Show Plan button initially", () => {
        render(
            <AppProvider>
                <App />
            </AppProvider>
        );
        expect(screen.getByText("Show Plan")).toBeInTheDocument();
    });

    test("toggles EditWorkOutPlan component when button is clicked", () => {
        render(
            <AppProvider>
                <App />
            </AppProvider>
        );

        const toggleButton = screen.getByRole("button", { name: /Show Plan/i });
        fireEvent.click(toggleButton);

        // Check that the button text updates to "Hide Plan"
        expect(screen.getByText("Hide Plan")).toBeInTheDocument();

        // Click the button again to hide the plan
        fireEvent.click(toggleButton);
        expect(screen.getByText("Show Plan")).toBeInTheDocument();
    });
});
