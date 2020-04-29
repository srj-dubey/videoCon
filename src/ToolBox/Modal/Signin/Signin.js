import React from 'react'
import { useState } from 'react'

import './Signin.css'

//routing
import { Link } from 'react-router-dom'

//icons

//media

//components
import OutsideClickHandler from 'react-outside-click-handler'

const Signin = (props) => {

	return (
		<div className="common--signin--wrap">
			<OutsideClickHandler
				onOutsideClick={e => props.setModal(false) }
			>
				<div className="common--signin--container">
					<div className="common--signin--heading">
						<h2>Welcome Back!</h2>
					</div>
					<div className="common--signin--form">
						<div className="common--signin--form--field">
							<label>Email</label>
							<input type="text" placeholder="Enter you email" /> 
						</div>
						<div className="common--signin--form--field">
							<label>Password</label>
							<input type="password" placeholder="Enter you password" /> 
						</div>
						<div className="common--signin--form--button">
							<Link to='/dashboard'>
								<button onClick={e => {login(); props.setModal(false)}}>
									Sign in
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

export default Signin
