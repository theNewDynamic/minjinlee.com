//const webpack = require("webpack")
const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: "production",
	entry: {
		app: "./assets/index.js"		
	},
	output: {		
		path: path.resolve(__dirname, "assets/output"),    
    filename: "js/[name].js", // string
	},
	module: {
		rules: [			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]						
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader"
					}	
					// If you prefer to load CSS in JS, comment out MiniCssExtractPlugin and just use this:
					//"css-loader"	
				]
			},		
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {							
							publicPath: "/fonts",
							name: '[name][hash].[ext]',
							outputPath: './../../static/fonts/'
							// useRelativePath: true	
						},
					},
				],
			},
			{
				//Mustache loader for Algolia templates
				test: /\.html$/,				
				loader: "mustache-loader?minify",				
			},
		],
	},
	plugins: [		
		new CleanWebpackPlugin(
			[
				"./static/fonts/",				
				"./assets/output",
			],

			{
				root: __dirname,
				verbose: true,
				dry: false,
				allowExternal: true,
			}
		),
		new MiniCssExtractPlugin({
			filename: `./fonts/fonts.css`
		})	
	],
}
