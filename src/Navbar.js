import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

export default function Navbar({logo, links}){
	const [active, setActive] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const OpenMenuButton = _ => <span>&#9776;</span>;
	const CloseMenuButton = _ => <span>&#120299;</span>

	const navItems = links.length > 0
		? (
			links.map( item => (
				<li key={item.title} className={`item col-12 col-md-1 ${menuOpen ? "visible" : null}`}>
					<a 
						href={item.href}
						className={item.title === active ? "active" : null}
						onClick={ (event) => {
							event.preventDefault();
							setActive(item.title)
						} }
					>
						{item.title}
					</a>
				</li>
			))
		) : (
			[]
		);

	return (
		<div className="Navbar" style={{ backgroundColor: menuOpen ? "rgba(0, 0, 0, 1)" : null }}>
			<nav className="container">
				<ul className="row">
					<li key="logo" id="logo"><img src={logo} alt="Site logo" /></li>
					<li key="menuButton" id="menuButton" onClick={ _ => setMenuOpen(!menuOpen) }>
						{ menuOpen ? <CloseMenuButton /> : <OpenMenuButton /> }
					</li>
					{navItems}
				</ul>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	/** The site logo. */
	"logo": PropTypes.node,
	/** Array of objects for links. Objects have keys of "title" and "href". */
	"links": PropTypes.arrayOf(PropTypes.object)
}

Navbar.defaultProps = {
	"logo": <img src="" alt="Blank Site Logo" />,
	"links": []
}