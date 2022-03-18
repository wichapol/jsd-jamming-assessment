import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

 function App() {
  const [ results, setResults ] = useState([{ name: 'name1', artist: 'artist1', album: 'album1',id: 1},
  { name: 'name2', artist: 'artist2', album: 'album2',id: 2 }
  ]);
  const [ playlistName, setPlaylistName] = useState('New Playlist');
  const [ playlistTracks, setPlaylistTracks] = useState([{ name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1',id: 3}, 
  { name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 4}]);
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
  }

  function Search(term) {
    console.log(term)
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