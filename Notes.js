import { MdDeleteForever } from "react-icons/md";

const Notes = ({ id, text, date, handleDeleteNote}) => {
    return(
        <div className="notes">
            <span>{text}</span>
            <div className="footer"> 
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)} className="delete-btn" size="1.5em"/>
            </div>
        </div>
    );
};

export default Notes;