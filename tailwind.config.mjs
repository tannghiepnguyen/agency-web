/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#fec447",
				secondary: "#ffccb4",
				tertiary: "#9ad3cf",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "3rem",
				},
			},
		},
	},
	plugins: [],
};
