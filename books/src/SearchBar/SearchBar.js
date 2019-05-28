import React from 'react';

export default class SearchBar extends React.Component {
  render (){
  return (
    <div className='Search'>
      <form className='search-form' onSubmit={e => {
        e.preventDefault()
        this.props.handleFetch()}}>
        <label htmlFor='search-term'>SEARCH:</label>
        <input 
          onChange={e => {
            e.preventDefault()
            this.props.setSearchTerm(e.target.value)
          }}
          type='text'
          name='searchTerm'
          id='searchTerm'
          required/>
        <button type='submit'>SEARCH</button>
      </form>
    </div>
  )}
}