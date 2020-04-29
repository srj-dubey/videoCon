import React from 'react'
import { useState } from 'react'

import './Chat.css'

//icons

//media
import img1 from '../../../../../../assets/girl.png'
import img2 from '../../../../../../assets/man.png'
import img3 from '../../../../../../assets/head.png'
import img4 from '../../../../../../assets/ballet.png'

//components
import Video from './Video/Video.js'
import Text from './Text/Text.js'

const Chat = (props) => {

	const members = [
		{'name' : 'Emma Watson', 'image' : img1},
		{'name' : 'Hagrid F.', 'image' : img2},
		{'name' : 'Cp. Holt', 'image' : img3},
	]

	return (
		<div className="dashboard--mainArea--chat--container">
			<div className="dashboard--mainArea--chat--heading--container">
				<div className="dashboard--mainArea--chat--heading">
					<h2>New Project</h2>
				</div>
				<div className="dashboard--mainArea--chat--time">
					<p>17 minutes</p>
				</div>
			</div>
			<div className="dashboard--mainArea--chat--video--wrap">
				<Video members={members} />
			</div>
			<div className="dashboard--mainArea--chat--text--wrap">
				<Text />
			</div>
		</div>
	)

}

export default Chat