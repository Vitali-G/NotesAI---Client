const Note = ({ title, content }) => {
  return (
    <li className="note-card">
      <h2 className="note-title">{title}</h2>
      <p className="note-content">{content}</p>
    </li>
  );
};

export default Note;
