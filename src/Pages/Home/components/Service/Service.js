import React from 'react'
import { useState } from  'react'

import './Service.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCommentDots, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons'

//media
import img1 from '../../../../assets/img2.png'

//components

const Service = (props) => {

	return (
		<div className="home--service--container">
			<div className="home--service--heading--container">
				<div className="home--service--heading">
					<h2>
						Work better together, when you’re far apart
					</h2>
				</div>
				<div className="home--service--subHeading">
					<p>
						Colaborate. Innovate. Reciprocate.
					</p>
				</div>
			</div>
			<div className="home--service--image">
				<img src={img1} alt="Video" />
			</div>
		</div>
	)

}

export default Service