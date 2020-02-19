import React from 'react'
import './announcements.css'
import data from '../../../data/announcements.json'

const Announcements = () => (
	<ul id="announcements">
			{
				data.map(item => (
					<li className="announcement-item">{item.content}</li>
				))
			}
	</ul>
)

export default Announcements