import React from 'react';


export default function FiltersBar() {
  return (
    <div className='filters'>
      <form className='filters-controls'>
        <label htmlFor='print-type-filter'>Print Type:</label>
        <select name='print-type-filter' id='print-type-filter'>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='book-type-filter'>Book Type:</label>
        <select name='book-type-filter' id='book-type-filter'>
          <option value='free-ebooks'>Free EBooks</option>
          <option value='ebooks'>EBooks</option>
          <option value='full'>Full</option>
          <option value='paid-ebooks'>Paid EBooks</option>
          <option value='partial'>Partial</option>
        </select>
      </form>
    </div>
  )
}