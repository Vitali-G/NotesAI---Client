import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import NotesListPage from "./index.jsx";

describe("NotesListPage", () => {
  beforeEach(() => {
    render(<NotesListPage />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders NotesListPage", () => {
    const heading = screen.getByRole("heading", { name: /notes list page/i });
    expect(heading).toBeInTheDocument();
  });
});
