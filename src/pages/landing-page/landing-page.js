import React from 'react'
import './landing-page.css'
import VerticalText from '../../components/vertical-text/vertical-text'
import LandingInfo from '../../components/landing-info/landing-info'

const LandingPage = props => (
		<div id="landing">
			<div id="landing-img-container">
				<div id="landing-img-overlay">Char's Hotdogs</div>
			</div>
			<LandingInfo/>
		</div>
)

export default LandingPage