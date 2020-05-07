import React from 'react'
import './sliding-menu.css'

export default class SlidingMenu extends React.Component {
	constructor(props) {
		super(props)

		this.itemWidth = 100 / this.props.items.length
		this.state = {
			curr: 0,
			width: window.innerWidth
		}

		this._handleClick = this._handleClick.bind(this)
		this._mobileView = this._mobileView.bind(this)
		this._updateWidth = this._updateWidth.bind(this)
	}

	_handleClick(e) {
		console.log(e.target.id)
		this.setState({
			curr: Number(e.target.id)
		})
	}

	componentDidMount() {
		window.addEventListener('resize', this._updateWidth)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._updateWidth)
	}

	_updateWidth() {
		this.setState({width: window.innerWidth})
	}

	render() {
		if (this.state.width * .6 <= 14 * this.props.items.reduce((prev, curr) => prev + curr.name.length, 0))
			return this._mobileView()

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
							<div key={linkItem.name} id={String(i)} onClick={this._handleClick} style={{'width': this.itemWidth + '%'}} className="menu-link" >
								{linkItem.name}
							</div>
						)}
						<div className="menu-selected" style={activeStyle}></div>
						<div className="menu-bar"></div>
					</div>

				</div>

				<div className="menu-content">
					{ this.props.items[this.state.curr].content }
				</div>
			</div>
		)
	}

	_mobileView() {
		return (
			<div className="unrolled-menu">
				{this.props.items.map(item => (
					<div key={item.name} className="unrolled-item">
						<div className="menu-link unrolled-title">{item.name}</div>
						{ item.content }
					</div>
				))}
			</div>
		)
	}
}