import React from "react";

import gearIcon from "../../assets/icons/gear.svg";
import teamIcon from "../../assets/icons/team.svg";
import supportIcon from "../../assets/icons/support.svg";

const AboutContent = () => {
    const reasons = [
		{ title: "Working Process", description: "Our efficient and transparent working process keeps you informed and in control.", icon: `${gearIcon}` },
		{ title: "Dedicated Team", description: "Our dedicated team is invested in your success, going the extra mile to achieve your goals.", icon: `${teamIcon}` },
		{ title: "24/7 Support", description: "We're Here When You Need Us. Enjoy the peace of mind that comes with 24/7 support from our dedicated team.", icon: `${supportIcon}` }
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
						Financial Challenges? We're Your Experts: Let our
						specialists guide you through financial hurdles and
						secure a brighter future. We specialize in navigating
						financial challenges to empower your success.{" "}
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
