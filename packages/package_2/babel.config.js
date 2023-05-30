module.exports = (api) => {
    api.cache(true)

	return {
		presets: [
			"@babel/preset-env",
			["@babel/preset-react", {
				runtime: 'automatic',
				development: process.env.NODE_ENV === 'development',
			}],
		],
	}
};