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
													subtitle="Everything - mustard, relish, tomato, onion. Extras - jalapeños, ranch, kraut,
													mushrooms, cheese, bacon, fried egg, or avocado."
													items={menuData.filter(item => item.category === 'hotdog')}
		/>
	},
	{
		name: 'Burgers',
		content: <MenuSection title="Burgers"
													subtitle="Everything - lettuce, tomatoes, onions, mustard, ketchup. Alternative patties - turkey, garden
													(veggie), Beyond (vegan). Extras - jalapeños, ranch, kraut,
													mushrooms, cheese, bacon, fried egg, or avocado."
													items={menuData.filter(item => item.category === 'burger')}
		/>
	},
	{
		name: 'Sandwiches',
		content: <MenuSection title="Sandwiches"
													subtitle="Extras - jalapeños, ranch, kraut,
													mushrooms, cheese, bacon, fried egg, or avocado."
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
