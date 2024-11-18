import { getAllWorkoutPlans, getCurrentWorkoutPlan } from "../controllers/workoutPlanController";
import { Request, Response } from "express";
import client from "../config/db";
import { jest } from "@jest/globals";

// Mock the MongoDB client
jest.mock("../config/db");

describe("Workout Plan Controller", () => {
    let mockRequest: Partial<Request> & { params: { userId: string | null } };
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        mockRequest = {
            params: {
                userId: "testUserId",
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

    it("getCurrentWorkoutPlan -- should return an error if required fields are missing", async () => {
        mockRequest.params.userId = null;

        await getCurrentWorkoutPlan(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: "Missing required fields" });
    });

    it("getCurrentWorkoutPlan -- should handle database errors", async () => {
        (client.db as jest.Mock).mockReturnValue({
            collection: jest.fn().mockReturnValue({
                find: jest.fn().mockReturnValue({
                    toArray: jest.fn().mockImplementationOnce(() => {
                        return Promise.reject(new Error("Database error"));
                    }),
                }),
            }),
        });

        await getCurrentWorkoutPlan(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Error fetching workout plan",
            error: expect.any(Error),
        });
    });

    it("getAllWorkoutPlans -- should return an error if required fields are missing", async () => {
        mockRequest.params.userId = null;

        await getAllWorkoutPlans(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: "Missing required fields" });
    });

    it("getAllWorkoutPlans -- should handle database errors", async () => {
        (client.db as jest.Mock).mockReturnValue({
            collection: jest.fn().mockReturnValue({
                find: jest.fn().mockReturnValue({
                    toArray: jest.fn().mockImplementationOnce(() => {
                        return Promise.reject(new Error("Database error"));
                    }),
                }),
            }),
        });

        await getAllWorkoutPlans(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Error fetching workout plans",
            error: expect.any(Error),
        });
    });
});
