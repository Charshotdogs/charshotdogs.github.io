import React from 'react'
import './hours.css'

const Hours = props => (
	<div className="hours">
		<div className="open">{props.open}</div>
		<div>&nbsp;-&nbsp;</div>
		<div className="close">{props.close}</div>
	</div>
)

export default Hours