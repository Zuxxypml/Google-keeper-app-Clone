import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const handleDelete = () => {
    fetch(`http://localhost:88/notes/${props.id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Note Deleted");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {});
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
