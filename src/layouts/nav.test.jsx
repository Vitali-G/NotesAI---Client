import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { JSDOM } from "jsdom";

expect.extend(matchers);

import Nav from "./nav";

describe("Nav", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the Home link via a logo", () => {
    const homeLink = screen.getByRole("link", { name: /NotesAI/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("renders the Points link", () => {
    const pointsLink = screen.getByRole("link", { name: /points/i });
    expect(pointsLink).toBeInTheDocument();
  });

  it("renders the Letter link", () => {
    const letterLink = screen.getByRole("link", { name: /letter/i });
    expect(letterLink).toBeInTheDocument();
  });
});
