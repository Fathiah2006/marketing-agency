import React from "react";

import "../../assets/css/price.css"

const Price = () => {
	return (
		<>
			<div className="sectionInfo flex flexCenter">
				<p>
					{" "}
					<span> Pricing Plan </span>{" "}
				</p>
				<div className="secTitle">
					<h2> Choose Your Plan </h2>
				</div>
				<p>
					{" "}
					Pricing plans designed to deliver exceptional ROI. Get the
					results you deserve without breaking the bank.
				</p>
			</div>

			<div className="flex flexCenter pricing-cards">
				<div className="card pricing-card flex flexCenter">
					<div className="price-box">
						<div className="price">
							$19 <span>/ Month</span>{" "}
						</div>
						<div className="plan">Starter</div>
						<div className="benefits">
							<p> Unleash the power of automation. </p>
							<ul>
								<li>Multi-step Zaps</li>
								<li>3 Premium Apps</li>
								<li>2 Users team</li>
							</ul>
						</div>
						<button className="btn pill"> Choose Plan </button>
					</div>
					<div className="price-box">
						<div className="price">
							$19 <span>/ Month</span>{" "}
						</div>
						<div className="plan">Starter</div>
						<div className="benefits">
							<p>
								{" "}
								Advanced tools to take your work to the next
								level.{" "}
							</p>
							<ul>
								<li>Multi-step Zaps</li>
								<li>Unlimited Premium Apps</li>
								<li>50 Users team</li>
								<li>Shared Workspace</li>
							</ul>
						</div>
						<button className="btn pill"> Choose Plan </button>
					</div>
					<div className="price-box">
						<div className="price">
							$19 <span>/ Month</span>{" "}
						</div>
						<div className="plan">Starter</div>
						<div className="benefits">
							<p> Automation plus enterprise-grade features. </p>
							<ul>
								<li>Multi-step Zaps</li>
								<li>Unlimited Premium Apps</li>
								<li>Unlimited Users Team</li>
								<li>Advanced Admin</li>
								<li>Custom Data Retention</li>
							</ul>
						</div>
						<button className="btn pill"> Choose Plan </button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Price;
