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
						We're a team of passionate marketing experts eager to
						help you achieve your business goals. Whether you're
						looking for a complete marketing overhaul or need
						assistance with specific campaigns, we're here to guide
						you every step of the way. Drop us a line and let's
						spark a conversation.{" "}
					</p>

					<button className="btn rounded">Get In Touch</button>
				</div>
			</div>
		</>
	);
};

export default ContactContent;
