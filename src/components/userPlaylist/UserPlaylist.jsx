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
            setPlaylists([...playlists, {
                id: Math.random(),
                title: currentValue,
            }])
            setCurrectValue('')
            console.log(playlists)
        }
      }

      const handleKeyDown = (e) => {
        if(e.key == 'Enter') {
            if(currentValue.length > 0) {
                addPlaylist(e)
            }
        }
      }
    
      const deletePlaylist = (id) => {
        console.log(id)
        setPlaylists(playlists.filter(playlist => playlist.id !== id))
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
                <ul>
                    {
                        playlists.map(playlist => (
                            <PlaylistComponent 
                                key={playlist.id} 
                                deletePlaylist={deletePlaylist} 
                                {...playlist}
                            />
                    ))
                    }
                </ul>
            </div>
        </div>
    );
}


export default UserPlaylist;