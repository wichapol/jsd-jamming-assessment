import React from 'react';
import './Track.css';

function Track(props) {

  function RenderAction() {
    if (props.isRemoval) {
      return <button className="Track-action" onClick={onRemove}>-</button> 
    } else { 
      return <button className="Track-action" onClick={addTrack}>+</button> 
    };
  }
  
  function addTrack() {
    props.onAdd(props.track);
  }

  function onRemove() {
    props.onRemove(props.track);
  }
   
  return (
    <div className="Track">
      <div className="Track-information">
        <h3> {props.track.name} </h3>
        <p> {props.track.artist} | {props.track.album} </p>
      </div>
      {RenderAction()}
    </div>
  );
}

export default Track;
