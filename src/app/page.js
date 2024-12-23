"use client";

import Banner from "@/components/Banners/Banner";
import WhyUs from "@/components/Banners/WhyUs";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 600,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);
	return (
		<div>
			<Hero />
			<Banner />
			<Services />
			<WhyUs />
			<Projects />
			<Contact />
		</div>
	);
};

export default page;
