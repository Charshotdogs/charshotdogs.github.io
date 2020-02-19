import React from 'react'
import Announcements from './announcements/announcements'
import Hours from '../hours/hours'
import Title from '../title/title'
import './landing-info.css'
import hoursData from '../../data/hours.json'

const LandingInfo = props => {
	let today = (new Date()).getDay()
	let open = hoursData[today].open
	let close = hoursData[today].close
	return (
		<div id="landing-info">
			<Title>Announcements</Title>
			<Announcements/>
			<div id="todays-hours">
				<Title>Today's Hours</Title>
				<Hours open={open} close={close}/>
			</div>
		</div>
)}

export default LandingInfo