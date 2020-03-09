import React from 'react'
import igIMG from '../../img/ig_icon.png'
import './social-links.css'

const imageDict = {
	instagram: igIMG
}

const SocialLinks = props => (
	<div className="links-bar">
		{
			props.items.map(item => (
				<a href={item.link} className="link"><img src={imageDict[String(item.name)]}/></a>
			))
		}
	</div>
)

export default SocialLinks