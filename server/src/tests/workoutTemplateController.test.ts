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
                userId: "testUserId",
                planName: "Test Plan",
                exerciseTypes: ["Chest", "Back"],
                duration: 30,
                intensity: "normal",
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
        mockRequest.body.duration = null;

        await createWorkoutTemplate(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: "Missing required fields" });
    });

    it("should handle database errors", async () => {
        (client.db as jest.Mock).mockReturnValue({
            collection: jest.fn().mockReturnValue({
                find: jest.fn().mockReturnValue({
                    toArray: jest.fn().mockImplementationOnce(() => {
                        return Promise.reject(new Error("Database error"));
                    }),
                }),
            }),
        });

        await createWorkoutTemplate(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Error fetching exercises",
            error: expect.any(Error),
        });
    });
});
