import React from 'react'
import menuData from '../../data/menu.json'
import './menu-page.css'
import Section from "../../components/section/section"
import MenuSection from '../../components/menu-section/menu-section'
import SlidingMenu from "../../components/sliding-menu/sliding-menu";

const menuSections = [
	{
		name: 'Burgers',
		content: <MenuSection title="Burgers" subtitle="Everything on it - Lettuce, Tomatoes, Onions, Mustard, Ketchup." halfPrice items={menuData}/>
	},
	{
		name: 'Hotdogs',
		content: <MenuSection title="Burgers" subtitle="Everything on it - Lettuce, Tomatoes, Onions, Mustard, Ketchup." halfPrice items={menuData}/>
	},
		{
		name: 'Drinks/Sides',
		content: <MenuSection title="Burgers" subtitle="Everything on it - Lettuce, Tomatoes, Onions, Mustard, Ketchup." halfPrice items={menuData}/>
	}
]

const MenuPage = props => {
	return (
	<Section title="Our Menu" id="menu">
		<SlidingMenu items={menuSections}/>
	</Section>
)}

export default MenuPage