import React, { useState, useEffect } from "react";
import { useNote } from "../../context/index.jsx";
import { useParams } from "react-router-dom";

function NotePage() {
  const { id } = useParams();
  const { noteContext, setNoteContext } = useNote();
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getNote = noteContext.find((note) => note.key == parseInt(id));
    if (getNote) {
      setNote(getNote);
    }
    setLoading(false);
  }, [id, noteContext]);

  return (
    <>
      <div>Note Page</div>
      <div>{note.title}</div>
      <div>{note.content}</div>
    </>
  );
}

export default NotePage;
