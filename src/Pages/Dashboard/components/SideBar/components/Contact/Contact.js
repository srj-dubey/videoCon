import React from 'react'
import { useState } from 'react'

import './Contact.css'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

//media
import img1 from '../../../../../../assets/ballet.png'
import img2 from '../../../../../../assets/girl.png'
import img3 from '../../../../../../assets/man.png'
import img4 from '../../../../../../assets/woman.png'
import img5 from '../../../../../../assets/head.png'

//components

const Contact = (props) => {

	const conatctList = [
		{'name' : 'Edward Snowden', 'icon' : img3, 'time' : '6 minutes'},
		{'name' : 'Emma Watson', 'icon' : img2, 'time' : '2 hours'},
		{'name' : 'Harry Potter', 'icon' : img4, 'time' : '6 hours'},
		{'name' : 'Cp. Holt', 'icon' : img1,'time' : '3 days'},
	]

	return (
		<div className="dashboard--sideBar--contact--container">
			<div className="dashboard--sideBar--contact--heading">
				<h2>Contact</h2>
			</div>
			<div className="dashboard--sideBar--conatct">
				{conatctList.map((value, index) => {
					return (
						<div className="dashboard--sideBar--conatct--box" key={index}>
							<div className="dashboard--sideBar--conatct--box--head">
								<div className="dashboard--sideBar--conatct--box--head--image">
									<img src={value.icon} alt={value.name} />
								</div>
							</div>
							<div className="dashboard--sideBar--conatct--box--body">
								<div className="dashboard--sideBar--conatct--box--body--name">
									<p>{value.name}</p>
								</div>
								<div className="dashboard--sideBar--conatct--box--body--time">
									<FontAwesomeIcon
										icon={faHistory}
										className="dashboard--sideBar--conatct--box--body--icon"
									/>
									<p>{value.time} ago</p>
								</div>
							</div>
						</div>
					)
				})}				
			</div>
		</div>
	)

}

export default Contact