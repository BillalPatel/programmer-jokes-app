import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader';
import JokeButton from './JokeButton';

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
        <JokeButton />
      </Fragment>
    );
  }
}

export default App;
