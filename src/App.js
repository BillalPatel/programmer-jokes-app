import React, { Component, Fragment } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import PageHeader from './PageHeader'
import DividerLine from './DividerLine'
import JokeButton from './JokeButton'
import JokeMessage from './JokeMessage'
import LoadingAlert from './LoadingAlert'

class App extends Component {
  constructor() {
    super();
    this.state = {
      resultsData: []
    }
  }

  reset() {
      this.setState({
          resultsData: []
      })
  }

  onJokeButtonClick = () => {
    // const { joke } = this.state;
    // this.setState({
    //   joke: 
    // }
    axios.get('https://sv443.net/jokeapi/category/programming')
      .then(res => {
        const result = res.data;
        this.setState({
          resultsData: result
        })
      })
  }

  render() {
    const { resultsData } = this.state;
    const newJoke = resultsData.joke;
    
    return (
      <Fragment>
        <PageHeader />
        <DividerLine />
        <JokeButton getJoke={ this.onJokeButtonClick } />
        <JokeMessage joke={ newJoke } />
        <LoadingAlert />
      </Fragment>
    );
  }
}

export default App
