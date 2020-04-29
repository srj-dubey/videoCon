import React from 'react'
import { useState } from 'react'

import './SideBar.css'

//icons

//media

//components
import Profile from './components/Profile/Profle.js'
import Group from './components/Group/Group.js'
import Contact from './components/Contact/Contact.js'

const SideBar = (props) => {

	return (
		<div className="dashboard--sideBar--container">
			<div className="dashboard--sideBar--profile--wrap">
				<Profile />
			</div>
			<div className="dashboard--sideBar--group--wrap">
				<Group />
			</div>
			<div className="dashboard--sideBar--contact--wrap">
				<Contact />
			</div>
		</div>
	)

}

export default SideBar