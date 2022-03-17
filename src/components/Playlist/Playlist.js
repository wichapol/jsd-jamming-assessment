import React from 'react';
import './Playlist.css';
import TrackList from'../TrackList/TrackList'

function Playlist(props) {
  
  function handleNameChange(e) {
    const name = e.target.value;
    props.onNameChange(name);
  }

  return (
    <div className="Playlist">
      <input Value={props.playlistName}
             onChange={handleNameChange} />
      <TrackList tracks ={props.playlistTracks}
                 onRemove ={props.onRemove}
                 isRemoval ={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
