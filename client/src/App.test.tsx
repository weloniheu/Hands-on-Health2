import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { AppProvider } from "./contexts/AppContext";

test("renders Welcome to Hands on Health", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Hands on Health/i);
  expect(welcomeElement).toBeInTheDocument();
});

