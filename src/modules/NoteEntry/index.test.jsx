import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import NoteEntry from "./index.jsx";
import {
  NoteProvider,
  PageProvider,
  UserProvider,
} from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("New Entry Page", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <BrowserRouter>
              <NoteEntry />
            </BrowserRouter>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should display a "Save Note" button', () => {
    const newNoteButton = screen.getByText("Save Note");
    expect(newNoteButton).toBeInTheDocument();
  });
});
