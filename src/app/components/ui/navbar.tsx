import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='menu blue'>
			<div className='nav-wrapper'>
				<div className='container'>
					<ul id='nav-mobile' className='menu__list left'>
						<li className='menu__item'>
							<NavLink className='menu__link' to='/'>
								Все котики
							</NavLink>
						</li>
						<li className='menu__item'>
							<NavLink className='menu__link' to='/favorites'>
								Любимые котики
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
