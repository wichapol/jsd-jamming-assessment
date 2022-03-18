import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';

 function App() {
  const [ results, setResults ] = useState([]);
  const [ playlistName, setPlaylistName] = useState('New Playlist');
  const [ playlistTracks, setPlaylistTracks] = useState([]);
    // console.log(results)
  function AddTrack(track) {

    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } 

    setPlaylistTracks((prev) => {
      return [...prev, track];
    }) 
  
  }

  function RemoveTrack(track) {
    setPlaylistTracks((prev) => {
      return prev.filter((currentTrack) => currentTrack.id  !== track.id);
    })
  }

  function UpdatePlaylistName(name) {
    setPlaylistName(name);
  }

  function SavePlaylist() {
    const trackURIs = playlistTracks.map(track => track.uri)
   

    Spotify.savePlaylist( playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
      
    })
  }

  function Search(term) {
    Spotify.getAccessToken()
    Spotify.search(term).then(results => {
      setResults(results)
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={Search} />
        <div className="App-playlist">
          <SearchResults searchResults={results} 
                         onAdd={AddTrack}  />
          <Playlist playlistName = {playlistName}
                    playlistTracks = {playlistTracks}
                    onRemove={RemoveTrack}
                    onNameChange={UpdatePlaylistName} 
                    onSave={SavePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;