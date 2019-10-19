/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const html = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = true;

const htmlPlugin = new html({
	template: path.resolve(__dirname) + '/src/index.html',
	filename: 'index.html',
});
module.exports = {
	entry: ['./src/index.tsx'],
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.module\.s(a|c)ss$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: isDevelopment,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname) + '/dist',
	},
	mode: 'none',
	plugins: [
		htmlPlugin,
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		host: '0.0.0.0',
		disableHostCheck: true,
	},
};
