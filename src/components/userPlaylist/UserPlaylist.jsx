import { React, useState } from 'react';
import MyButton from '../button/MyButton';
import PlaylistComponent from '../PlaylistComponent/PlaylistComponent';


const UserPlaylist = () => {

    const [playlists, setPlaylists] = useState([]);
    const [currentValue, setCurrectValue] = useState('');
    
    const handleChange = (e) => {
        setCurrectValue(e.target.value)
    }

    const addPlaylist = (e) => {
        e.preventDefault()
        if(currentValue.length > 0) {
            setPlaylists([...playlists, currentValue])
            setCurrectValue('')
        }
      }

      const handleKeyDown = (e) => {
        if(e.key == 'Enter') {
            if(currentValue.length > 0) {
                addPlaylist(e)
            }
        }
      }
    
      const deletePlaylist = (event) => {
        console.log(event);
        setPlaylists(playlists.filter(playlist => playlist != event))
      }
    

    return (
        <div className='playlists'>
            <div>
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
                {playlists.map((playlist) => (
                    <PlaylistComponent key={playlist} playlist={playlist} deletePlaylist={deletePlaylist}/>
                ))
                }
            </div>
        </div>
    );
}


export default UserPlaylist;