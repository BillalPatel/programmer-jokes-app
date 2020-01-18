import React, { useState } from 'react'
import axios from 'axios'

import PageHeader from '../components/PageHeader'
import DividerLine from '../components/DividerLine'
import JokeButton from '../components/JokeButton'
import JokeMessage from '../components/JokeMessage'
import LoadingSpinner from '../components/LoadingSpinner'
import './App.css'


const App = () => {
  const [loading, setLoading] = useState(false)
  const [displayJoke, setDisplayJoke] = useState(false)
  const [resultsData, setResultsData] = useState([]);

  const onJokeButtonClick = async () => {
    try {
      await axios.get('https://sv443.net/jokeapi/category/programming')
        .then(setLoading(true))
        .then(res => {
          const result = res.data;
            setResultsData(result);
            setLoading(false);
            setDisplayJoke(true);
        })
    } catch(err) {
      console.log(err);
    }
  }

    return (
      <>
        <PageHeader />
        <DividerLine />
        {loading && 
          <LoadingSpinner />
        }
        {displayJoke && 
          <JokeMessage jokeline={ resultsData } />
        }
        <JokeButton getJoke={ onJokeButtonClick } />
      </>
    )
}

export default App
