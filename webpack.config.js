import path from "path";

export default {
	context: path.join(__dirname, "./src"),
	entry: "./index",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "./dist")
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};
