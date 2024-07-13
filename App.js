import { useState } from "react";
import List from "./Components/List";
import {nanoid} from "nanoid";
import Heading from "./Components/Heading";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "First Note",
    date: "7/4/2024",
  },
  {
    id: nanoid(),
    text: "Second Note",
    date: "7/9/2024",
  },
  {
    id: nanoid(),
    text: "Third Note",
    date: "7/11/2024",
  },
]);

const [darkMode, setDarkMode] = useState(false);

const addNotes = (text) => {
  const date = new Date();
  const newNote ={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNotes = (id) => {
  const newNotes = notes.filter((notes) => notes.id !== id);
  setNotes(newNotes);
};

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
    <Heading ToggleMode={setDarkMode}/>
      <List notes={notes} handleAddNote={addNotes} handleDeleteNote={deleteNotes}/>
      </div>
    </div>

  );
};

export default App;