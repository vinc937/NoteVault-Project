import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [takingNotes, setTakingNotes] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  function handleClick() {
    setTakingNotes(true);
  }

  return (
    <div>
      <form className="create-note">
        {takingNotes && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows={takingNotes ? "4" : "1"}
          value={note.content}
        />
        <Zoom in={takingNotes}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.saveNote(note);
              setNote({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
