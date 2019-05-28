import React from 'react';
import './App.css';
import Controls from './Controls/Controls';
import Books from './Books/Books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      list: [],
      printType: 'all',
      bookType: 'free-ebooks',
    }
  }
  handleFetch = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.userInput}`)
      .then(response => {
         if (!response.ok) {
        throw new Error('something went wrong');
      } return response;
    })
      .then (response => response.json())
      .then (data => {
        if (data.totalItems>0) {
        const list = data.items
        this.setState({
          list
        });
      } else {
        this.setState({
          list: [],
          error: 'No Items'
        })
      }
      })
      .catch(err => {
        console.log('This is error', err)
      });
  }


  setSearchTerm = (userInput) => {
    this.setState({
      userInput
    });
  }

  setPrintType = (printType) => {
    this.setState({
      printType
    });
  }

  setBookType = (bookType) => {
    this.setState({
      bookType
    })
  }


  

  render() {
    return (
      <div className='App'>

        <Controls 
        printType={this.state.printType} 
        bookType={this.state.bookType} 
        setSearchTerm={this.setSearchTerm} 
        setPrintType={this.setPrintType}
        setBookType={this.setBookType}
        handleFetch={this.handleFetch}/>
        <Books list={this.state.list} />
        {
          this.state.error === 'No Items'? <h2>No Items Found</h2> : null
        }
      </div>  
    );
  }
}

export default App;
