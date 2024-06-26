import React from "react";

import coLabLogoBlack from "../../assets/icons/CoLab-logo-black.svg";
import mapImg from "../../assets/img/map.png";

const Footer = () => {
	return (
		<>
			<footer id="footer" className="footer">
				<div className="container col-12">
					<div className="footer-columns">
						<div className="column">
							<div className="footer-logo">
								<img src={coLabLogoBlack} alt="CoLab Logo" />
							</div>
							<p>
								At CoLab, we are a passionate marketing agency
								dedicated to helping businesses achieve their
								full potential. We believe that strong marketing
								is more than just creating content and running
								campaigns. It's about understanding your brand,
								your audience, and your unique goals.
							</p>

							<div className="social-icons">
								<i className="bx bxl-facebook-circle"></i>
								<i className="bx bxl-instagram-alt"></i>
								<i className="bx bxl-x-twitter"></i>
							</div>
						</div>
						<div className="column">
							<h4>Links</h4>

							<ul>
								<li> About </li>
								<li> services </li>
								<li> blog </li>
								<li> Our Mission </li>
								<li> Contacts </li>
							</ul>
						</div>
						<div className="column">
							<h4>Our Office</h4>

							<p>
								We take a collaborative approach, working
								closely with you to develop a customized
								marketing strategy that drives real results.
								Whether you're looking to increase brand
								awareness, generate leads, or boost sales, we're
								here to help you reach your target audience and
								achieve lasting success.
							</p>
						</div>
					</div>
					<div className="footer-bottom">
						<p> © 2022 All Right Reserved </p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
