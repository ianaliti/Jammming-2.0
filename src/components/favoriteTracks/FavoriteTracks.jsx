import React from "react";
import Track from "../track/Track";

const FavoriteTracks = ({ favoriteTracks }) => {


    return (
        <div>
            <ul>
                {favoriteTracks.map((track) => (
                     <Track track={track} key={track.uri} />
                ))}
            </ul>
        </div>
    )
}

export default FavoriteTracks;