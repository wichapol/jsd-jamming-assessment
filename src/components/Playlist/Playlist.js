import React from 'react';
import './Playlist.css';


function Playlist() {
  // const [value, setValue] = useState({ value :'New Playlist'});

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"}/>
      {/* <TrackList /> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
