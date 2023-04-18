import { createContext, useContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteContext, setNoteContext] = useState([]);

  return (
    <NoteContext.Provider value={{ noteContext, setNoteContext }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const { noteContext, setNoteContext } = useContext(NoteContext);
  return { noteContext, setNoteContext };
};
