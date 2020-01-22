import React, { useState } from 'react';
import axios from 'axios';

import PageHeader from '../components/PageHeader';
import JokeButton from '../components/JokeButton';
import JokeMessage from '../components/JokeMessage';
import LoadingAlert from '../components/LoadingAlert';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [displayJoke, setDisplayJoke] = useState(false)
  const [resultsData, setResultsData] = useState([]);

  const onJokeButtonClick = async () => {
    try {
      setDisplayJoke(false);
      await axios.get('https://sv443.net/jokeapi/category/programming')
        .then(setLoading(true))
        .then(res => {
          const result = res.data;
            setResultsData(result);
            setLoading(false);
            setDisplayJoke(true);
        });
    } catch(err) {
      console.log(err);
    };
  };

    return (
      <>
        <PageHeader />
        {loading && 
          <LoadingAlert />
        }
        {displayJoke && 
          <JokeMessage jokeline={ resultsData } />
        }
        <JokeButton getJoke={ onJokeButtonClick } />
      </>
    );
};

export default App;
