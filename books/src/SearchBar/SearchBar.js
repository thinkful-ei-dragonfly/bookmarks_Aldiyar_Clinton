import React from 'react';

export default function SearchBar() {
  return (
    <div className='Search'>
      <form className='search-form'>
        <label htmlFor='search-term'>SEARCH:</label>
        <input type='text' name='search-term' id='search-term'/>
        <button type='submit'>SEARCH</button>
      </form>
    </div>
  )
}