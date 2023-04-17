import "./App.css";
import NotesListPage from "./pages/NotesListPage";
import { NoteProvider } from "./context/index.jsx";

function App() {
  return (
    <NoteProvider>
      <NotesListPage />
    </NoteProvider>
  );
}

export default App;
