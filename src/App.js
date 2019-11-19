import React, { Component, Fragment } from 'react'
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
      result: []
    }
  }

  render() {
    
    return (
      <Fragment>
        <PageHeader />
        <DividerLine />
        <JokeButton />
        <JokeMessage />
        <LoadingAlert />
      </Fragment>
    );
  }
}

export default App
