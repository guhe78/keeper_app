import React, { useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <form className="create-note">
      <input
        type="text"
        placeholder="Title..."
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Take a note..."
        name="content"
        value={note.content}
        onChange={handleChange}
        rows="3"
      />
      <Zoom in={true}>
        <Fab id="button" onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;
