import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FiltersBar from '../FiltersBar/FiltersBar';

export default class Controls extends React.Component {
  
  render() {
    return (
      <div className='controls'>
        <h1>Google Book Search</h1>
        <SearchBar />
        <FiltersBar />
      </div>
    )
  }
}