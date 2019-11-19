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
      loading: false,
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
          loading: true,
          resultsData: result
        })
      })
  }

  render() {
    const { resultsData, loading } = this.state;

    return (
      <Fragment>
        <PageHeader />
        <DividerLine />
        <JokeButton getJoke={ this.onJokeButtonClick } />
        <JokeMessage jokeline={ resultsData } />
        <LoadingAlert loader={ loading }/>
      </Fragment>
    );
  }
}

export default App
