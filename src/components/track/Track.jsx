import React from "react";
import MyButton from "../button/MyButton";

const Track = ({ track, addFavoriteTrack }) => {

    return (
        <div className="card">
            <img src={track.imageUrl} />
            <div>
                {track.name}
            </div>
            <div>
                {track.artist}
            </div>
        </div>
    );
};

export default Track;