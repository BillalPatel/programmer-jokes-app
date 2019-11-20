import React from 'react'
import { Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import LoadingAlert from './LoadingAlert'

const JokeMessage = ({ jokeline, loading }) => {
	const jk = 
			<h1>
				{ jokeline.joke }
			</h1>

	return (
		<div>
			<LoadingAlert loader={ loading } />
			{ jk }
		</div>
	)
}

export default JokeMessage