import React from 'react'
import { useState } from 'react'

import './Signup.css'

//routing
import { Link } from 'react-router-dom'

//icons

//media

//components
import OutsideClickHandler from 'react-outside-click-handler'

const Signup = (props) => {

	return (
		<div className="common--signup--wrap">
			<OutsideClickHandler
				onOutsideClick={e => props.setNewModal(false) }
			>
				<div className="common--signup--container">
					<div className="common--signin--heading">
						<h2>Get on board!</h2>
					</div>
					<div className="common--signup--form">
						<div className="common--signin--form--field">
							<label>Name</label>
							<input type="text" placeholder="Enter you name" /> 
						</div>
						<div className="common--signin--form--field">
							<label>Email</label>
							<input type="text" placeholder="Enter you email" /> 
						</div>
						<div className="common--signup--form--field">
							<label>Password</label>
							<input type="password" placeholder="Enter you password" /> 
						</div>
						<div className="common--signup--form--button">
							<Link to='/dashboard'>
								<button onClick={e => {login(); props.setNewModal(false)}}>
									Sign up
								</button>
							</Link>
						</div>
					</div>
				</div>
			</ OutsideClickHandler>
		</div>
	)

}

const login = () => {
	localStorage.setItem('loggedIn', 'true')
}

export default Signup
