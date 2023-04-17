import { Routes, Route } from "react-router-dom";
import React from "react";
import * as Pages from "./pages";
import Nav from "./layouts/nav";
import "./App.css";
import { NoteProvider } from "./context";

function App() {
  return (
    <>
      <NoteProvider>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Pages.homePage />} />
            <Route path="/notes" element={<Pages.NotesListPage />} />
            <Route path="/user" element={<Pages.userPage />} />
            <Route path="/note" element={<Pages.CreateNotePage />} />
            <Route path="/register" element={<Pages.registerPage />} />
          </Route>
        </Routes>
      </NoteProvider>
    </>
  );
}

export default App;
