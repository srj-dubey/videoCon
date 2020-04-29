import React from 'react'
import { useState } from 'react'

import './Banner.css'

//icons

//media
import img1 from '../../../../assets/img1.jpg'

//components

const Banner = (props) => {

	return (
		<div className="home--banner--container">
			<div className="home--banner--heading--container">
				<div className="home--banner--heading">
					<h1>Happier, more productive video meetings</h1>
				</div>
				<div className="home--banner--subHeading">
					<h2>Talk. Chat. Innovate.</h2>
				</div>
				<div className="home--banner--heroAction">
					<button className="home--banner--heroAction--button--primary">
						Sign in
					</button>
					<button className="home--banner--heroAction--button--secondary">
						or Sign up
					</button>
				</div>
			</div>
			<div className="home--banner--image--container">
				<div className="home--banner--image">
					<img src={img1} alt="Video Conf" />
				</div>
			</div>
		</div>
	)

}

export default Banner