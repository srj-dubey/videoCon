import React from 'react'
import { useState } from 'react'

import './Dashboard.css'

//routing
import { Redirect } from 'react-router-dom'

//components
import SideBar from './components/SideBar/SideBar.js'
import MainArea from './components/MainArea/MainArea.js'

const Dashboard = (props) => {

	if(localStorage.getItem('loggedIn') != 'true') {
		return (
			<Redirect to='/' from='/dashboard' />
		)
	}
	
	return (
		<div className="dashboard--container">
			<div className="dashboard--sideBar--wrap">
				<SideBar />
			</div>
			<div className="dashboard--mainArea--wrap">
				<MainArea />
			</div>
		</div>
	)

}

export default Dashboard