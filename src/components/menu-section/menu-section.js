import React from 'react'
import MenuItem from './menu-item/menu-item'
import './menu-section.css'

const MenuSection = props => {
	return (
	<div className="menu-section">
		<div className="menu-section-header">
			<div className="menu-section-title-subtitle">
				<div className="menu-section-subtitle">{props.subtitle}</div>
			</div>
		</div>
		<div className="menu-section-body">{props.items.map((item, idx) =>
			<MenuItem key={'item' + idx} name={item.name} price={item.price} desc={item.desc}/>)}
		</div>
	</div>
)}

export default MenuSection