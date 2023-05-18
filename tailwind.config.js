/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			minWidth: {
				"1/2": "50%",
				"11/12": "90.2%",
			},
			minHeight: {
				"300px": "300px",
				"700px": "700px",
			},
			height: {
				"270px": "270px",
				"620px": "620px",
			},
		},
	},
	plugins: [],
};

