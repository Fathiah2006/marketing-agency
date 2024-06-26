import React from "react";
import avatarIcon from "../../assets/img/jane.png";

const ReviewCard = () => {
	return (
		<>
			<div className="noPad">
				<div className="reviewWrapper flex flexCenter">
					<div className="card reviewCard">
						<div className="cardHead flexSB">
							<div className="user flexSB">
								<div className="userImg fitImg">
									<img src={avatarIcon} alt="avatar" />
								</div>
								<div className="userName">
									<p>Jane Cooper</p>
									<span>12/4/17</span>
								</div>
							</div>
							<div className="rating">
								<i className="bx bxs-star checked"></i>
								<i className="bx bxs-star checked"></i>
								<i className="bx bxs-star checked"></i>
								<i className="bx bxs-star checked"></i>
								<i className="bx bxs-star checked"></i>
							</div>
						</div>

						<div className="cardBody">
							<p> Amazing Service </p> <br />
							<p>
								{" "}
								Before CoLab, financial planning
								was a scary mystery. Debt kept me up at night.
								Then I met Mathew, my specialist. They
								listened, explained everything clearly, and
								built a personalized plan that actually worked!
								Now, my finances are under control, and I
								finally see a path to my goals. Huge thanks to
								the CoLab team for their expertise
								and support. You're lifesavers!!{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;
