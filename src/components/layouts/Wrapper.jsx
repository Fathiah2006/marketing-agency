import React from "react";
import Section from "./Section";
import HeroHeader from "../sections/HeroHeader";
import Services from "../sections/Services";
import Discover from "../sections/Discover";
import About from "../sections/About";
import Reviews from "../sections/Reviews";
import Goal from "../sections/Goal";

import "../../assets/css/hero.css"

const Wrapper = () => {
    const heroSection = <HeroHeader key="1"/>;
    const serviceSection = <Services key="1" />;
	const discoverSection = <Discover key="1" />;
    const aboutSection = <About key="1" />
    const reviewsSection = <Reviews key="1" />;
    const goalSection = <Goal key="1" />;

    
	return (
		<>
			<section id="wrapper" className="wrapper col-12">
				<Section
					id="hero-header"
					classes="hero flex"
					components={[heroSection]}
				/>

				<Section
					id="services"
					classes="services flex"
					components={[serviceSection]}
				/>

				<Section
					id="discover"
					classes="discover flex"
					components={[discoverSection]}
				/>

				<Section
					id="about"
					classes="about flex"
					components={[aboutSection]}
				/>

				<Section
					id="reviews"
					classes="reviews flex"
					components={[reviewsSection]}
				/>

			</section>
		</>
	);
};

export default Wrapper;
