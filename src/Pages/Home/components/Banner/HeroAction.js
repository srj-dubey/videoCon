import React from 'react'
import { useState } from 'react'

import './HeroAction.css'

//icons

//media

const HeroAction = (props) => {

	return (
		<div className="home--banner--heroAction--container">
			<div className="home--banner--heroAction--heading">

			</div>
			<div className="home--banner--heroAction">
				<input 
					type="text" 
					name="email" 
					placeholder="Enter email here!" 
				/>
				<button className="home--banner--heroAction--button--primary">
					Get started for free
				</button>
				<div className="home--banner--heroAction--breaker">
					<span>or</span>
				</div>
				<button className="home--banner--heroAction--button--secondary">
					Sign up with Google
				</button>
			</div>
		</div>
	)

}

export default HeroAction