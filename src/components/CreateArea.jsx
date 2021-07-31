import React, { useState } from "react";

function CreateArea(props) {
  const [noteData, setNoteData] = useState({});

  function onInputChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    // console.log (noteData);
    // console.log("changed" + name + newValue);
    setNoteData((prevData) => {
      return { ...prevData, [name]: newValue };
    });
    console.log(noteData);
  }
  function addNote(event) {
    props.addNote(noteData);
    setNoteData({ title: "", content: "" }); //clear data
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          value={noteData.title}
          onChange={onInputChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={noteData.content}
          onChange={onInputChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
