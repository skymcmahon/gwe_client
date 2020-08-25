import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
	return (
		<nav>
			<div className='container'>
				<NavLink className='logo' to='/'>
					<h1>Go-West-Expeditions</h1>
				</NavLink>
				<ul className='nav-list'>
					<li className='nav-item'>
						{/* Don't forget the 'exact' prop for home nav link */}
						<NavLink className='nav-link' exact to='/'>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/'>
							About
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/trips'>
							Trips
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/'>
							Parks
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
