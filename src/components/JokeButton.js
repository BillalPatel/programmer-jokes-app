import React from 'react';

const JokeButton = (props) => {
	return (
		<div class="flex items-center justify-center pa4">
			<a className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box" style={{cursor: "pointer"}} onClick={ props.getJoke }> GET JOKE </a>
		</div>
	)
}

export default JokeButton;