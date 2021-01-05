import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
	return (
		<div className="header">
			<h3 className="header-title">
			<Link to="/">
					GOT DB
				</Link>
			</h3>
			<ul className="header-list">
				<li>
					<Link to="/characters/">Characters</Link>
				</li>
				<li>
					<Link to="/houses/">Houses</Link>
				</li>
				<li>
					<Link to="/books/">Books</Link>
				</li>
			</ul>
		</div>
	)
}
