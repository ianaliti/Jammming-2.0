import { React, useState, useEffect } from 'react';
import SearchResults from '../../components/searchResult/SearchResult';
import SearchBar from '../../components/searchBar/SearchBar';
import Track from '../../components/track/Track';
import UserPlaylist from '../../components/userPlaylist/UserPlaylist'
import NavBar from '../../components/navBar/NavBar';
import MySecondButton from '../../components/button/mySecondButton/MySecondButton'

const spotify_client_id = '20902d6883cf474a9d9eac6475aad534';
const spotify_client_secret = '31fcd3efe0864552b85db24f22352a57';


export default function Homepage() {

    const [searchInput, setSearchInput] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [albums, setAlbums] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [favoriteTracks, setFavoriteTracks] = useState([]);


    //Api token 
    useEffect(() => {
        let authOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + spotify_client_id + '&client_secret=' + spotify_client_secret
        }
        fetch('https://accounts.spotify.com/api/token', authOptions)
            .then(response => response.json())
            .then(date => setAccessToken(date.access_token))
    }, [])


    //Search 
    useEffect(() => {
        if (!searchInput) return setSearchResult([]);
        if (!accessToken) return

        let cancel = false;

        let searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters)
            .then(response => response.json())
            .then(data => {
                setAlbums(data.tracks.items)

                if (cancel) return
                setSearchResult(
                    albums.map(track => {
                        return {
                            uri: track.uri,
                            name: track.name,
                            artist: track.album.artists[0].name,
                            imageUrl: track.album.images[1].url,
                            id: Math.random()
                        }
                    })
                )
            })
        return () => (cancel = true)
    }, [searchInput, accessToken])

    const addFavoriteTrack = (track) => {
        if(!favoriteTracks.includes(track)) {
            setFavoriteTracks([...favoriteTracks, track])
        }
    };


    return (
        <div>
            <NavBar />
            <div className='cover'>
                <div className='split'>
                    <SearchBar onChange={(e) => setSearchInput(e.target.value)} />
                    <SearchResults>
                        {
                            searchResult.map((track) => (
                                <div className='card'>
                                    <Track key={track.id} track={track} addFavoriteTrack={addFavoriteTrack} />
                                    <MySecondButton onClick={() => addFavoriteTrack(track)}>Add</MySecondButton>
                                </div>
                            ))
                        }
                    </SearchResults>
                </div>
                <div className='split'>
                    <UserPlaylist favoriteTracks={favoriteTracks} setFavoriteTracks={setFavoriteTracks} />
                </div>
            </div>
        </div>
    );
}

