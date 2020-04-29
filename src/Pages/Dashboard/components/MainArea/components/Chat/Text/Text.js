import React from 'react'
import { useState } from 'react'

import './Text.css'

//icons

//media

//components
import img1 from '../../../../../../../assets/girl.png'
import img2 from '../../../../../../../assets/man.png'

const Text = (props) => {

	const chatList = [
		{'name': 'Emma Watson', 'message': 'The design is lit', 'image': img1 },
		{'name': 'Cp. Holt', 'message': "Damm. It's good", 'image': img2 },
		{'name': 'Emma Watson', 'message': 'It is here. Finally.', 'image': img1 },
		{'name': 'Cp. Holt', 'message': 'Good god! We all have been waiting', 'image': img2 },
	] 

	return (
		<div className="dashboard--mainArea--chat--text--container">
			<div className="dashboard--mainArea--chat--text">
				{chatList.map((value, index) => {
					return (
						<div className="dashboard--mainArea--chat--text--box" key={index}>
							<div className="dashboard--mainArea--chat--text--box--head">
								<img src={value.image} alt={value.name} />
							</div>
							<div className="dashboard--mainArea--chat--text--box--body">
								<h6>{value.name}</h6>
								<p>{value.message}</p>
							</div>
						</div>
					)
				})}
			</div>
			<div className="dashboard--mainArea--chat--text--input">
				<input type="text" placeholder="Enter message here" />
				<button>
					Send
				</button>
			</div>
		</div>
	)

}

export default Text