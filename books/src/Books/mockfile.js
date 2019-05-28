  
this.props.list.map((book, i) => {
  const price = if(book.saleInfo.saleabilty) ? <h2>NOT FOR SALE</h2> : <h2>Price: ${book.saleInfo.listPrice.amount};
    <div className='book' key={i}>
      <h2>{book.volumeInfo.title}</h2>
      <h3>{book.volumeInfo.authors}</h3>
      <h3>{book.saleInfo.retailPrice}</h3>
      <p>{book.volumeInfo.subtitle}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />

    </div>
  );
})