import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const JokeButton = () => {
	return (
		<div>
			<Button content='Primary' className="ui primary button">
				Click Here!
			</Button>
		</div>
	)
}

export default JokeButton;