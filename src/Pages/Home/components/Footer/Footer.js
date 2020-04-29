import React from 'react'
import { useState } from 'react'

import './Footer.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

//media
import img1 from '../../../../assets/india.png'

//components

const Footer = (props) => {

	return (
		<div className="home--footer--container">
			<div className="home--footer--menu">
				<ul>
					<li>Our Story</li>
					<li>Contact Us</li>
					<li>Privacy</li>
					<li>Terms</li>
				</ul>
			</div>
			<div className="home--footer--message">
				<h6>
					<span>Made with</span>
					<FontAwesomeIcon
						icon={faHeart}
						className="home--footer--message--icon"
					/>
					<span>in </span>
					<img src={img1} alt="India" />
				</h6>
			</div>
		</div>
	)

}

export default Footer