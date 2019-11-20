import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './App.css'

import PageHeader from '../components/PageHeader'
import DividerLine from '../components/DividerLine'
import JokeButton from '../components/JokeButton'
import JokeMessage from '../components/JokeMessage'

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
    const { resultsData, loading } = this.state

    return (
      <Fragment>
        <PageHeader />
        <DividerLine />
        <JokeButton getJoke={ this.onJokeButtonClick } />
        <JokeMessage jokeline={ resultsData } loader={ loading } />
      </Fragment>
    )
  }
}

export default App
