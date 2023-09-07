import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isClicked, setIsClicked] = useState(false);

  function makeClick(){
    setIsClicked(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && <input 
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea onClick={makeClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder={isClicked ?"Take a note..." : "click here to add notes..."}
          rows={isClicked ? "3" : "1" }
        />
        <Zoom in={isClicked} >
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
