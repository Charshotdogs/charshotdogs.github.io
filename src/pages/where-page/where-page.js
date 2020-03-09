import React from 'react'
import Section from '../../components/section/section'
import MapFrame from '../../components/map-frame/map-frame'
import './where-page.css'

const WherePage = props => (
	<Section title="Visit Us" id="where">
		<MapFrame id="map" embedURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.039679172724!2d-122.16386348450817!3d38.04616177971
		091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153326668aff3591%3A0x149549adb869eb1e!2sChar&#39;s%20Hot%20
		Dogs!5e0!3m2!1sen!2sus!4v1583739980669!5m2!1sen!2sus" />
		<div id="map-body">
			We are located at the old tannery building in Benicia.
			<br/>
			<br/>
			<a href="https://www.google.com/maps/place/Char's+Hot+Dogs/@38.046162,-122.161675,15z/data=!4m5!3m4!1s0x0:0x149549adb869eb1e!8m2!3d38.0461618!4d-122.1616748?hl=en" target="_blank">131 First Street, Benicia CA</a>
			<br/>
			<br/>
			We can't wait to see you!
		</div>
	</Section>
)

export default WherePage