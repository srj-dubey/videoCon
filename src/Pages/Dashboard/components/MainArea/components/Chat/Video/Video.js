import React from 'react'
import { useState } from 'react'

import './Video.css'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

//media

//components

const Video = (props) => {

	return (
		<div className="dashboard--mainArea--chat--video--container">
			<div className="dashboard--mainArea--chat--video">
				{props.members.map((value, index) => {
					return (
						<div className="dashboard--mainArea--chat--video--box" key={index}>
							<img src={value.image} alt={value.name} />
							<div className="dashboard--mainArea--chat--video--box--name">
								<p>{value.name}</p>
								<FontAwesomeIcon
									icon={faMicrophone}
									className="dashboard--mainArea--chat--video--box--icon"
								/>
							</div>
						</div>
					)
				})}
			</div>
			<div className="dashboard--mainArea--chat--video--action">

			</div>
		</div>
	)

}

export default Video