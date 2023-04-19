import { Routes, Route } from "react-router-dom";
import React from "react";
import * as Pages from "./pages";
import Nav from "./layouts/nav";
import "./App.css";
import { NoteProvider, UserProvider } from "./context";

function App() {
  return (
    <>
      <UserProvider>
        <NoteProvider>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/" element={<Pages.homePage />} />
              <Route path="/notes" element={<Pages.NotesListPage />} />
              <Route path="/notes/:id" element={<Pages.NotePage />} />
              <Route path="/user" element={<Pages.userPage />} />
              <Route path="/note" element={<Pages.CreateNotePage />} />
              <Route path="/register" element={<Pages.registerPage />} />
              <Route path="/login" element={<Pages.loginPage />} />
            </Route>
          </Routes>
        </NoteProvider>
      </UserProvider>
    </>
  );
}

export default App;
