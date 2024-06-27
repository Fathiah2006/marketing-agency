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
					At Discover & Explore, we believe in the power of growth and discovery.
					Our mission is to provide innovative marketing solutions tailored to your unique needs.
					We understand that every business has its own journey, and we're here to help you navigate it.{" "}
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
