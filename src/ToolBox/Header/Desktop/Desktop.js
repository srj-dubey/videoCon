import React from 'react'
import { useState } from 'react'

import './Desktop.css'

//routing
import { Link } from 'react-router-dom'

//icons

//media

//components

const Desktop = (props) => {

	return (
		<div className="common--header--desktop--container">
			<div className="common--header--desktop--logo--container">
				<div className="common--header--desktop--logo">
					<h1>Video</h1>
				</div>
			</div>
			<div className="common--header--desktop--nav">
				<nav>
					<ul>
						{!props.loggedIn ? (
							<li className="common--header--desktop--nav--button--secondary">
								<button
									onClick={e => props.setNewModal(true)}
								>
									Sign Up
								</button>
							</li>
						) : (
							<li className="common--header--desktop--nav--button--secondary">
								<Link to='/'>
									<button
										onClick={e => {localStorage.clear()}}
									>
										Logout
									</button>
								</Link>
							</li>
						)}
						<li className="common--header--desktop--nav--button--primary">
							{!props.loggedIn ? (
								<button
									onClick={e => props.setModal(true)}
								>
									Sign In
								</button>
							) : (
								<button
									onClick={e => console.log('New Call')}
								>
									Call
								</button>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)

}

export default Desktop