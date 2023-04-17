const Note = ({ title, content }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{content}</p>
    </li>
  );
};

export default Note;
