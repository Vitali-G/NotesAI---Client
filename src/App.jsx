import { Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as Pages from "./pages";
import Nav from "./layouts/nav";
import "./App.css";
import { NoteProvider, UserProvider, PageProvider, page } from "./context";

function App() {
  const {currentPage} = page
  const [user_id, setUser_id] = useState("")

  // useEffect(function () {
  //   if (user) {
  //     window.location.assign("/");
  //   }
  // }, page)
 

  return (
    <>
      <PageProvider>
      <UserProvider>
      <NoteProvider>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Pages.homePage />} />
            <Route path="/notes" element={<Pages.NotesListPage />} />
              <Route path="/note/:id" element={<Pages.NotePage />} />
            <Route path="/user" element={<Pages.userPage />} />
            <Route path="/note" element={<Pages.CreateNotePage />} />
            <Route path="/register" element={<Pages.registerPage />} />
            <Route path="/login" element={<Pages.loginPage user_id={user_id} setUser_id={setUser_id} />} />
          </Route>
        </Routes>
        </NoteProvider>
        </UserProvider>
        </PageProvider>
    </>
  );
}

export default App;
