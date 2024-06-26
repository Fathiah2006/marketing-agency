import React from "react";

const ContactContent = () => {
	return (
		<>
			<div className="noPad flex flexCenter">
				<div className="sectionInfo flex">
					<p>
						{" "}
						<span> Contact Us </span>{" "}
					</p>
					<div className="secTitle">
						<h2> Ready to get started? </h2>
					</div>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit.{" "}
					</p>

					<button className="btn rounded">Get In Touch</button>
				</div>
			</div>
		</>
	);
};

export default ContactContent;
