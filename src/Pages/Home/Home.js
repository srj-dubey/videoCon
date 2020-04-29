import React from 'react'
import { useState } from 'react'

import "./Home.css"

//routing
import { Redirect } from 'react-router-dom'

//components
import Banner from './components/Banner/Banner.js'
import Feature from './components/Feature/Feature.js'
import Service from './components/Service/Service.js'
import Pricing from './components/Pricing/Pricing.js'
import Footer from './components/Footer/Footer.js'

const Home = (props) => {

	if(localStorage.getItem('loggedIn') === 'true') {
		return (
			<Redirect from='/' to='/dashboard' />
		)
	}

	return (
		<div className="home--container">
			<div className="home--banner--wrap">
				<Banner />
			</div>
			<div className="home--feature--wrap">
				<Feature />
			</div>
			<div className="home--service--wrap">
				<Service />
			</div>
			<div className="home--pricing--wrap">
				<Pricing />
			</div>
			<div className="home--footer--wrap">
				<Footer />
			</div>
		</div>
	)

}

export default Home