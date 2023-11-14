import React, { useEffect } from "react";
import "./Navbar.css";

const NavBar = () => {
	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector(".navbar");
			if (window.scrollY > 50) {
				navbar.classList.add("scrolled");
			} else {
				navbar.classList.remove("scrolled");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-brand">AC Infinity</div>
			<ul className="nav-links">
				<li>
					<a href="/">Home</a>
				</li>
				<li className="expandable">
					<a href="/">Products</a>
					<div className="hidden-links">
						<a href="/purchase/waterSprayer">Water Sprayer</a>
						<a href="/purchase/meterKit">Meter Kit</a>
						<a href="/purchase/carbonFilter">Carbon Filter Kit</a>
					</div>
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
