import React from 'react'
import { useState } from 'react'

import './Profile.css'

//icons

//media
import img1 from '../../../../../../assets/head.png'

//components

const Profile = (props) => {

	return (
		<div className="dashboard--sideBar--profile--container">
			<div className="dashboard--sideBar--profile--image">
				<img src={img1} alt="Suraj" />
			</div>
			<div className="dashboard--sideBar--profile--heading">
				<h6>
					Suraj Dubey
				</h6>
			</div>
		</div>
	)

}

export default Profile