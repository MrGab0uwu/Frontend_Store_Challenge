/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: {
					500: '#FD9255',
					700: '#FF7B30',
				},
			},
		},
	},
	plugins: [],
};
