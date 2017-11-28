/**
 * Created by wanli on 2017/11/28.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	// devtool: "inline-source-map",
	// devServer: {
	// 	contentBase: "./dist"
	// }
});