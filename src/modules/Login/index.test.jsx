import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Register from "./index";
import { PageProvider, UserProvider } from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders NotesAI header", () => {
    const heading = screen.getByText("NotesAI");
    expect(heading).toBeInTheDocument();
  });

  it("renders Register header", () => {
    const heading = screen.getByRole("heading", { name: /Login/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders an input field for entering the email", () => {
    const email = screen.queryByPlaceholderText("Email");
    expect(email).toBeInTheDocument();
  });

  it("renders an input field for entering the password", () => {
    const password = screen.queryByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });

  it("renders a sumbit button for registering", () => {
    const submit = screen.getByRole("button", { name: /Submit/i });
    expect(submit).toBeInTheDocument();
  });

  it("renders footer text", () => {
    const footer = screen.getByText(/Don't have an account/i);
    expect(footer).toBeInTheDocument();
  });

  it("renders link to register page", () => {
    const registerLink = screen.getByRole("link", { name: /Register Here/i });
    expect(registerLink).toBeInTheDocument();
  });
});
