import React from "react";
import Track from "../track/Track";
import MySecondButton from '../button/mySecondButton/MySecondButton'

const FavoriteTracks = ({ favoriteTracks, setFavoriteTracks }) => {

    const onDelete = (id) => {
        setFavoriteTracks(favoriteTracks.filter(track => track.id !== id))
    }

    console.log(favoriteTracks)

    return (
        <div>
            <ul>
                {favoriteTracks.map((track) => (
                    <div className="track_container card">
                        <Track track={track} key={track.id} />
                        <MySecondButton onClick={() => onDelete(track.id)}>Delete</MySecondButton> 
                    </div>                     
                ))}
            </ul>
        </div>
    )
}

export default FavoriteTracks;