import { React, useState } from 'react';
import MyButton from '../button/MyButton';


const UserPlaylist = () => {

    const [playlists, setPlaylists] = useState([]);
    const [currentValue, setCurrectValue] = useState('');
    
    const handleChange = (e) => {
        setCurrectValue(e.target.value)
    }

    const addPlaylists = (e) => {
        e.preventDefault()
        if(currentValue.length > 0) {
            setPlaylists([...playlists, currentValue])
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
    
      const deletePlaylists = (playlist) => {
        setPlaylists(playlists.filter(p => p.uri !== playlist.uri))
      }
    

    return (
        <div>
            <p>Create a playlist</p>
            <input
                type="text"
                placeholder="My Playlist"
                value={currentValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />
            <MyButton onClick={addPlaylists}>Create</MyButton>
            <div>
                <ul>
                    {playlists.map((playlist) => (
                        <li key={playlist.uri}>{playlist}
                        <MyButton onClick={deletePlaylists}>Delete</MyButton>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
}


export default UserPlaylist;