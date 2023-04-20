import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import NotesListPage from "./index.jsx";
import {
  NoteProvider,
  PageProvider,
  UserProvider,
} from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("NotesListPage", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <BrowserRouter>
              <NotesListPage />
            </BrowserRouter>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders NotesListPage", () => {
    const heading = screen.getByRole("heading", { name: /notes/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders search bar", () => {
    const searchBar = screen.getByPlaceholderText(/search for your notes/i);
    expect(searchBar).toBeInTheDocument();
  });

  it('should display a "New Note" button', () => {
    const newNoteButton = screen.getByText("New Note");
    expect(newNoteButton).toBeInTheDocument();
  });
});
