/**
 * Created by wanli on 2017/11/28.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack =require("webpack");
module.exports = merge(common, {
	// devtool: "inline-source-map",
	// devServer: {
	// 	contentBase: "./dist"
	// }
	plugins:[
		new webpack.NoEmitOnErrorsPlugin()
	]
});