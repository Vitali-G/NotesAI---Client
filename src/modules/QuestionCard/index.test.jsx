import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import QuestionCard from "./index.jsx";
import {
  NoteProvider,
  PageProvider,
  UserProvider,
} from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Question Card", () => {
  beforeEach(() => {
    render(
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <BrowserRouter>
              <QuestionCard />
            </BrowserRouter>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });
});
