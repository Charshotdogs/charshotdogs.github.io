import React from 'react'
import './sliding-menu.css'

export default class SlidingMenu extends React.Component {
	constructor(props) {
		super(props)

		this.itemWidth = 100 / this.props.items.length
		this.state = {
			curr: 0,
		}

		this._handleClick = this._handleClick.bind(this)
	}

	_handleClick(e) {
		console.log(e.target.id)
		this.setState({
			curr: Number(e.target.id)
		})
	}

	render() {
		let linksStyle = {}
		if (this.props.items.length < 7) {
			let minWidth = this.props.items.reduce((a, b) => (a + b.name.length), 0) + 'em'

			linksStyle = {
				width: this.props.items.length * 15 + '%',
				minWidth: minWidth
			}
		}

		let activeStyle = {
				'width': this.itemWidth + '%',
				'left': this.state.curr * this.itemWidth + '%'
			}

		return (
			<div  className="sliding-menu">
				<div className="menu-header">
					<div className="menu-links" style={linksStyle}>
						{this.props.items.map((linkItem, i) =>
							<div key={linkItem.name} id={String(i)} onClick={this._handleClick} style={{'width': this.itemWidth + '%'}} className="menu-link">
								{linkItem.name}
							</div>
						)}
						<div className="menu-selected" style={activeStyle}></div>
						<div className="menu-bar"></div>
					</div>

				</div>

				<div className="menu-content"> { this.props.items[this.state.curr].content } </div>
			</div>
		)
	}
}