import React from 'react'
import { useState } from 'react'

import './Group.css'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

//media

//components

const Group = (props) => {

	const groupList = [
		{'name' : 'Designer Team', 'length' : 6},
		{'name' : 'Testing Squad', 'length' : 4},
		{'name' : 'Management Team', 'length' : 22},
		{'name' : 'New Project', 'length' : 2},
	]

	return (
		<div className="dashboard--sideBar--group--container">
			<div className="dashboard--sideBar--group--heading">
				<h2>Group</h2>
			</div>
			<div className="dashboard--sideBar--group">
				{groupList.map((value, index) => {
					return (
						<div className="dashboard--sideBar--group--box" key={index}>
							<div className="dashboard--sideBar--group--box--name">
								<p>{value.name}</p>
							</div>
							<div className="dashboard--sideBar--group--box--icon--container">
								<div className="dashboard--sideBar--group--box--length">
									<p>{value.length}</p>
								</div>
								<FontAwesomeIcon
									icon={faUsers}
									className="dashboard--sideBar--group--box--icon"
								/>
							</div>
							
						</div>
					)
				})}				
			</div>
		</div>
	)

}

export default Group