import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'

import PageHeader from '../components/PageHeader'
import DividerLine from '../components/DividerLine'
import JokeButton from '../components/JokeButton'
import JokeMessage from '../components/JokeMessage'
import LoadingSpinner from '../components/LoadingSpinner'
import './App.css'


const App = () => {
  const [loading, setLoading] = useState(false)
  const [resultsData, setResultsData] = useState([]);

  const onJokeButtonClick = () => {
    axios.get('https://sv443.net/jokeapi/category/programming')
      .then(res => {
        const result = res.data;
          setLoading(true);
          setResultsData(result);
          setLoading(true);
      })
  }

    return (
      <>
        <PageHeader />
        <DividerLine />
        <JokeButton getJoke={ onJokeButtonClick } />
        <LoadingSpinner />
        <JokeMessage jokeline={ resultsData } />
      </>
    )
}

export default App
