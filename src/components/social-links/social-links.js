import React from 'react'
import igIMG from '../../img/ig_icon_color.png'
import yelpIMG from '../../img/yelp_icon.png'
import './social-links.css'

const imageDict = {
	instagram: igIMG,
	yelp: yelpIMG
}

const SocialLinks = props => (
	<div className="links-bar">
		{
			props.items.map((item, idx) => (
				<a key={'link' + idx} href={item.link} className="link"><img alt={item.name} src={imageDict[String(item.name)]}/></a>
			))
		}
	</div>
)

export default SocialLinks