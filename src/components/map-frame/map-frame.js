import React from 'react'
import './map-frame.css'

const MapFrame = props => (
	<iframe className="map-frame" id={props.id} src={props.embedURL}></iframe>
)

export default MapFrame