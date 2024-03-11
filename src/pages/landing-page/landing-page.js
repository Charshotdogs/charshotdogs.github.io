import React from 'react'
import './landing-page.css'
import ColSection3 from '../../components/col-3/col-3'
import Announcements from '../../components/landing-info/announcements/announcements'
import Hours from '../../components/landing-info/hours/hours'
import Contact from '../../components/landing-info/contact/contact'
import announcementsList from '../../data/announcements.json'


const ColSections = announcementsList.length ? [
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
		body: <Contact/>
	}
] : [
	{
		name: 'HOURS',
		body: <Hours/>
	},
	{
		name: "CONTACT",
		body: <Contact/>
	}	
];

const LandingPage = props => (
		<div id="landing">
			<div id="landing-img-container">
				<div id="landing-img-overlay">Char's Hotdogs</div>
			</div>
			<div id="landing-body">
				<ColSection3 id="landing-info" sections={ColSections}/>
			</div>
		</div>
)

export default LandingPage
