import React from 'react'
import { Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const JokeMessage = ({ jokeline }) => {
	return(
		<h1>
			{ jokeline.joke }
		</h1>
	)
}

export default JokeMessage