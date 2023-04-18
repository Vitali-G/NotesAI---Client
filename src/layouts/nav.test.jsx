import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Nav from './nav'
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  beforeEach(() => {
    render(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });
    
  it('renders the notes link', () => {
    const notesLink = screen.getByRole('link', { name: /Notes/i });
    expect(notesLink).toBeInTheDocument();
  });
    
  it('renders the username', () => {
    const userLink = screen.getByRole('link', { name: /UserName/i });
    expect(userLink).toBeInTheDocument();
  });
    
  it('renders the logout button', () => {
    const logoutLink = screen.getByRole('button', { name: /Logout/i });
    expect(logoutLink).toBeInTheDocument();
  });
    
    
});