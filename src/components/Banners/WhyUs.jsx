const aboutData = [
	{
		id: 1,
		num: "5+",
		title: "Year of Experience",
	},
	{
		id: 2,
		num: "86",
		title: "Happy Clients",
	},
	{
		id: 3,
		num: "32+",
		title: "Business Partners",
	},
];

const WhyUs = () => {
	return (
		<div className="min-h-screen flex flex-col items-end text-center lg:text-start bg-[url('../assets/whyus.jpg')] bg-no-repeat bg-cover bg-center">
			<h1
				data-aos="fade-up"
				className="text-6xl font-bold text-white w-full lg:w-1/3 py-10"
			>
				Why Us?
			</h1>
			{aboutData.map((data) => (
				<div
					data-aos="fade-up"
					key={data.id}
					className="w-full lg:w-1/3 space-y-5 pr-5 pb-14 lg:pb-6"
				>
					<div className="flex justify-center lg:items-center gap-5 w-full lg:w-2/4">
						<span className="text-6xl font-bold">{data.num}</span>
						<h3 className="text-2xl font-bold">{data.title}</h3>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
							repellat.
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default WhyUs;
