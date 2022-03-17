import React from "react";
import './Tracklist.css'
import Track from "../Track/Track";

function TrackList(props) {
   
    return(
      <div className="TrackList">
        {props.tracks && props.tracks.map((track) => {
          return <Track track = {track}
                        key = {track.id}
                        isRemoval = {false} />
          }) 
        }      
        
      </div>
    );
}

export default TrackList;
