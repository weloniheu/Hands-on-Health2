import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import Login from "../../components/Login/Login";
import HomePage from "../../components/HomePage";
import { AuthProvider } from "../../contexts/AuthContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";

jest.mock("../../utils/auth-utils", () => {
    login: jest.fn();
});

describe("Login Component", () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </MemoryRouter>
            </AuthProvider>
        );
    });

    test("Should correctly show page when rendered", () => {
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    });

    // test("Should show the correct error message when user is not found", () => {});

    // test("Should show the correct error message when password is incorrect", () => {});

    // test("Should show the correct error message when missing fields", () => {});

    // test("Should throw error when server fails to login", () => {});

    // test("Should successfully login and navigate to home page when button clicked and authenticated", () => {});

    // test("Should navigate to signup page when button is clicked", () => {});
});
