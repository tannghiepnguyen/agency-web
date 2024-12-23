import {
	FaAmazonPay,
	FaPaypal,
	FaShopify,
	FaSlack,
	FaTrello,
} from "react-icons/fa";
import Slider from "react-slick";

const companyData = [
	{
		id: 1,
		icon: <FaShopify size={28} />,
		name: "Shopify",
	},
	{
		id: 2,
		icon: <FaPaypal size={28} />,
		name: "Paypal",
	},
	{
		id: 3,
		icon: <FaSlack size={28} />,
		name: "Slack",
	},
	{
		id: 4,
		icon: <FaAmazonPay size={28} />,
		name: "AmazonPay",
	},
	{
		id: 5,
		icon: <FaTrello size={28} />,
		name: "Trello",
	},
];

const Banner = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
					infinite: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlides: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlides: 1,
				},
			},
		],
	};
	return (
		<div className="bg-black text-white py-4">
			<div className="container ">
				<Slider {...settings}>
					{companyData.map((company) => (
						<div className="flex text-center space-x-3" key={company.id}>
							<span className="inline-block mt-2">{company.icon}</span>
							<h1 className="inline-block text-2xl font-bold">
								{company.name}
							</h1>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Banner;
