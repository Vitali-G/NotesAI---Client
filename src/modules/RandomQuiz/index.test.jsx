import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import RandomQuiz from "./index.jsx";
import {
  NoteProvider,
  PageProvider,
  UserProvider,
} from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Home Page", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <BrowserRouter>
              <RandomQuiz />
            </BrowserRouter>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should display a "Login" button', () => {
    const newNoteButton = screen.getByRole("heading", {
      name: "Quiz questions to help you remember:",
    });
    expect(newNoteButton).toBeInTheDocument();
  });
});
