import React from 'react'
import MenuItem from './menu-item/menu-item'
import './menu-section.css'

const MenuSection = props => {
	const colLength = 5
	let row1
	let row2 = ''
	if (props.items.length >= colLength) {
		let colStyle = {
			width: '50%',
			margin: '1%'
		}

		row1 = <div className="menu-col" style={colStyle}> {props.items.slice(0, colLength).map(item =>
			<MenuItem name={item.name} price={item.price} desc={item.desc}/>)}</div>

		row2 = <div className="menu-col" style={colStyle}> {props.items.slice(colLength, props.items.length).map(item =>
			<MenuItem name={item.name} price={item.price} desc={item.desc}/>)}</div>
	}
	else {
		row2 = ''
	}

	return (
	<div className="menu-section">
		<div className="menu-section-header">
			<div className="menu-section-title-subtitle">
				<div className="menu-section-subtitle">{props.subtitle}</div>
			</div>
		</div>
		<div className="menu-section-body">{props.items.map(item =>
			<MenuItem name={item.name} price={item.price} desc={item.desc}/>)}
		</div>
	</div>
)}

export default MenuSection