import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as Pages from "./pages";
import Nav from "./layouts/nav";
import "./App.css";
import { NoteProvider, UserProvider, PageProvider } from "./context";
import {page} from "./context/index.jsx"

function App() {
  return (
    <>
      <PageProvider>
        <UserProvider>
          <NoteProvider>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route path="/" element={<Pages.homePage />} />
                <Route path="/notes" element={<Pages.NotesListPage />} />
                <Route path="/notes/:id" element={<Pages.NotePage />} />
                <Route path="/note" element={<Pages.CreateNotePage />} />
                <Route path="/register" element={<Pages.registerPage />} />
                <Route path="/login" element={<Pages.loginPage />} />
              </Route>
            </Routes>
          </NoteProvider>
        </UserProvider>
      </PageProvider>
    </>
  );
}

export default App;
