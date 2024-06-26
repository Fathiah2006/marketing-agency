import React from "react";
import "../../assets/css/discover.css";

import graphImg from "../../assets/img/graph.png";

const Discover = () => {
	return (
		<>
			<div className="sectionInfo flex flexCenter">
				<p>
					{" "}
					<span> Discover & Explore </span>{" "}
				</p>
				<div className="secTitle">
					<h2> We Work to Help You Grow </h2>
				</div>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit.{" "}
				</p>
			</div>

			<div className="flex flexCenter discover-cards">
				<div className="card flex flexCenter">
					<div className="card-img fitImg">
						<img src={graphImg} alt="" srcSet="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Discover;
