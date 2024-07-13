import React from "react";

const Heading = ({ToggleMode}) => {
    return(
        <div className="heading">
            <h1>Notes App</h1>
            <button onClick={() => ToggleMode((DarkMode) => !DarkMode)} className="save">Toggle Mode</button>
        </div>
    );
};

export default Heading;