import React from "react";
import { suite, test, assert, before, after } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import QuestionCard from "./index.jsx";
import {
  NoteProvider,
  PageProvider,
  UserProvider,
} from "../../context/index.jsx";
import { BrowserRouter } from "react-router-dom";

suite("Question Card", () => {
  let question, answer;

  before(() => {
    question = "What is the capital of France?";
    answer = "Paris";
    render(
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <BrowserRouter>
              <QuestionCard question={question} answer={answer} />
            </BrowserRouter>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    );
  });

  after(() => {
    cleanup();
  });

  test("renders the question and answer", () => {
    assert(screen.getByText(question).toBeInTheDocument());
    assert(screen.getByText(answer).toBeInTheDocument());
  });
});
