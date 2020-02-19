import React from 'react'
import './vertical-text.css'

const VerticalText = props => (
	<div className="vertical-text">
		{props.text.map(word => (
			<div>{word}</div>
		))}
	</div>
)

export default VerticalText