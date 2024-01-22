import React from "react";
import MyButton from "../button/MyButton";

const PlaylistComponent = ( {playlist, ...props} ) => {

    const { deletePlaylist } = props;

    return (
        <div className="savedPlaylistName">
            <div>
            {playlist}
            </div>
            <div className="savedPlaylistNameButton">
                <MyButton onClick={deletePlaylist} >Delete</MyButton>
                <MyButton>Edit</MyButton>
            </div>
        </div>
    )
}

export default PlaylistComponent;