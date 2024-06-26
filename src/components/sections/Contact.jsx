import React from "react";

import ContactContent from "./ContactContent";
import SectionImage from "./SectionImage";
import illustrationImg from "../../assets/img/illustration.png"

import "../../assets/css/contact.css"

const Contact = () => {
	return (
		<>
			<div className="container col-12 noPad flex flexCenter row">
				<ContactContent />
				<SectionImage img={illustrationImg} altText="patient" />
			</div>
		</>
	);
};

export default Contact;
