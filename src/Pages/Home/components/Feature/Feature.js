import React from 'react'
import { useState } from  'react'

import './Feature.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCommentDots, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons'

//media

//components

const Feature = (props) => {

	const featureList = [
		{ 'content' : 'Set timed agendas', 'icon' : faClock},
		{ 'content' : 'Give non verbal responses', 'icon' : faCommentDots },
		{ 'content' : 'Take collaborative notes', 'icon' : faStickyNote},
		{ 'content' : 'See what your team is up to', 'icon' : faUsers},
	]

	return (
		<div className="home--feature--container">
			<div className="home--feature--heading--container">
				<div className="home--feature--heading">
					<h2>
						Whats
						<span>
							NEW
						</span>
					</h2>
				</div>
			</div>
			<div className="home--feature">
				{featureList.map((value, index) => {
					return (
						<div className="home--feature--box" key={index}>
							<FontAwesomeIcon
								icon={value.icon}
								className="home--feature--box--icon"
							/>
							<p>
								{value.content}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)

}

export default Feature