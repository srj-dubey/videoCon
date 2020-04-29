import React from 'react'
import { useState } from 'react'

import './Header.css'

//media
import MediaQuery from "react-responsive"

//components
import Desktop from './Desktop/Desktop.js'
import Mobile from './Mobile/Mobile.js'
import Signin from '../Modal/Signin/Signin.js'
import Signup from '../Modal/Signup/Signup.js'

const Header = () => {

	// fake logic
	let loggedIn = localStorage.loggedIn ? localStorage.getItem('loggedIn') : false

	const [ newModal, setNewModal] = useState(false)
	const [ modal, setModal] = useState(false)

	if(newModal) {
		return <Signup setNewModal={setNewModal} />
	}

	if(modal) {
		return <Signin setModal={setModal} />
	}

    return (
		<div className="main--header">
			<MediaQuery query='(min-width: 1024px)' >
				<Desktop 
					loggedIn={loggedIn} 
					setModal = {setModal}
					setNewModal = {setNewModal}
				/>
			</MediaQuery>
			<MediaQuery query='(max-width: 1023px)' >
				<Mobile loggedIn={false} />
			</MediaQuery>
		</div>
    )

}

export default Header