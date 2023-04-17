import React, { useState, useContext, createContext } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteContext, setNoteContext] = useState([]);

  return (
    <NoteContext.Provider value={{ noteContext, setNoteContext }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => useContext(NoteContext);
