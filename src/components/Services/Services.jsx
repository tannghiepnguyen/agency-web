import { FaCode } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import ServiceCard from "./ServiceCard";

const serviceData = [
	{
		id: 1,
		icon: <MdOutlineWeb size={45} />,
		title: "Web Design",
		color: "bg-tertiary",
	},
	{
		id: 2,
		icon: <FaCode size={45} />,
		title: "Development",
		color: "bg-secondary",
	},
	{
		id: 3,
		icon: <GiShoppingBag size={45} />,
		title: "E-commerce",
		color: "bg-primary",
	},
];

const Services = () => {
	return (
		<div className="min-h-screen container flex flex-col justify-center items-center gap-10 py-10">
			<h1
				data-aos="fade-up"
				className="text-3xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
			>
				Save time managing your business with our services
			</h1>
			<p
				data-aos="fade-up"
				className="text-sm lg:text-base w-full lg:w-3/4 text-center"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias
				maiores obcaecati numquam officiis dolores quibusdam omnis inventore.
				Quos, debitis!
			</p>
			<div
				data-aos="fade-up"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
			>
				{serviceData.map((service) => (
					<ServiceCard
						key={service.id}
						id={service.id}
						icon={service.icon}
						title={service.title}
						color={service.color}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
