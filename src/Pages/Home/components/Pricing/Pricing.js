import React from 'react'
import { useState } from 'react'

import './Pricing.css'

//icons

//media

//components

const Pricing = (props) => {

	const pricingList = [
		{
			'name' : 'Personal',
			'desc' : 'Best for Personal use',
			'price' : '0',
			'featureList' : ['Unlimited', '60 minutes', '7'],
		},
		{
			'name' : 'Team',
			'desc' : 'Best for small teams',
			'price' : '15',
			'featureList' : ['Unlimited', 'Unlimited', '15'],
		},
		{
			'name' : 'Enterprise',
			'desc' : 'Best for large teams',
			'price' : '100',
			'featureList' : ['Unlimited', 'Unlimited', '50'],
		}
	]

	return (
		<div className="home--pricing--container">
			<div className="home--pricing--heading">
				<h2>
					Our Plans
				</h2>
			</div>
			<div className="home--pricing">
				{pricingList.map((value, index) => {
					return (
						<div className="home--pricing--box">
							<div className="home--pricing--box--heading">
								<h6>{value.name}</h6>
								<p>{value.desc}</p>
							</div>
							<div className="home--pricing--box--info">
								<p>{value.featureList[0]}<span> Meeting</span></p>
								<p>{value.featureList[1]}<span> Time</span></p>
								<p>{value.featureList[2]}<span> Persons</span></p>
							</div>
							<div className="home--pricing--box--button">
								<button>Purchase</button>
							</div>
						</div>
					)
				})}
				
			</div>
		</div>
	)

}

export default Pricing