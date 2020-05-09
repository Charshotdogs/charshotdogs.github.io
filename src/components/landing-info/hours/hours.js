import React from 'react'
import './hours.css'
import hoursData from '../../../data/hours.json'

const Hours = props =>  (
	hoursData.map((item, idx) => (
		<div key={'hour' + idx} className="hour">
			<div className="day">{item.day}:&nbsp;</div>
			{ item.closed ? <div>Closed</div> :
				<div>
					<div className="open">{item.open}</div>
					<div>&nbsp;-&nbsp;</div>
					<div className="close">{item.close}</div>
				</div>
			}
		</div>
	))
)

export default Hours