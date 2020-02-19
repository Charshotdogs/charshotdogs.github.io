import React from 'react'
import './landing-page.css'
import VerticalText from '../../components/vertical-text/vertical-text'
import LandingInfo from '../../components/landing-info/landing-info'
import hotdogImg from '../../img/hotdog.png'

const LandingPage = props => (
		<div id="landing">

			<div id="landing-text">
				<VerticalText text={["Char's", "Hotdogs", <img id="logo" src={hotdogImg}/>]}/>
				<LandingInfo/>
			</div>
			<a id="up-arrow" href="#about">⌃</a>
		</div>
)

export default LandingPage