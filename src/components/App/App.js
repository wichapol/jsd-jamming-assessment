import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

 function App() {
  const [ results, setResults ] = useState([{ name: 'name1', artist: 'artist1', album: 'album1',id: 1},
  { name: 'name2', artist: 'artist2', album: 'album2',id: 2 }
  ]);
  const [ playlistName, setPlaylistName] = useState('');
  const [ playlistTracks, setPlaylistTracks] = useState([]);
    // console.log(results)
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={results} />
          <Playlist playlistName = {playlistName}
                    playlistTracks = {playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;