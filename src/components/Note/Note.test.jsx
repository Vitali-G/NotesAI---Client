import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Note from "./Note.jsx";
import { PageProvider, UserProvider } from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Note", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <BrowserRouter>
            <Note {...props} />
          </BrowserRouter>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  const props = {
    title: "Test Title",
    content: "Test Content",
  };

  it("renders title and content", () => {
    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });
});
