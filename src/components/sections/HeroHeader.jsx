import React from "react";
import "../../assets/library/boxicons/css/only.used.boxicons.css"
import adobeLogo from "../../assets/img/adobe-logo.png";
import andreessenLogo from "../../assets/img/Andreessen-logo.png";
import amazonLogo from "../../assets/img/Amazon-logo.png";
import airbnbLogo from "../../assets/img/Airbnb-logo.png";

const HeroHeader = () => {
	return (
		<>
			<div className="hero-body flex">
				<div className="hero-txt flexCenter">
					<p>
						{" "}
						<span> A Trusted Digital Agency </span>{" "}
					</p>
					<h2>We’re A Creative Digital Agency.</h2>

					<p>
						{" "}
						Marketing that gets results: Stop guessing, start
						growing. Let us show you the power of data-driven
						marketing.{" "}
					</p>

					<div className="actionBtns flex">
						<button className="btn rounded"> Get Started </button>
						<button className="btn rounded plainBtn"> How It Works </button>
					</div>
				</div>
			</div>

			<div className="hero-footer">
				<div className="container">
					<div className="brand-logos">
						<img src={adobeLogo} alt="" />
					</div>
					<div className="brand-logos">
						<img src={andreessenLogo} alt="" />
					</div>
					<div className="brand-logos">
						<img src={amazonLogo} alt="" />
					</div>
					<div className="brand-logos">
						<img src={airbnbLogo} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroHeader;
