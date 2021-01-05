import React from 'react'
import {NavLink } from 'react-router-dom';
import {Container} from "reactstrap";
import './Header.sass';
export default function Header() {
	return (
		<div className="header">
			<Container>
				<div className="header-wrapper">
					<h3 className="header-title">
					<NavLink className={'header-logo-link'} to="/">
							Game of Thrones Database
						</NavLink >
					</h3>
					<ul className="header-list">
						<li>
							<NavLink className={'header-link'} activeClassName="active-link" to="/characters/">Characters</NavLink >
						</li>
						<li>
							<NavLink className={'header-link'} activeClassName="active-link" to="/houses/">Houses</NavLink >
						</li>
						<li>
							<NavLink className={'header-link'} activeClassName="active-link" to="/books/">Books</NavLink >
						</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}
