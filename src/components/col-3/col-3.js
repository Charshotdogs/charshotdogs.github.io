import React from 'react'
import './col-3.css'

const ColSection3 = props => (
	<div id={props.id} className="col-section-3">
		{
			props.sections.map((item, idx) => (
				<div key={'col' + idx} className='col-3'>
					<div key={'col-title' + idx} className="col-title">
						{item.name}
					</div>
					<div key={'col-body' + idx} className="col-body">
						{item.body}
					</div>
				</div>
			))
		}
	</div>
)

export default ColSection3