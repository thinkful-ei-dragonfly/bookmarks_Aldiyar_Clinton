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
      printType: '',
      bookType: '',
    }
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=Martin`)
      .then(response => {
         if (!response.ok) {
        throw new Error('something went wrong');
      } return response;
    })
      .then (response => response.json())
      .then (data => {
        console.log(data)
        const list = data.items
        this.setState({
          list
        });
      })
      .catch(err => {
        console.log('This is error', err)
      });
  }

  render() {
    return (
      <div className='App'>
        <Controls printType={this.state.printType} bookType={this.state.bookType}/>
        <Books list={this.state.list}/>
      </div>  
    );
  }
}

export default App;
