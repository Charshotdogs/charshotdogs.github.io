import React from 'react'
import './menu-item.css'

const MenuItem = props => (
	<div className="menu-item">
		<div className="name-desc">
			<div className="item-name">{props.name}</div>
			<div className="item-desc">{props.desc}</div>
		</div>
		<div className="menu-spacer"></div>
		<div className="item-price">{props.price}</div>
	</div>
)

export default MenuItem