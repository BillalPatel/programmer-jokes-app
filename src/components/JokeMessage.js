import React from 'react'
import { Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const JokeMessage = ({ jokeline }) => {
	const jk = 
			<h1>
				{ jokeline.joke }
			</h1>

	return (
		<div>
			{ jk }
		</div>
	)
}

export default JokeMessage