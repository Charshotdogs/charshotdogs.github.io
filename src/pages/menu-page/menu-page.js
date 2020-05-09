import React from 'react'
import menuData from '../../data/menu.json'
import './menu-page.css'
import Section from "../../components/section/section"
import MenuSection from '../../components/menu-section/menu-section'
import SlidingMenu from "../../components/sliding-menu/sliding-menu";

const menuSections = [
	{
		name: 'Hotdogs',
		content: <MenuSection title="Hotdogs"
													subtitle="Everything - mustard, relish, tomato, onion. Extras - jalapeños, ranch, or kraut for 35¢;
													mushrooms or cheese for 50¢; bacon or fried egg for $1.00; avocado for $1.25."
													items={menuData.filter(item => item.category === 'hotdog')}
		/>
	},
	{
		name: 'Burgers',
		content: <MenuSection title="Burgers"
													subtitle="Everything - lettuce, tomatoes, onions, mustard, ketchup. Turkey or garden
													(veggie) patties available for 50¢. Beyond patty available for $1.00. Extras - jalapeños,
													ranch, or kraut for 35¢ mushrooms or cheese for 50¢; bacon or fried egg for $1.00; avocado for $1.25."
													items={menuData.filter(item => item.category === 'burger')}
		/>
	},
	{
		name: 'Sandwiches',
		content: <MenuSection title="Sandwiches"
													subtitle="Extras - jalapeños, ranch, or kraut for 35¢; mushrooms or cheese for 50¢; bacon or
													fried egg for $1.00; avocado for $1.25."
													items={menuData.filter(item => item.category === 'sandwich')}
		/>
	},
	{
		name: 'Sides/Drink',
		content: <MenuSection title="Sides"
													subtitle=""
													halfPrice
													items={menuData.filter(item => item.category === 'side')}
		/>
	}
]

const MenuPage = props => {
	return (
	<Section title="Our Menu" id="menu">
		<SlidingMenu items={menuSections}/>
	</Section>
)}

export default MenuPage