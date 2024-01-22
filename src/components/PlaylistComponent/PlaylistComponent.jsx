import React from "react";
import MyButton from "../button/MyButton";

const PlaylistComponent = ( { ...props } ) => {

    const { deletePlaylist, title, id  } = props;

    return (
        <div className="savedPlaylistName">
            <div>
                <label>{title}</label>
            </div>
            <div className="savedPlaylistNameButton">
                <MyButton onClick={() => deletePlaylist(id)}>Delete</MyButton>
                <MyButton>Edit</MyButton>
            </div>
        </div>
    )
}

export default PlaylistComponent;