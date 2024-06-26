import React, { useEffect, useState } from "react";
import "../../assets/css/header.css";
import headerLogo from "../../assets/icons/CoLab-logo.svg"

const Header = () => {
	const [headerBg, setHeaderBg] = useState("transparent");

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setHeaderBg("white");
		} else {
			setHeaderBg("transparent");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header id="header" className={`headerBg ${headerBg}`}>
				<div className="header-c">
					<div className="logo">
						<a href="">
							<img src={headerLogo} alt="" />
						</a>
					</div>

					<div className="menu flex flexCenter">
						<nav>
							<a href="#hero-header"> Home </a>
							<a href="#services"> Services </a>
							<a href="#discover"> Discover </a>
							<a href="#about"> About </a>
							<a href="#pricing"> Prices </a>
							<a href="#contact"> Contact </a>
						</nav>
					</div>

					<div className="actionBtns flex flexCenter">
						<span className="btn rounded plainBtn"> Sign Up </span>
						<span className="btn rounded"> Log in </span>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
