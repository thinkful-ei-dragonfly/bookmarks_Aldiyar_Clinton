import React from 'react';


export default class FiltersBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='filters'>
        <form className='filters-controls'>
          <label htmlFor='print-type-filter'>Print Type:</label>
          <select 
            onChange={e => {
              this.props.setPrintType(e.target.value)
            }} 
            name='print-type-filter' 
            id='printTypeFilter'>
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
          <label htmlFor='book-type-filter'>Book Type:</label>
          <select 
            onChange={e => {
              this.props.setBookType(e.target.value)
            }} 
            name='book-type-filter' 
            id='book-type-filter'>
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
}