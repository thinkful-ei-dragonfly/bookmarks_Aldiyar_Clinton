import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FiltersBar from '../FiltersBar/FiltersBar';

export default class Controls extends React.Component {
  
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className='controls'>
        <h1>Google Book Search</h1>
        <SearchBar 
          setSearchTerm={this.props.setSearchTerm}
          handleFetch={this.props.handleFetch} />
        <FiltersBar 
          setBookType={this.props.setBookType}
          setPrintType={this.props.setPrintType}/>
      </div>
    )
  }
}