// NavBar.js
import React from "react";
import "./Navbar.css"; // Importing the CSS file

const NavBar = () => {
	window.addEventListener("scroll", () => {
		const navbar = document.querySelector(".navbar");
		if (window.scrollY > 50) {
			navbar.classList.add("scrolled");
		} else {
			navbar.classList.remove("scrolled");
		}
	});

	return (
		<nav className="navbar">
			<div className="navbar-brand">AC Infinity</div>
			<ul className="nav-links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/products">Products</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
