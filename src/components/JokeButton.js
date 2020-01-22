import React from 'react';

const JokeButton = (props) => {
  return (
	<div className="flex items-center justify-center pa4">
	  <p 
		className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box" 
		style={{cursor: "pointer"}}
		onClick={props.getJoke}
	  >
		GET JOKE
	  </p>
	</div>
  );
};

export default JokeButton;
