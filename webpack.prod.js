/**
 * Created by wanli on 2017/11/28.
 */
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const webpack =require("webpack");
module.exports = merge(common, {
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: "\"production\""
			}
		}),
		new UglifyJSPlugin()
	]
});