/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {

  const [ term, setTerm ] = useState('')

  function Search() {
    props.onSearch(term)
  }

  function HandleTermChange(e) {
    setTerm(e.target.value)
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" 
             onChange={HandleTermChange} />
      <button className="SearchButton"
              onClick={Search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
