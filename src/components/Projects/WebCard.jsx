import Image from "next/image";

const WebCard = ({ img, project, title }) => {
	return (
		<div className="flex flex-col-reverse lg:flex-row justify-between">
			<div
				data-aos="fade-down"
				className="w-full lg:w-2/4 space-y-8 mt-14 lg:mt-0"
			>
				<button className="bg-tertiary font-bold px-5 py-2 rounded-full">
					{project}
				</button>
				<h1>{title}</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					porro aliquam molestiae quia eum, modi impedit unde exercitationem
					consequatur adipisci dolore ad praesentium, magni vitae excepturi,
					saepe inventore deleniti natus.
				</p>
				<button className="border-2 border-black px-6 py-2 rounded-full font-medium">
					See Full Project
				</button>
			</div>
			<div data-aos="fade-up" className="w-full lg:w-2/5">
				<Image
					src={img}
					alt="img"
					className="shadow-[20px_20px_0px_0px_rgba(154,211,207)] rounded-md"
				/>
			</div>
		</div>
	);
};

export default WebCard;
