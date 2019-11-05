import React, { Component } from 'react';
import './App.css';
import Author from './components/Author'
import Quote from './components/Quote'
import Buttons from './components/Buttons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quote: "This is default Quote",
      Author: "This is default Author"
    }
  }
  
  NewQuoteButtonHandler(event){
    event.preventDefault();
    

}

  render() {
    return (
      <div className="container-fluid">

        <div className="quote-container">
          <Quote> Print Quote instead from App.js </Quote>
          
        </div>

        <div className="author-container">
          <Author message='this author is part of JUST props'>
            This Author is part of props.children 

          </Author>
        </div>


        <div className="buttons-container">
          <Buttons />
        </div>

      </div>

    )
  }
}

export default App;
