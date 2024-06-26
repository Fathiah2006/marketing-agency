import React from "react";
import "../../assets/css/services.css"

import seoIcon from "../../assets/icons/seo.svg"
import marketingIcon from "../../assets/icons/marketing.svg";
import promotionIcon from "../../assets/icons/promotion.svg";

const Services = () => {
	return (
		<>
			<div className="sectionInfo flex flexCenter">
				<p>
					{" "}
					<span> Our Services </span>{" "}
				</p>
				<div className="secTitle">
					<h2> Perfect Solution For Your Business </h2>
				</div>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit.{" "}
				</p>
			</div>

			<div className="grid service-cards">
				<div className="card flex flexCenter">
					<div className="card-icon flex flexCenter">
						<img src={seoIcon} alt="" srcSet="" />
					</div>
					<h3 className="card-title">SEO</h3>
					<p className="card-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="card flex flexCenter">
					<div className="card-icon flex flexCenter">
						<img src={marketingIcon} alt="" srcSet="" />
					</div>
					<h3 className="card-title">Marketing</h3>
					<p className="card-content">
						Our specialists offer expert care for your heart and
						lungs, ensuring a healthy and active life.
					</p>
				</div>
				<div className="card flex flexCenter">
					<div className="card-icon flex flexCenter">
						<img src={promotionIcon} alt="" srcSet="" />
					</div>
					<h3 className="card-title">Promotion</h3>
					<p className="card-content">
						Nourish your body and boost your health with our trusted
						and high-quality supplements.
					</p>
				</div>
			</div>
		</>
	);
};

export default Services;
