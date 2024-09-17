import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea saveNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            noteTitle={note.title}
            noteContent={note.content}
            del={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
