import React from 'react'
import './landing-page.css'
import ColSection3 from '../../components/col-3/col-3'
import Announcements from '../../components/landing-info/announcements/announcements'
import Hours from '../../components/landing-info/hours/hours'

const ColSections = [
	{
		name: 'WHAT\'S NEW',
		body: <Announcements/>
	},
	{
		name: 'HOURS',
		body: <Hours/>
	},
	{
		name: "CONTACT",
		body: <div></div>
	}
]

const LandingPage = props => (
		<div id="landing">
			<div id="landing-img-container">
				<div id="landing-img-overlay">Char's Hotdogs</div>
			</div>
			<ColSection3 id="landing-info" sections={ColSections}/>
		</div>
)

export default LandingPage