import React from "react";
import MyButton from "../button/MyButton";

const SavedSong = ( {playlist, ...props} ) => {

    const { deletePlaylists } = props;

    return (
        <div>
            <div>
            {playlist}
            </div>
            <div>
                <MyButton onClick={deletePlaylists} >Delete</MyButton>
            </div>
        </div>
    )
}

export default SavedSong;