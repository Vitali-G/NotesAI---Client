import { createContext, useContext, useState } from "react";

export const NoteContext = createContext();
const UserContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteContext, setNoteContext] = useState([]);

  return (
    <NoteContext.Provider value={{ noteContext, setNoteContext }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => useContext(NoteContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername, password, setPassword, email, setEmail }}>
      {children}
    </UserContext.Provider>
  )
}

export const user = () => useContext(UserContext)
