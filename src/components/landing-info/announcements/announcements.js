import React from 'react'
import './announcements.css'
import data from '../../../data/announcements.json'

const Announcements = () => (
	<ul id="announcements">
			{
				data.map((item, idx) => (
					<li key={'announcement' + idx} className="announcement-item">{item.content}</li>
				))
			}
	</ul>
)

export default Announcements