import { React, useState } from 'react';
import MyButton from '../button/MyButton';
import SavedSong from '../savedSong/SavedSong';


const UserPlaylist = () => {

    const [playlistName, setPlaylistName] = useState([]);
    const [currentValue, setCurrectValue] = useState('');
    
    const handleChange = (e) => {
        setCurrectValue(e.target.value)
    }

    const addPlaylists = (e) => {
        e.preventDefault()
        if(currentValue.length > 0) {
            setPlaylistName([...playlistName, currentValue])
            setCurrectValue('')
        }
      }

      const handleKeyDown = (e) => {
        if(e.key == 'Enter') {
            if(currentValue.length > 0) {
                addPlaylists(e)
            }
        }
      }
    
      const deletePlaylists = (id) => {
        setPlaylistName(playlistName.filter(p => p.id !== id))
      }
    

    return (
        <div className='playlistName'>
            <p>Create your playlist</p>
            <input
                type="text"
                placeholder="My Playlist"
                value={currentValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className='playlist_input'
                />
            <MyButton onClick={addPlaylists}>Create</MyButton>
            <div>
                <ul>
                    {playlistName.map((playlist) => (
                        <SavedSong key={playlist.id} playlist={playlist} deletePlaylists={deletePlaylists}/>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
}


export default UserPlaylist;