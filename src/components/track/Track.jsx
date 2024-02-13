import React from "react";
import MyButton from "../button/MyButton";

const Track = ({ track }) => {

    return (
        <div className="card">
            <img className='card_image' src={track.imageUrl} />
            <div className="track-info">
                <div className="track_name">
                    {track.name}
                </div>
                <div>
                    {track.artist}
                </div>
            </div>
        </div>
    );
};

export default Track;