import { render, screen, fireEvent } from "@testing-library/react";
import Review from "../../components/WorkOutPlan/review";
import { createWorkoutTemplate } from "../../utils/exercise-utils";
import { BrowserRouter } from "react-router-dom";

// Mock the `createWorkoutTemplate` function
jest.mock("../../utils/exercise-utils", () => ({
    createWorkoutTemplate: jest.fn(() => Promise.resolve("Workout Created")),
}));

describe("Review Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Review />
            </BrowserRouter>
        );
    });

    test("renders workout plan details", () => {
        expect(screen.getByText(/Name:/)).toBeInTheDocument();
        expect(screen.getByText(/Duration:/)).toBeInTheDocument();
        expect(screen.getByText(/Focus:/)).toBeInTheDocument();
        expect(screen.getByText(/Intensity:/)).toBeInTheDocument();
    });

    test("toggles edit mode for plan name", () => {
        const editButton = screen.getByText("Edit Name");
        fireEvent.click(editButton);

        // Check if input field is now visible
        expect(screen.getByRole("textbox")).toBeInTheDocument();

        // Change input value and save
        fireEvent.change(screen.getByRole("textbox"), { target: { value: "New Plan" } });
        fireEvent.click(screen.getByText("Save Name"));

        // Check if the new plan name is displayed correctly
        expect(screen.getByText("New Plan")).toBeInTheDocument();
    });

    test("calls createWorkoutTemplate on Start Workout", async () => {
        const startWorkoutButton = screen.getByText("Start Workout");
        fireEvent.click(startWorkoutButton);

        // Check if `createWorkoutTemplate` is called with correct arguments
        expect(createWorkoutTemplate).toHaveBeenCalledWith(
            "agoahefnoanvoae",
            "", // initial empty planName
            ["Chest", "Back"],
            90,
            "normal"
        );
    });

    test("Previous button click functionality", () => {
        const previousButton = screen.getByText("Previous");

        // Simulate previous button click
        fireEvent.click(previousButton);

        // Check if it would redirect to the correct path (you can also mock `useNavigate`)
        // expect(mockedNavigate).toHaveBeenCalledWith("/previous"); // Adjust path as necessary
    });

    test("Cancel button click functionality", () => {
        const cancelButton = screen.getByText("Cancel");

        // Simulate cancel button click
        fireEvent.click(cancelButton);

        // Check if it would redirect to the correct path (you can also mock `useNavigate`)
        // expect(mockedNavigate).toHaveBeenCalledWith("/cancel"); // Adjust path as necessary
    });
});
