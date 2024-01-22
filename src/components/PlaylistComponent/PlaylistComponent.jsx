import React, { useState } from "react";
import MyButton from "../button/MyButton";

const PlaylistComponent = (props) => {

    const { title, id, editPlaylist, deletePlaylist } = props;

    const [editingText, setEditingText] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const savePlaylist = () => {
        setIsEditing(false);
        editPlaylist(id, editingText)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            savePlaylist();
        }
    }

    return (
        <div>
            <li className="savedPlaylistName">
                <div>
                    {
                        isEditing ?
                            (<input
                                type='text'
                                onChange={(e) => setEditingText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                value={editingText}
                                className="edit-playlist-input"
                            />)
                            :
                            (<label>{title}</label>)
                    }
                </div>
                <div>
                    {
                        isEditing ? (
                            <div className="savedPlaylistNameButton">
                                <MyButton className="button-cancel dropdown"
                                    onClick={() => setIsEditing(false)}>
                                    Cancel</MyButton>
                                <MyButton className="button-save dropdown"
                                    onClick={() => savePlaylist()}>
                                    Save</MyButton>
                            </div>
                        ) : (
                            <div className="savedPlaylistNameButton">
                                <MyButton className="button-delete dropdown"
                                    onClick={() => deletePlaylist(id)}>
                                    Delete</MyButton>
                                <MyButton className="button-edit dropdown"
                                    onClick={() => setIsEditing(true)}>
                                    Edit</MyButton>
                            </div>
                        )
                    }
                </div>
            </li>
        </div>
    )
}

export default PlaylistComponent;