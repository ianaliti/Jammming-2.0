import React from "react";
import Track from "../track/Track";
import MyButton from "../button/MyButton";

const FavoriteTracks = ({ favoriteTracks, setFavoriteTracks }) => {

    const onDelete = (id) => {
        setFavoriteTracks(favoriteTracks.filter(track => track.id !== id))
    }

    console.log(favoriteTracks)

    return (
        <div>
            <ul>
                {favoriteTracks.map((track) => (
                    <div>
                        <Track track={track} key={track.id} />
                        <MyButton onClick={() => onDelete(track.id)}>Delete</MyButton> 
                    </div>                     
                ))}
            </ul>
        </div>
    )
}

export default FavoriteTracks;