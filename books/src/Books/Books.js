import React from 'react';

export default class Books extends React.Component {

  state={
    expanded: true
  }

  toggleExpanded(){
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    
    const books = this.props.list.map((book, i) => {
      const price = book.saleInfo.saleability === 'NOT_FOR_SALE'
      ? <h2>NOT FOR SALE</h2> 
      : <h2>Price: ${book.saleInfo.listPrice.amount}</h2>;
      if (this.state.expanded) {
        return (
          <div className='book' key={i} onClick={e => {
            this.toggleExpanded();
          }}>
            <h2>{book.volumeInfo.title}</h2>
            <h3>Author:{book.volumeInfo.authors}</h3>
            {price}
            <p>{book.volumeInfo.subtitle}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
      
          </div>
        );
      } else {
        return (
          <div className='book' key={i} onClick={e => {
            this.toggleExpanded();
          }}>
            <h2>{book.volumeInfo.title}</h2>
            <h3>Author:{book.volumeInfo.authors}</h3>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
          </div>
        )
      }
     
    })
    console.log(this.props.list)
    return (
      <div className='Books'>
        {books}
      </div>
    )
  }
}