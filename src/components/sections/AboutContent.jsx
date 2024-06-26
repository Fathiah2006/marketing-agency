import React from "react";

import gearIcon from "../../assets/icons/gear.svg";
import teamIcon from "../../assets/icons/team.svg";
import supportIcon from "../../assets/icons/support.svg";

const AboutContent = () => {
    const reasons = [
		{ title: "Working Process", description: "Our experienced doctors and nurses provide top-quality care.", icon: `${gearIcon}` },
		{ title: "Dedicated Team", description: "We offer a wide range of medical treatments.", icon: `${teamIcon}` },
		{ title: "24/7 Support", description: "Our clinic features the latest medical technology.", icon: `${supportIcon}` }
	];

	return (
		<>
			<div className="noPad flex flexCenter">
				<div className="sectionInfo flex">
					<p>
						{" "}
						<span> Why You Choose Us? </span>{" "}
					</p>
					<div className="secTitle">
						<h2>
							{" "}
							Specialist in aviding clients on financial
							challenges{" "}
						</h2>
					</div>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit.{" "}
					</p>
					<div className="reasons txtContain flex">
						<ul>
							{reasons.map((reason, index) => (
								<li key={index}>
									<div className="reasonIcon flex flexCenter fitImg">
										<img src={reason.icon} alt="" />
									</div>
									<div className="reasonContent">
										<div className="title">
											{reason.title}
										</div>
										<p> {reason.description} </p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutContent;
