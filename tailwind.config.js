/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			minWidth: {
				"1/2": "50%",
			},
			minHeight: {
				"700px": "700px",
			},
			height: {
				"600px": "600px",
			},
		},
	},
	plugins: [],
};

