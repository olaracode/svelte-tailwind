/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 30s linear infinite'
			}
		}
	},
	plugins: []
};
