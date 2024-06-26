import React from "react";
import ReviewCard from "./ReviewCard";

import "../../assets/css/reviews.css";

const Reviews = () => {
	return (
		<>
			<div className="container col-12 noPad flex flexCenter row">
				<div className="sectionInfo flex flexCenter">
					<p>
						{" "}
						<span> Client Testmonials </span>{" "}
					</p>
					<div className="secTitle">
						<h2> What our clients tell about us? </h2>
					</div>
				</div>
			</div>

			<ReviewCard />
		</>
	);
};

export default Reviews;
