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
      emptyState: true,
      resultsData: []
    }
  }

  componentDidMount() {
    
  }

  reset() {
      this.setState({
          resultsData: []
      })
  }

  onJokeButtonClick = () => {
    axios.get('https://sv443.net/jokeapi/category/programming')
      .then(res => {
        const result = res.data;
        this.setState({
          isEmptyState: false,
          resultsData: result
        })
      })
  }

  render() {
    const { resultsData } = this.state;
    const newJoke = resultsData;
    
    return (
      <Fragment>
        <PageHeader />
        <DividerLine />
        <JokeButton getJoke={ this.onJokeButtonClick } />
        <JokeMessage jokeline={ newJoke } />
        <LoadingAlert />
      </Fragment>
    );
  }
}

export default App
