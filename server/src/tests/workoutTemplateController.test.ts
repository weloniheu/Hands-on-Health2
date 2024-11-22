import { createWorkoutTemplate } from "../controllers/workoutTemplateController";
import { Request, Response } from "express";
import client from "../config/db";
import { jest } from "@jest/globals";

// Mock the MongoDB client
jest.mock("../config/db");

describe("Workout Template Controller", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        mockRequest = {
            body: {
                user: { userId: "testUserId" },
                planName: "Test Plan",
                exerciseTypes: ["Chest", "Back"],
                duration: 30,
                intensity: "Normal",
            },
        };

        mockResponse = {
            status: jest.fn().mockReturnThis() as unknown as (code: number) => Response,
            json: jest.fn() as unknown as (body: any) => Response,
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return an error if required fields are missing", async () => {
        // Simulate missing duration
        mockRequest.body.duration = null;

        await createWorkoutTemplate(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: "Missing required fields" });
    });

    // it("should handle database errors", async () => {
    //     // Simulate a database error
    //     (client.db as jest.Mock).mockReturnValue({
    //         collection: jest.fn().mockReturnValue({
    //             find: jest.fn().mockReturnValue({
    //                 toArray: jest.fn().mockRejectedValue(new Error("Database error")),
    //             }),
    //         }),
    //     });

    //     await createWorkoutTemplate(mockRequest as Request, mockResponse as Response);

    //     expect(mockResponse.status).toHaveBeenCalledWith(500);
    //     expect(mockResponse.json).toHaveBeenCalledWith({
    //         message: "Error fetching exercises",
    //         error: expect.any(Error),
    //     });
    // });

    // it("should successfully create a workout template", async () => {
    //     const mockExercises = [
    //         { type: "Chest", priority: 1, name: "Push-up" },
    //         { type: "Back", priority: 2, name: "Pull-up" },
    //     ];

    //     // Mock database call for fetching exercises
    //     (client.db as jest.Mock).mockReturnValue({
    //         collection: jest.fn().mockReturnValue({
    //             find: jest.fn().mockReturnValue({
    //                 toArray: jest.fn().mockResolvedValue(mockExercises),
    //             }),
    //             insertOne: jest.fn().mockResolvedValue({ acknowledged: true }),
    //         }),
    //     });

    //     await createWorkoutTemplate(mockRequest as Request, mockResponse as Response);

    //     expect(mockResponse.status).toHaveBeenCalledWith(200);
    //     expect(mockResponse.json).toHaveBeenCalledWith(
    //         expect.arrayContaining([
    //             expect.objectContaining({
    //                 type: expect.any(String),
    //                 name: expect.any(String),
    //                 sets: expect.any(Number),
    //             }),
    //         ])
    //     );
    // });

    it("should throw an error for invalid intensity levels", async () => {
        // Simulate invalid intensity
        mockRequest.body.intensity = "Invalid";

        await createWorkoutTemplate(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith(
            expect.objectContaining({
                message: expect.stringContaining("Error fetching exercises"),
                error: expect.any(Error),
            })
        );
    });
});
