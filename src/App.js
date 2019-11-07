import React, { Component } from 'react';
import './App.css';
import Author from './components/Author'
import Quote from './components/Quote'
import Buttons from './components/Buttons'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quote: "Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning",
      Author: "Winston Churchill"
    }
  }
  
  //handler, when the GetQuote button is clicked it fetches from the API and setState
  NewQuoteButtonHandler = () => {
    fetch("https://api.quotable.io/random")
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong try again')
        }
        return response.json()
       
      })
      .then(data => {
        console.log(data)
        this.setState({
          Quote: data.content,
          Author: data.author
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
    
      <div className="container-fluid">

        <div className="quote-container">
          <Quote> {this.state.Quote}</Quote>
        </div>

        <div className="author-container">
          <Author> {this.state.Author} </Author>
        </div>

        <div className="buttons-container">
          <button className="quote-btn"
            onClick={this.NewQuoteButtonHandler}
          >
            New Quote
          </button>

          <Buttons>
            {this.state.Quote}
            {this.state.Author}
          </Buttons>
        
        </div>

      </div>

    )
  }
}

export default App;
