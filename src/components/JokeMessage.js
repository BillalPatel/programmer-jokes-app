import React from 'react';

const JokeMessage = (props) => {
  return (
    <h6 className="f7 f1-m f-headline-l measure-narrow lh-title mv0 tc">
	  <span className="bg-black-90 lh-copy white pa1 tracked-tight">{ props.jokeline.joke }</span>
	</h6>
  );
};

export default JokeMessage;
