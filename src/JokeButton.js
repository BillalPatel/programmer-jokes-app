import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const JokeButton = ({ getJoke }) => {
	return (
		<div>
			<Button content='Primary' className="ui primary button" onClick={ getJoke }>
				Click Here!
			</Button>
		</div>
	)
}

export default JokeButton