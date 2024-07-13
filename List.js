import Notes from "./Notes";
import Add from "./Add";

const List = ({notes, handleAddNote, handleDeleteNote}) => {
    return(
        <div className= "list">
            {notes.map((notes) => (
                <Notes id={notes.id} text={notes.text} date={notes.date} handleDeleteNote={handleDeleteNote}/> 
            ))}
             <Add handleAddNote={handleAddNote}/>
        </div>
    );
};

export default List;