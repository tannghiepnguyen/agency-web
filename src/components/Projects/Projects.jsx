import img3 from "../../assets/ecomm.jpg";
import img1 from "../../assets/webDesign.jpg";
import img2 from "../../assets/webDev.jpg";
import DevCard from "./DevCard";
import WebCard from "./WebCard";

const Projects = () => {
	return (
		<div className="min-h-screen container flex flex-col items-center justify-center mt-16 mb-8">
			<h1
				data-aos="fade-up"
				className="text-4xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
			>
				See Our Projects
			</h1>
			<p data-aos="fade-up" className="text-sm lg:text-base w-full lg:w-3/4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt soluta
				consectetur possimus temporibus in blanditiis unde ducimus voluptate,
				aliquid deserunt!
			</p>
			<div className="py-14">
				<WebCard
					project="Web Design"
					img={img1}
					title="Web design project title goes here"
				/>
				<DevCard
					project="Development"
					img={img2}
					title="Development project title goes here"
				/>
				<WebCard
					project="Ecommerce"
					img={img3}
					title="Ecommerce project title goes here"
				/>
			</div>
			<button className="bg-primary px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer">
				See All Projects
			</button>
		</div>
	);
};

export default Projects;
