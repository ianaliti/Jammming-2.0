import { React, useState } from 'react';
import MyButton from '../button/MyButton';
import PlaylistComponent from '../PlaylistComponent/PlaylistComponent';
import FavoriteTracks from '../favoriteTrack/FavoriteTracks';


const UserPlaylist = ({ favoriteTracks, setFavoriteTracks }) => {

    const [playlists, setPlaylists] = useState([]);
    const [currentValue, setCurrectValue] = useState('');


    const handleChange = (e) => {
        setCurrectValue(e.target.value)
    }

    const addPlaylist = (e) => {
        e.preventDefault()
        if (currentValue.length > 0) {
            setPlaylists([...playlists, {
                id: Math.random(),
                title: currentValue,
                tracks: [favoriteTracks]
            }])
            setCurrectValue('')
        }
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            if (currentValue.length > 0) {
                addPlaylist(e)
            }
        }
    }

    const deletePlaylist = (id) => {
        setPlaylists(playlists.filter(playlist => playlist.id !== id))
        setFavoriteTracks([]);
    }

    const editPlaylist = (id, title) => {
        setPlaylists(playlists.map(playlist => {
            if (playlist.id == id) {
                playlist.title = title;
                return playlist;
            } else {
                return playlist;
            }
        }))
    }

    return (
        <div>
            <div className='playlist'>
                <p>Create your playlist</p>
                <input
                    type="text"
                    placeholder="My Playlist"
                    value={currentValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className='playlist_input'
                />
                <MyButton onClick={addPlaylist}>Create</MyButton>
            </div>
            <div className='savedPlaylist'>
                <ul>
                    {
                        playlists.map(playlist => (
                            <PlaylistComponent
                                key={playlist.id}
                                deletePlaylist={deletePlaylist}
                                editPlaylist={editPlaylist}
                                {...playlist}
                            />
                        ))
                    }
                </ul>
                <FavoriteTracks favoriteTracks={favoriteTracks} setFavoriteTracks={setFavoriteTracks} />
            </div>
        </div>
    );
}


export default UserPlaylist;