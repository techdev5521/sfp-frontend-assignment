import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

export default function Navbar({logo, links}){
	const [active, setActive] = useState(null);


	const navItems = links.length > 0
		? (
			links.map( item => (
				<li key={item.title}>
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
		<div className="Navbar">
			<nav className="container">
				<ul className="row">
					<li key="logo"><img src={logo} alt="Site logo" /></li>
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