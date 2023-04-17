import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import NoteEntry from './modules/NoteEntry'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    {/* // putting it here just for testing */}
    {/* <NoteEntry /> */}
  </>
);

//</React.StrictMode> was sending a double API request to chatGPT which was confusing
