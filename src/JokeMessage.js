import React from 'react'
import { Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const JokeMessage = ({ joke }) => {
	return (
		<Message
			>
		    	<Message.Header>{ joke }</Message.Header>
		    	<p>
		      		{ joke }
		    	</p>
		</Message>
	)
}

export default JokeMessage