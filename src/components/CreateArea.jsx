import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";
function CreateArea() {
  const [clicked, setClicked] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleClick = (e) => {
    const writtenNote = {
      title: note.title,
      content: note.content,
    };
    if (
      JSON.stringify(writtenNote) === JSON.stringify({ title: "", content: "" })
    ) {
      console.log("Empty Note");
    } else {
      fetch("http://localhost:88/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(writtenNote),
      })
        .then(() => {
          console.log("New Note Added ");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      {!clicked && (
        <form className="create-note">
          <input
            name="title"
            onClick={(e) => {
              setClicked(true);
            }}
            placeholder="Title"
          />
        </form>
      )}
      {clicked && (
        <form className="create-note">
          <input
            name="title"
            onChange={(e) => {
              setNote({
                title: e.target.value,
                content: note.content,
              });
            }}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={(e) => {
              setNote({
                title: note.title,
                content: e.target.value,
              });
            }}
            placeholder="Take a note..."
            rows="3"
          />
          <Zoom in={true}>
            <Fab className="Fab" onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      )}
    </div>
  );
}

export default CreateArea;
