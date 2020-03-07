import React from 'react'
import './col-3.css'

const ColSection3 = props => (
	<div id={props.id} className="col-section-3">
		{
			props.sections.map(item => (
				<div className='col-3'>
					<div className="col-title">
						{item.name}
					</div>
					<div className="col-body">
						{item.body}
					</div>
				</div>
			))
		}
	</div>
)

export default ColSection3