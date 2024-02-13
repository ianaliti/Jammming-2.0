import React from "react";

const Track = ({ track }) => {

    return (
        <div className="card">
            <img className='card_image' src={track.imageUrl} />
            <div className="card_font">
                {track.name}
            </div>
            <div className="card_font">
                {track.artist}
            </div>
        </div>
    );
};

export default Track;