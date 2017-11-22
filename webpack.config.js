/**
 * Created by wanli on 2017/11/19.
 */
const path = require("path");
module.exports = {
	entry: {
		index: "./browser/js"
		// vendor: ['react']
	},
	output: {
		path: path.resolve(__dirname, "browser/dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js",
		publicPath: "/dist/"
	},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
			{
				test: /\.bundle\.js$/,
				use: "bundle-loader"
			},
			{
				test: /\.less$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}, 
					{loader: "less-loader"},
					{loader: "postcss-loader"}
				]
			}
		]
	}
};