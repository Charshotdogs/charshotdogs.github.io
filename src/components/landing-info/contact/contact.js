import React from 'react'
import SocialLinks from '../../social-links/social-links'
import './contact.css'

const Links = [
	{
		name: 'instagram',
		link: 'https://www.instagram.com/hotdogsfromchars/'
	},
	{
		name: 'yelp',
		link: 'https://www.yelp.com/biz/chars-hot-dogs-benicia-4?osq=chars+hotdogs'
	}
]

const Contact = props => (
	<div className="contact-section">
		131 First Street, Benicia CA
		<br/>
		<br/>
		<a rel="noopener noreferrer" href="https://www.google.com/maps/place/Char's+Hot+Dogs/@38.046162,-122.161675,15z/data=!4m5!3m4!1s0x0:0x149549adb869eb1e!8m2!3d38.0461618!4d-122.1616748?hl=en" target="_blank">View map</a>
		<br/>
		<br/>
		707 745 4476
		<br/>
		<br/>
		<a rel="noopener noreferrer" target="_blank" href="https://order.spoton.com/so-chars-hot-dogs-18460/benicia-ca/65fca40b0fb631003f7fc6de">Order online</a>
		<br/>
		<br/>
		<SocialLinks items={Links}/>
	</div>
)

export default Contact
