import { useState } from "react";

const Add = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState(" ");
    const Change = (event) => {
        setNoteText(event.target.value);
    };
    const handleSaveClick = () => {
        handleAddNote(noteText);
        setNoteText(" ");
    };
    return(
        <div className="notes new"> 
            <textarea rows="10" cols="10" placeholder="Type to add a note..." onChange={Change} value={noteText}> </textarea>
            <div className="footer"> 
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default Add;