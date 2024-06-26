import React from "react";
import AboutContent from "./AboutContent";
import SectionImage from "./SectionImage";

import "../../assets/css/about.css"
import officeImg from "../../assets/img/office.png";

const About = () => {
	return (
		<>
			<div className="container col-12 noPad flex flexCenter row">
				<AboutContent />
				
				<SectionImage
					img={officeImg}
					altText="office"
				/>
                
			</div>
		</>
	);
};

export default About;
