import {Routes, Route} from 'react-router-dom'
import React from 'react';
import * as Pages from './pages'
import Nav from './layouts/nav'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route path="/" element={ <Pages.homePage />}/>
        <Route path="/notes" element={ <Pages.notesPage />}/>
        <Route path="/user" element={<Pages.userPage />} />
        <Route path="/note" element={<Pages.CreateNotePage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
