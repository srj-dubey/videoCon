import React from 'react'
import { useState } from 'react'

import './MainArea.css'

//components
import Chat  from './components/Chat/Chat.js'

const MainArea = (props) => {

	return (
		<div className="dashboard--mainArea--container">
			<div className="dashboard--mainArea--chat--wrap">
				<Chat />
			</div>
		</div>
	)

}

export default MainArea