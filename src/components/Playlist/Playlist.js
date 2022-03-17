import React from 'react';
import './Playlist.css';
import TrackList from'../TrackList/TrackList'

function Playlist(props) {
  // const [value, setValue] = useState({ value :'New Playlist'});

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"}/>
      <TrackList playlistTracks ={props.playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
