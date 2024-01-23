import React, { useEffect, useState } from "react";
import Track from "../track/Track";

const FavoriteTracks = ({ allTrack }) => {

    const [favoriteTracks, setFavoriteTracks] = useState([]);


    // console.log(allTrack)

    const addFavoriteTrack = (track) => {
       setFavoriteTracks([...favoriteTracks, track])
       console.log(favoriteTracks)
    };

    return (
        <div>
            <ul>
                {allTrack.map((track) => (
                     <Track track={track} key={track.uri} addFavoriteTrack={addFavoriteTrack}/>
                ))}
            </ul>
        </div>
    )
}

export default FavoriteTracks;