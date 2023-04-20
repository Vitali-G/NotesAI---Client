import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import NotePage from "./index.jsx";
import {
  NoteProvider,
  PageProvider,
  UserProvider,
} from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("NotePage", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <BrowserRouter>
              <NotePage />
            </BrowserRouter>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should display a "New Note" button', () => {
    const newNoteButton = screen.getByText("New Note");
    expect(newNoteButton).toBeInTheDocument();
  });
  it('should display a "Delete" button', () => {
    const newNoteButton = screen.getByText("Delete");
    expect(newNoteButton).toBeInTheDocument();
  });
  it('should display a "Update" button', () => {
    const newNoteButton = screen.getByText("Update");
    expect(newNoteButton).toBeInTheDocument();
  });
  it('should display a "Explain" button', () => {
    const newNoteButton = screen.getByText("Explain");
    expect(newNoteButton).toBeInTheDocument();
  });
});
