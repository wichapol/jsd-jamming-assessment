import React from 'react';
import './Track.css';

function Track() {

  function renderAction() {
    if (props.isRemoval) {
      return  '-'
    } else {  '+'
    };
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>track name </h3>
        <p> track artist | track album </p>
      </div>
      <button className="Track-action">{renderAction}</button>
    </div>
  );
}

export default Track;
